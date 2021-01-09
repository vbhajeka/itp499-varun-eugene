export const level_two_toggle = {
  block_id: 'level_two_toggle',
  block_header: 'Further Details',
  enabled: true,
  required: true,
  questions: [
    {
      id: '0',
      question_header: 'Do you have more details to report about this surgery?',
      question_desc:
        'This includes details such as alpha angle, tonnis, PROM, and others. All further fields will be optional',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['1'],
          blocks_enabled: [
            'injection_details',
            'intra_operative_comp',
            'dvt_proph',
            'post_op_materials',
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
          blocks_enabled: ['exam_under_anesthesia_left', 'angle_details_left'],
        },
        {
          value: 'Right',
          children: [],
          blocks_enabled: [
            'exam_under_anesthesia_right',
            'angle_details_right',
          ],
        },
      ],
      value: [],
    },
  ],
};
