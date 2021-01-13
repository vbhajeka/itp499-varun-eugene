const basic_details = require('./hipstrSurveyQuestions/basic_details');
const height_weight = require('./hipstrSurveyQuestions/height_weight');

const prior_left = require('./hipstrSurveyQuestions/prior_left');
const prior_right = require('./hipstrSurveyQuestions/prior_right');
const level_one_aap = require('./hipstrSurveyQuestions/level_one_aap');

const left_labrum = require('./hipstrSurveyQuestions/left_labrum');
const left_acetabulum = require('./hipstrSurveyQuestions/left_acetabulum');
const left_acetabulum_articular_cartilage = require('./hipstrSurveyQuestions/left_acetabulum_articular_cartilage');
const left_femur = require('./hipstrSurveyQuestions/left_femur');
const left_capsule = require('./hipstrSurveyQuestions/left_capsule');
const other_left_details = require('./hipstrSurveyQuestions/other_left_details');
const left_glute_repair = require('./hipstrSurveyQuestions/left_glute_repair');
const left_diagnosis = require('./hipstrSurveyQuestions/left_diagnosis');

const right_labrum = require('./hipstrSurveyQuestions/right_labrum');
const right_acetabulum = require('./hipstrSurveyQuestions/right_acetabulum');
const right_acetabulum_articular_cartilage = require('./hipstrSurveyQuestions/right_acetabulum_articular_cartilage');
const right_femur = require('./hipstrSurveyQuestions/right_femur');
const right_capsule = require('./hipstrSurveyQuestions/right_capsule');
const other_right_details = require('./hipstrSurveyQuestions/other_right_details');
const right_glute_repair = require('./hipstrSurveyQuestions/right_glute_repair');
const right_diagnosis = require('./hipstrSurveyQuestions/right_diagnosis');

const level_two_toggle = require('./hipstrSurveyQuestions/level_two_toggle');

const exam_under_anesthesia = require('./hipstrSurveyQuestions/exam_under_anesthesia');

const angle_details_left = require('./hipstrSurveyQuestions/angle_details_left');
const angle_details_right = require('./hipstrSurveyQuestions/angle_details_right');

const random_level_two_details = require('./hipstrSurveyQuestions/random_level_two_details');
const injection_details = require('./hipstrSurveyQuestions/injection_details');
const intra_operative_comp = require('./hipstrSurveyQuestions/intra_operative_comp');
const dvt_proph = require('./hipstrSurveyQuestions/dvt_proph');
const post_op_materials = require('./hipstrSurveyQuestions/post_op_materials');

const realState = {
  ping: true,
  blocks_seen: [],
  surveyID: 'as341s',
  current: 'basic_details',
  submitted: false,
  blocks: [
    // basic_details
    basic_details,
    // height_weight
    /* commented out for the time being per Dr. Safran
     height_weight, */
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

module.exports = realState;
