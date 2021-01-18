const level_two_toggle = {
  block_id: 'level_two_toggle',
  block_header: 'Further Details',
  enabled: true,
  required: true,
  questions: [
    {
      id: 'enable_level_two',
      question_header:
        'Would you like to provide more details about the surgery?',
      question_desc: 'This includes radiographic and operative findings',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['enable_level_two_side'],
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
      id: 'enable_level_two_side',
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

module.exports = level_two_toggle;
