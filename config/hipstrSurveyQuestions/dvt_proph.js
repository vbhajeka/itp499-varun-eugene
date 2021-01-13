const dvt_proph = {
  block_id: 'dvt_proph',
  block_header: 'DVT Prophylaxis',
  enabled: false,
  required: false,
  questions: [
    {
      id: '2',
      question_header: 'DVT Prophylaxis',
      question_desc: 'Was there DVT Prophylaxis?',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Yes', children: ['0'], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '0',
      question_header: 'DVT Prophylaxis Type',
      question_desc: 'Select all that apply',
      enabled: false,
      required: false,
      type: 'SATA',
      options: [
        {
          value: 'NSAID',
          children: [],
          blocks_enabled: [],
        },
        { value: 'ASA', children: [], blocks_enabled: [] },
        {
          value: 'Injectable heparin like products',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Oral anticoagulants (Coumadin, Xarelto, Eliquiis)',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Mechanical', children: ['1'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Mechanical DVT Prophylaxis Type',
      enabled: false,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Intermittent compression', children: [], blocks_enabled: [] },
        { value: 'TED hose', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = dvt_proph;
