const level_one_aap =
  // level_one_aap
  {
    block_id: 'level_one_aap',
    block_header: 'Surgery Approach Details',
    block_description: 'Details about the Surgery Approach',
    enabled: true,
    required: true,
    questions: [
      {
        id: '46',
        question_header: 'Approach',
        question_desc: 'Enter the type of Approach',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Arthroscopy', children: [], blocks_enabled: [] },
          { value: 'Combined', children: [], blocks_enabled: [] },
          { value: 'Open', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
    ],
  };

module.exports = level_one_aap;
