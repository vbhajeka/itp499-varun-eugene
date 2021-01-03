import _ from 'lodash';

import {
  NEW_NEXT_QUESTION,
  NEW_SELECT_OPTION,
  MFRO_SELECT,
  NEW_PREVIOUS_QUESTION,
} from '../actions/types';

import { questionBank } from './questionBank';
import { real_order, real_bank } from './realOrder';

const initialState = {
  survey_id: '3jdue7DUe',
  current: '0',
  // questions: questionBank,
  questions: real_bank,
  ping: false,
  firstQuestion: true,
  lastQuestion: false,
  previousEnables: [],
  order: real_order,
  // order: [
  //   {
  //     q_id: '0',
  //     value: ['option 2'],
  //     enabled: true,
  //   },
  //   {
  //     q_id: '1',
  //     value: [],
  //     enabled: false,
  //   },
  //   {
  //     q_id: '2',
  //     value: [],
  //     enabled: false,
  //   },
  //   {
  //     q_id: '3',
  //     value: [],
  //     enabled: true,
  //   },
  //   {
  //     q_id: '4',
  //     value: [],
  //     enabled: true,
  //   },
  //   {
  //     q_id: '5',
  //     value: [],
  //     enabled: true,
  //   },
  //   {
  //     q_id: '6',
  //     value: [],
  //     enabled: false,
  //   },
  //   {
  //     q_id: '7',
  //     value: [],
  //     enabled: false,
  //   },
  // ],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  let newState = null;

  switch (type) {
    case NEW_NEXT_QUESTION:
      // enable appropriate questions
      newState = { ...state };

      const currQuestion = newState.order.find(
        (o) => o.q_id === newState.current
      );

      const qDetails = newState.questions.find(
        (q) => q.id === newState.current
      );

      // different rules for MFRO
      if (qDetails.type === 'MFR' && qDetails.required) {
        // find out which subquestions are required
        // then figure out if they've been answered or not
        console.log('new rules!');
        let notDone = false;
        qDetails.options.forEach((o) => {
          const subQDeets = newState.questions.find((q) => q.id === o.q_id);
          console.log(subQDeets);
          if (
            subQDeets.required &&
            (subQDeets.value === null || subQDeets.value.length === 0)
          ) {
            notDone = true;
          }
        });
        if (notDone) {
          return newState;
        }
      } else if (
        qDetails.required &&
        (qDetails.value === null || qDetails.value.length === 0)
      ) {
        return newState;
      }

      console.log(qDetails);

      let toEnable = [];

      currQuestion.value.forEach((d) => {
        let temp = qDetails.dependents.find((o) => o.value === d);
        if (temp !== undefined) {
          toEnable = toEnable.concat(temp.children);
        }
      });

      console.log(toEnable);

      newState.previousEnables.push(toEnable);
      toEnable.forEach(
        (q_id) => (newState.order.find((q) => q.q_id === q_id).enabled = true)
      );

      // update current
      let newIndex = newState.order.indexOf(currQuestion) + 1;

      while (
        newIndex < newState.order.length &&
        !newState.order[newIndex].enabled
      ) {
        newIndex++;
      }

      newState.current = newState.order[newIndex].q_id;

      // just moved forward, cant be first question anymore

      newState.firstQuestion = false;

      return newState;

    case NEW_PREVIOUS_QUESTION:
      newState = { ...state };

      if (newState.firstQuestion) {
        return newState;
      }

      let newQIndex =
        newState.order.indexOf(
          newState.order.find((o) => o.q_id === newState.current)
        ) - 1;

      while (newQIndex > 0 && !newState.order[newQIndex].enabled) {
        newQIndex--;
      }

      newState.current = newState.order[newQIndex].q_id;

      if (newQIndex === 0) {
        newState.firstQuestion = true;
      }

      const deEnables = newState.previousEnables.pop();
      deEnables.forEach(
        (q_id) => (newState.order.find((q) => q.q_id === q_id).enabled = false)
      );

      return newState;

    case NEW_SELECT_OPTION:
      // if value is already selected, deselect it
      // if question is MC, make sure only one is selected
      // if question is FRQ, add to selected
      // update value in newState.order
      // update value in newState.questions

      newState = { ...state };

      const currQBank = newState.questions.find(
        (q) => q.id === newState.current
      );

      // special case: free response answer, it gets handled differently
      if (currQBank.type === 'FR') {
        currQBank.value.length = 0;
        currQBank.value = [payload.option];

        newState.order.find(
          (q) => q.q_id === newState.current
        ).value.length = 0;

        newState.order.find((q) => q.q_id === newState.current).value = [
          payload.option,
        ];

        return newState;
      }

      let currValOrder = newState.order.find((q) => q.q_id === newState.current)
        .value;

      let currValBank = newState.questions.find(
        (q) => q.id === newState.current
      ).value;

      console.log(payload.option.value);

      if (currValOrder.includes(payload.option.value)) {
        // if this is a deselction
        currValOrder.splice(currValOrder.indexOf(payload.option.value), 1);
        currValBank.splice(currValBank.indexOf(payload.option.value), 1);
      } else {
        // if it is a new selection
        if (
          newState.questions.find((q) => q.id === newState.current).type ===
          'SATA'
        ) {
          currValOrder.push(payload.option.value);
          currValBank.push(payload.option.value);
        } else {
          currValOrder.length = 0;
          currValOrder.push(payload.option.value);
          currValBank.length = 0;
          currValBank.push(payload.option.value);
        }
      }

      newState.ping = !newState.ping;

      return newState;

    case MFRO_SELECT:
      newState = { ...state };

      const currQuestionOrder = newState.order.find(
        (o) => o.q_id === newState.current
      );

      const currQuestionBank = newState.questions.find(
        (q) => q.id === newState.current
      );

      if (
        currQuestionOrder.value === null ||
        currQuestionOrder.value.length === 0
      ) {
        currQuestionOrder.value = [
          { id: payload.subQuestionID, value: payload.option },
        ];
        currQuestionBank.value = [
          { id: payload.subQuestionID, value: payload.option },
        ];
      } else {
        if (
          currQuestionOrder.value.find(
            (o) => o.id === payload.subQuestionID
          ) !== undefined
        ) {
          currQuestionOrder.value.find(
            (o) => o.id === payload.subQuestionID
          ).value = payload.option;

          currQuestionBank.value.find(
            (o) => o.id === payload.subQuestionID
          ).value = payload.option;
        } else {
          currQuestionOrder.value.push({
            id: payload.subQuestionID,
            value: payload.option,
          });

          currQuestionBank.value.push({
            id: payload.subQuestionID,
            value: payload.option,
          });
        }
      }

      const subQuestionOrder = newState.order.find(
        (q) => q.q_id === payload.subQuestionID
      );

      console.log(subQuestionOrder);

      const subQuestionBank = newState.questions.find(
        (q) => q.id === payload.subQuestionID
      );

      subQuestionOrder.value = [payload.option];
      subQuestionBank.value = [payload.option];

      return newState;
    default:
      return state;
  }
}
