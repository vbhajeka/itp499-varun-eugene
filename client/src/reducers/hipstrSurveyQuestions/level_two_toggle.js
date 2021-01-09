export const level_two_toggle = {
  block_id: 'level_two_toggle',
  block_header: 'Further Details',
  enabled: true,
  required: false,
  questions: [
    {
      id: '0',
      question_header:
        'Would you like to provide more details about the surgery?',
      question_desc: 'This includes radiographic and operative findings',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['1'],
          blocks_enabled: [
            'random_level_two_details',
            'injection_details',
            'intra_operative_comp',
            'dvt_proph',
            'post_op_materials',
            'exam_under_anesthesia',
          ],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Which side can you give more details on?',
      question_desc: 'Select one or both',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Left',
          children: [],
          blocks_enabled: ['angle_details_left'],
        },
        {
          value: 'Right',
          children: [],
          blocks_enabled: ['angle_details_right'],
        },
      ],
      value: [],
    },
  ],
};
