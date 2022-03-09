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
          children: [],
          blocks_enabled: [
            'random_level_two_details',
            'injection_details',
            'intra_operative_comp',
            'dvt_proph',
            'post_op_materials',
            'exam_under_anesthesia',
          ],
          blocks_partially_enabled: [
            { id: 'angle_details_left', index: 1 },
            { id: 'angle_details_right', index: 1 },
          ],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = level_two_toggle;
