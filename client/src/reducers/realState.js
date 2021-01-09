import { basic_details } from './hipstrSurveyQuestions/basic_details';
import { height_weight } from './hipstrSurveyQuestions/height_weight';

import { prior_left } from './hipstrSurveyQuestions/prior_left';
import { prior_right } from './hipstrSurveyQuestions/prior_right';
import { level_one_aap } from './hipstrSurveyQuestions/level_one_aap';

import { left_labrum } from './hipstrSurveyQuestions/left_labrum';
import { left_acetabulum } from './hipstrSurveyQuestions/left_acetabulum';
import { left_acetabulum_articular_cartilage } from './hipstrSurveyQuestions/left_acetabulum_articular_cartilage';
import { left_femur } from './hipstrSurveyQuestions/left_femur';
import { left_capsule } from './hipstrSurveyQuestions/left_capsule';
import { other_left_details } from './hipstrSurveyQuestions/other_left_details';
import { left_glute_repair } from './hipstrSurveyQuestions/left_glute_repair';
import { left_diagnosis } from './hipstrSurveyQuestions/left_diagnosis';

import { right_labrum } from './hipstrSurveyQuestions/right_labrum';
import { right_acetabulum } from './hipstrSurveyQuestions/right_acetabulum';
import { right_acetabulum_articular_cartilage } from './hipstrSurveyQuestions/right_acetabulum_articular_cartilage';
import { right_femur } from './hipstrSurveyQuestions/right_femur';
import { right_capsule } from './hipstrSurveyQuestions/right_capsule';
import { other_right_details } from './hipstrSurveyQuestions/other_right_details';
import { right_glute_repair } from './hipstrSurveyQuestions/right_glute_repair';
import { right_diagnosis } from './hipstrSurveyQuestions/right_diagnosis';

import { level_two_toggle } from './hipstrSurveyQuestions/level_two_toggle';

import { exam_under_anesthesia } from './hipstrSurveyQuestions/exam_under_anesthesia';

import {
  angle_details_left,
  angle_details_right,
} from './hipstrSurveyQuestions/angle_details';

import { random_level_two_details } from './hipstrSurveyQuestions/random_level_two_details';
import { injection_details } from './hipstrSurveyQuestions/injection_details';
import { intra_operative_comp } from './hipstrSurveyQuestions/intra_operative_comp';
import { dvt_proph } from './hipstrSurveyQuestions/dvt_proph';
import { post_op_materials } from './hipstrSurveyQuestions/post_op_materials';

export const realState = {
  ping: true,
  blocks_seen: [],
  surveyID: 'as341s',
  current: 'basic_details',
  blocks: [
    // basic_details
    basic_details,
    // height_weight
    height_weight,
    // prior_left
    prior_left,
    // prior_right
    prior_right,

    // left_diagnosis
    left_diagnosis,
    // right_diagnosis
    right_diagnosis,

    // left_labrum
    left_labrum,
    // left_acetabulum
    left_acetabulum,
    // left_acetabulum_articular_cartilage
    left_acetabulum_articular_cartilage,
    // left_femur
    left_femur,
    // left_capsule
    left_capsule,
    // other_left_details
    other_left_details,
    // left_glute_repair
    left_glute_repair,

    // right_labrum
    right_labrum,
    // right_acetabulum
    right_acetabulum,
    // right_acetabulum_articular_cartilage
    right_acetabulum_articular_cartilage,
    // right_femur
    right_femur,
    // right_capsule
    right_capsule,
    // other_right_details
    other_right_details,
    // right_glute_repair
    right_glute_repair,

    // level_one_aap
    level_one_aap,

    // level_two_toggle
    level_two_toggle,

    // random_level_two_details
    random_level_two_details,

    // exam_under_anesthesia
    exam_under_anesthesia,

    // angle_details
    angle_details_left,
    angle_details_right,

    // injection_details
    injection_details,

    // intra_operative_comp
    intra_operative_comp,

    // dvt_proph
    dvt_proph,

    // post_op_materials
    post_op_materials,
  ],
};
