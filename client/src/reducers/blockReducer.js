import {
  SET_STATE_INIT,
  SELECT_MC_SATA,
  DROPDOWN_SELECT,
  UPDATE_FR,
  NEXT_BLOCK,
  PREV_BLOCK,
  SUBMIT_SURVEY,
  BACK_TO_HOME,
} from '../actions/types';

// import { realState } from './realState';
let realState = { cont: false };
let initState = JSON.parse(JSON.stringify(realState));

// const enableChildrenRec = (block, currQ, option_selected, toEnable) => {
//   // base cases
//   console.log(currQ.text, option_selected);
//   if (currQ.type === 'FR') {
//     console.log('quitting because FR has no children');
//     return;
//   } else if (
//     option_selected === undefined ||
//     option_selected === null ||
//     option_selected.length === 0
//   ) {
//     console.log('quitting because nothing was selected');
//     return;
//   } else {
//     option_selected.forEach((option) => {
//       console.log('attempting new recursive calls');
//       currQ.options
//         .find((o) => option === o.value)
//         .children.forEach((c) => {
//           console.log(c);
//           let subQ = block.questions.find((q) => q.id === c);
//           subQ.enabled = toEnable;
//           enableChildrenRec(block, subQ, subQ.value, toEnable);
//         });
//     });
//   }
// };

const enableChildrenRec = (blocks, currQ, option_selected, toEnable) => {
  // base cases
  console.log(currQ.text, option_selected);
  if (currQ.type === 'FR') {
    console.log('quitting because FR has no children');
    return;
  } else if (
    option_selected === undefined ||
    option_selected === null ||
    option_selected.length === 0
  ) {
    console.log('quitting because nothing was selected');
    return;
  } else {
    option_selected.forEach((option) => {
      console.log('attempting new recursive calls');
      currQ.options
        .find((o) => option === o.value)
        .children.forEach((c) => {
          console.log(c);
          // let subQ = block.questions.find((q) => q.id === c);
          // subQ.enabled = toEnable;
          // enableChildrenRec(block, subQ, subQ.value, toEnable);
          blocks.forEach((b) => {
            b.questions.forEach((bq) => {
              if (bq.id === c) {
                bq.enabled = toEnable;
                enableChildrenRec(blocks, bq, bq.value, toEnable);
              }
            });
          });
        });
    });
  }
};

const enableBlocks = (blocks, currQ, options, value) => {
  options.forEach((x) => {
    const currOptions = currQ.options.find((o) => o.value === x);
    if (currOptions.blocks_enabled) {
      console.log(currOptions.blocks_enabled);
      currOptions.blocks_enabled.forEach((be) => {
        blocks.find((b) => b.block_id === be).enabled = value;
      });
    }
  });
};

const selectMC_SATABody = (state, payload) => {
  const currBlock = state.blocks.find((b) => b.block_id === payload.block_id);

  const currQ = currBlock.questions.find((q) => q.id === payload.question_id);

  let newDeselections = [];
  let newSelections = [];

  // first check for deselction
  if (currQ.value.find((o) => o === payload.option_selected) !== undefined) {
    console.log('this is a pure deselection');
    currQ.value = currQ.value.filter((o) => o !== payload.option_selected);
    newDeselections = [payload.option_selected];
  } else if (currQ.type === 'MC') {
    // overwrite value cuz its MC
    if (currQ.value) {
      newDeselections = currQ.value;
    }
    newSelections = [payload.option_selected];
    currQ.value = [payload.option_selected];
  } else if (currQ.type === 'SATA') {
    newSelections = [payload.option_selected];
    currQ.value.push(payload.option_selected);
  }

  console.log('del:', newDeselections);
  console.log('add:', newSelections);

  if (newDeselections.length > 0) {
    enableChildrenRec(state.blocks, currQ, newDeselections, false);
    enableBlocks(state.blocks, currQ, newDeselections, false);
  }
  if (newSelections.length > 0) {
    enableChildrenRec(state.blocks, currQ, newSelections, true);
    enableBlocks(state.blocks, currQ, newSelections, true);
  }

  state.ping = !state.ping;
  return state;
};

const dropdownSelectBody = (state, payload) => {
  const currBlock = state.blocks.find((b) => b.block_id === payload.block_id);

  const currQ = currBlock.questions.find((q) => q.id === payload.question_id);

  if (currQ.type === 'DDS') {
    payload.option_selected = [payload.option_selected];
  }

  const newAdditions = payload.option_selected.filter(
    (x) => !currQ.value.includes(x)
  );

  const newDeletions = currQ.value.filter(
    (x) => !payload.option_selected.includes(x)
  );
  console.log('add:', newAdditions);
  console.log('del:', newDeletions);

  let addition = newAdditions.length > 0 && newAdditions[0].length > 0;
  let deletion = newDeletions.length > 0 && newDeletions[0].length > 0;

  console.log(addition, deletion);

  // always overwrite value because the entire value is sent in payload
  console.log(payload.option_selected.length, payload.option_selected);
  currQ.value =
    payload.option_selected.length === 1 && payload.option_selected[0] === ''
      ? []
      : payload.option_selected;
  // enable children of new additions
  if (addition) {
    enableChildrenRec(state.blocks, currQ, newAdditions, true);
    enableBlocks(state.blocks, currQ, newAdditions, true);
  }
  // disable children of new deletions
  if (deletion) {
    enableChildrenRec(state.blocks, currQ, newDeletions, false);
    enableBlocks(state.blocks, currQ, newDeletions, false);
  }
  state.ping = !state.ping;
  return state;
};

const freeResponseBody = (state, payload) => {
  const currBlock = state.blocks.find((b) => b.block_id === payload.block_id);

  currBlock.questions.find((q) => q.id === payload.question_id).value = [
    payload.option_selected,
  ];

  state.ping = !state.ping;
  return state;
};

const nextBlockActionBody = (state, payload) => {
  // TODO: Hardcoded summary page
  let curr_block_index =
    state.blocks.indexOf(
      state.blocks.find((b) => b.block_id === state.current)
    ) + 1;
  while (!state.blocks[curr_block_index].enabled) {
    curr_block_index++;
  }
  state.current = state.blocks[curr_block_index].block_id;
  state.ping = !state.ping;

  state.blocks_seen.push(state.blocks[curr_block_index].block_id);

  return state;
};

const prevBlockActionBody = (state, payload) => {
  let curr_block_index =
    state.blocks.indexOf(
      state.blocks.find((b) => b.block_id === state.current)
    ) - 1;
  while (!state.blocks[curr_block_index].enabled) {
    curr_block_index--;
  }
  state.current = state.blocks[curr_block_index].block_id;
  state.ping = !state.ping;

  return state;
};

const clearState = () => {
  let temp = JSON.parse(JSON.stringify(initState));
  initState = JSON.parse(JSON.stringify(temp));
  return { ...temp };
};

export default function reducer(state = realState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_STATE_INIT:
      return { ...payload.initState, cont: true };
    case SELECT_MC_SATA:
      console.log(initState);
      return { ...selectMC_SATABody(state, payload) };
    case DROPDOWN_SELECT:
      return { ...dropdownSelectBody(state, payload) };
    case UPDATE_FR:
      return { ...freeResponseBody(state, payload) };
    case NEXT_BLOCK:
      return { ...nextBlockActionBody(state, payload) };
    case PREV_BLOCK:
      return { ...prevBlockActionBody(state, payload) };
    case SUBMIT_SURVEY:
      return { ...clearState(true) };
    case BACK_TO_HOME:
      return { ...clearState(false) };
    default:
      return state;
  }
}
