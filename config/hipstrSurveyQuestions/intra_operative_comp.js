const intra_operative_comp = {
  block_id: 'intra_operative_comp',
  block_header: 'Intra-Operative Complications',
  enabled: false,
  required: false,
  questions: [
    {
      id: '0',
      question_header: 'Intra-Operative Complications',
      question_desc: 'Select all Intra-operative Complications that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Labral Damage', children: [], blocks_enabled: [] },
        { value: 'Chondral Damage', children: [], blocks_enabled: [] },
        {
          value: 'Bent/Broken Instrument(s)',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Anchors', children: ['1'], blocks_enabled: [] },
        { value: 'Suture Breakage', children: [], blocks_enabled: [] },
        { value: 'Loss of Traction', children: [], blocks_enabled: [] },
        {
          value: 'Inability to Adequately Distract',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Penetrate joint while drilling or anchor placement',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Anchor Complications',
      enabled: false,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Break', children: [], blocks_enabled: [] },
        { value: 'Pull-out', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = intra_operative_comp;
