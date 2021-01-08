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
import { right_labrum } from './hipstrSurveyQuestions/right_labrum';
import { right_acetabulum } from './hipstrSurveyQuestions/right_acetabulum';
import { right_acetabulum_articular_cartilage } from './hipstrSurveyQuestions/right_acetabulum_articular_cartilage';
import { right_femur } from './hipstrSurveyQuestions/right_femur';
import { right_capsule } from './hipstrSurveyQuestions/right_capsule';
import { other_right_details } from './hipstrSurveyQuestions/other_right_details';
import { right_glute_repair } from './hipstrSurveyQuestions/right_glute_repair';

export const realState = {
  ping: true,
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

    // level_one_aap
    level_one_aap,

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

    // exam_under_anesthesia
    {
      block_id: 'exam_under_anesthesia',
      block_header: 'Exam Under Anesthesia',
      block_description:
        'Details about the Exam while the patient was under anesthesia',
      enabled: false,
      required: true,
      questions: [
        {
          id: '25',
          question_header: 'Left PROM Performed',
          question_desc: 'Was PROM performed on the left side?',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'Yes', children: ['26', '27', '28'], blocks_enabled: [] },
            { value: 'No', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '26',
          question_header: 'Left PROM: FF',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '180', children: [], blocks_enabled: [] },
            { value: '150 to 179', children: [], blocks_enabled: [] },
            { value: '120 to 149', children: [], blocks_enabled: [] },
            { value: '90 to 119', children: [], blocks_enabled: [] },
            { value: '60 to 89', children: [], blocks_enabled: [] },
            { value: '30 to 59', children: [], blocks_enabled: [] },
            { value: '0 to 29', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '27',
          question_header: 'Left PROM in 90 deg: IR',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '90', children: [], blocks_enabled: [] },
            { value: '75 to 89', children: [], blocks_enabled: [] },
            { value: '60 to 74', children: [], blocks_enabled: [] },
            { value: '45 to 59', children: [], blocks_enabled: [] },
            { value: '30 to 44', children: [], blocks_enabled: [] },
            { value: '15 to 29', children: [], blocks_enabled: [] },
            { value: '0 to 14', children: [], blocks_enabled: [] },
            { value: '-1 to -14', children: [], blocks_enabled: [] },
            { value: '-15 to -29', children: [], blocks_enabled: [] },
            { value: '-30 to -44', children: [], blocks_enabled: [] },
            { value: '-45', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '28',
          question_header: 'Left PROM in 90 deg: ER',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '120', children: [], blocks_enabled: [] },
            { value: '105 to 119', children: [], blocks_enabled: [] },
            { value: '90 to 104', children: [], blocks_enabled: [] },
            { value: '75 to 89', children: [], blocks_enabled: [] },
            { value: '60 to 74', children: [], blocks_enabled: [] },
            { value: '45 to 59', children: [], blocks_enabled: [] },
            { value: '30 to 44', children: [], blocks_enabled: [] },
            { value: '15 to 29', children: [], blocks_enabled: [] },
            { value: '0 to 14', children: [], blocks_enabled: [] },
            { value: '-1 to -14', children: [], blocks_enabled: [] },
            { value: '-15 to -29', children: [], blocks_enabled: [] },
            { value: '-30 to -44', children: [], blocks_enabled: [] },
            { value: '-45', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '29',
          question_header: 'Right PROM Performed',
          question_desc: 'Was PROM performed on the right side?',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'Yes', children: ['30', '31', '32'], blocks_enabled: [] },
            { value: 'No', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '30',
          question_header: 'Right PROM: FF',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '180', children: [], blocks_enabled: [] },
            { value: '150 to 179', children: [], blocks_enabled: [] },
            { value: '120 to 149', children: [], blocks_enabled: [] },
            { value: '90 to 119', children: [], blocks_enabled: [] },
            { value: '60 to 89', children: [], blocks_enabled: [] },
            { value: '30 to 59', children: [], blocks_enabled: [] },
            { value: '0 to 29', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '31',
          question_header: 'Right PROM in 90 deg: IR',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '90', children: [], blocks_enabled: [] },
            { value: '75 to 89', children: [], blocks_enabled: [] },
            { value: '60 to 74', children: [], blocks_enabled: [] },
            { value: '45 to 59', children: [], blocks_enabled: [] },
            { value: '30 to 44', children: [], blocks_enabled: [] },
            { value: '15 to 29', children: [], blocks_enabled: [] },
            { value: '0 to 14', children: [], blocks_enabled: [] },
            { value: '-1 to -14', children: [], blocks_enabled: [] },
            { value: '-15 to -29', children: [], blocks_enabled: [] },
            { value: '-30 to -44', children: [], blocks_enabled: [] },
            { value: '-45', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '32',
          question_header: 'Right PROM in 90 deg: ER',
          question_desc: 'Enter range',
          enabled: false,
          required: true,
          type: 'MC',
          options: [
            { value: '120', children: [], blocks_enabled: [] },
            { value: '105 to 119', children: [], blocks_enabled: [] },
            { value: '90 to 104', children: [], blocks_enabled: [] },
            { value: '75 to 89', children: [], blocks_enabled: [] },
            { value: '60 to 74', children: [], blocks_enabled: [] },
            { value: '45 to 59', children: [], blocks_enabled: [] },
            { value: '30 to 44', children: [], blocks_enabled: [] },
            { value: '15 to 29', children: [], blocks_enabled: [] },
            { value: '0 to 14', children: [], blocks_enabled: [] },
            { value: '-1 to -14', children: [], blocks_enabled: [] },
            { value: '-15 to -29', children: [], blocks_enabled: [] },
            { value: '-30 to -44', children: [], blocks_enabled: [] },
            { value: '-45', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
      ],
    },
    // angle_details
    {
      block_id: 'angle_details',
      block_header: 'Hip Angle Details',
      block_description: 'Details about the Angle of the Hip',
      enabled: false,
      required: true,
      questions: [
        {
          id: '33',
          question_header: 'Left Center Edge Angle',
          question_desc: 'Enter the Left Center Edge Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '34',
          question_header: 'Left Center Edge Angle',
          question_desc: 'Enter the type of edge angle',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'Sourcil', children: [], blocks_enabled: [] },
            { value: 'Edge', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '35',
          question_header: 'Left Alpha Angle',
          question_desc: 'Enter Left Side Alpha Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '36',
          question_header: 'Left Femoral Version',
          question_desc: 'Enter the Left Femoral Version',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '37',
          question_header: 'Left Femoral Version',
          question_desc: 'Enter the type Left Femoral Version',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'CT', children: [], blocks_enabled: [] },
            { value: 'MRI', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '38',
          question_header: 'Left Tonnis Angle',
          question_desc: 'Enter the Left Tonnis Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '39',
          question_header: 'Left Acetabular Index',
          question_desc: 'Enter the Left Acetabular Index',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '40',
          question_header: 'Right Center Edge Angle',
          question_desc: 'Enter the Right Center Edge Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '41',
          question_header: 'Right Center Edge Angle',
          question_desc: 'Enter the type of edge angle',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'Sourcil', children: [], blocks_enabled: [] },
            { value: 'Edge', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '42',
          question_header: 'Right Alpha Angle',
          question_desc: 'Enter Right Side Alpha Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '43',
          question_header: 'Right Femoral Version',
          question_desc: 'Enter the Right Femoral Version',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '44',
          question_header: 'Right Femoral Version',
          question_desc: 'Enter the type Right Femoral Version',
          enabled: true,
          required: true,
          type: 'MC',
          options: [
            { value: 'CT', children: [], blocks_enabled: [] },
            { value: 'MRI', children: [], blocks_enabled: [] },
          ],
          value: [],
        },
        {
          id: '45',
          question_header: 'Right Tonnis Angle',
          question_desc: 'Enter the Right Tonnis Angle',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
        {
          id: '46',
          question_header: 'Right Acetabular Index',
          question_desc: 'Enter the Right Acetabular Index',
          enabled: true,
          required: true,
          type: 'FR',
          fr_type: 'number',
          value: [],
        },
      ],
    },
  ],
};
