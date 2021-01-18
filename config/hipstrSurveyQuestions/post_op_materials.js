const post_op_materials = {
  block_id: 'post_op_materials',
  block_header: 'Post Operative Assistive Devices',
  enabled: false,
  required: false,
  questions: [
    {
      id: 'bracing_prescribed',
      question_header: 'Post Operative Bracing',
      question_desc: 'Was Post Operative Bracing Prescribed?',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['bracing_prescribed_duration'],
          blocks_enabled: [],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'bracing_prescribed_duration',
      question_header: 'Post Operative Bracing',
      question_desc: 'How many weeks has bracing been prescribed for?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: '< 2', children: [], blocks_enabled: [] },
        { value: '2 - 4', children: [], blocks_enabled: [] },
        { value: '5 - 8', children: [], blocks_enabled: [] },
        { value: '9 - 12', children: [], blocks_enabled: [] },
        { value: '12 +', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'crutches_prescribed',
      question_header: 'Post Operative Crutches',
      question_desc: 'Was Post Operative Bracing prescribed?',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['crutches_prescribed_duration'],
          blocks_enabled: [],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'crutches_prescribed_duration',
      question_header: 'Post Operative Crutches',
      question_desc: 'How many weeks have crutches been prescribed for?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: '< 2', children: [], blocks_enabled: [] },
        { value: '2 - 4', children: [], blocks_enabled: [] },
        { value: '5 - 8', children: [], blocks_enabled: [] },
        { value: '9 - 12', children: [], blocks_enabled: [] },
        { value: '12 +', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = post_op_materials;
