import {
  NEXT_QUESTION,
  SELECTED_OPTION,
  PREV_QUESTION,
} from '../actions/types';

const initialState = {
  bank: [
    {},
    {
      questionID: 1,
      title: 'Multiple Free Response',
      type: 'MFR',
      text: 'Test MFR',
      options: [
        {
          id: '1-0',
          text: 'height',
          next: 2,
        },
        {
          id: '1-1',
          text: 'weight',
          next: 3,
        },
      ],
      selected: null,
    },
    {
      questionID: 2,
      title: 'Prior Surgical History',
      type: 'MC',
      text: 'Multiple prior LEFT hip surgeries?',
      options: [
        {
          id: '2-0',
          text: 'Yes',
          next: 3,
        },
        {
          id: '2-1',
          text: 'No',
          next: 3,
        },
      ],
      selected: null,
    },
    {
      questionID: 3,
      title: 'Anesthesia',
      type: 'MC',
      text: 'What type of Anesthesia was used?',
      options: [
        {
          id: '3-0',
          text: 'Spinal',
          next: 4,
        },
        {
          id: '3-1',
          text: 'Lumbar Plexus Block',
          next: 4,
        },
        {
          id: '3-2',
          text: 'Spinal / Epidural',
          next: 4,
        },
      ],
      selected: null,
    },
    {
      questionID: 4,
      title: 'Left Side Details',
      type: 'MC',
      text: 'Left Labrum',
      options: [
        {
          id: '4-0',
          text: 'Normal',
          next: 6,
        },
        {
          id: '4-1',
          text: 'Abnormal',
          next: 5,
        },
      ],
      selected: null,
    },
    {
      questionID: 5,
      title: 'Left Side Details',
      type: 'MC',
      text: 'Labral Tear',
      options: [
        {
          id: '5-0',
          text: 'Yes',
          next: 6,
        },
        {
          id: '5-1',
          text: 'No',
          next: 6,
        },
      ],
      selected: null,
    },
    {
      questionID: 6,
      title: 'End of Placeholder',
      type: 'MC',
      text: 'End of Placeholder',
      options: [
        {
          id: '6-0',
          text: 'placeholder',
          next: 6,
        },
        {
          id: '6-1',
          text: 'placeholder',
          next: 5,
        },
      ],
      selected: null,
    },
  ],
  current: {
    questionID: 1,
    title: 'Multiple Free Response',
    type: 'MFR',
    text: 'Test MFR',
    options: [
      {
        id: '1-0',
        text: 'height',
        next: 2,
      },
      {
        id: '1-1',
        text: 'weight',
        next: 3,
      },
    ],
    selected: null,
  },
  previous: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  let stateClone;

  switch (type) {
    case NEXT_QUESTION:
      stateClone = { ...state };
      const currQ = stateClone.current;
      if (currQ.selected === null) {
        return stateClone;
      }
      stateClone.previous.push(currQ);
      stateClone.current = stateClone.bank.filter(
        (question) => question.questionID === currQ.selected.next
      )[0];
      stateClone.bank.filter(
        (question) => question.questionID === currQ.questionID
      )[0].selected = currQ.selected;

      return stateClone;
    case PREV_QUESTION:
      stateClone = { ...state };
      stateClone.current = stateClone.previous.pop();
      return stateClone;
    case SELECTED_OPTION:
      stateClone = { ...state };
      if (stateClone.current.type === 'MC') {
        stateClone.current.selected = payload.optionSelected;
      } else {
        //stateClone.current.selected.push;
      }
      return stateClone;
    default:
      return state;
  }
}
