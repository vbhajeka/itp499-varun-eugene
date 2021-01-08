export const level_one_aap =
  // level_one_aap
  {
    block_id: 'level_one_aap',
    block_header: 'Approach, Anesthesia & Paraylsis Details',
    block_description:
      'Details about the Approach, Anesthesia & Paraylsis Details',
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
      {
        id: '47',
        question_header: 'Femoral Osteotomy',
        question_desc:
          'Is this hip arthroscopy performed in conjunction with femoral osteotomy?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: [], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '49',
        question_header: 'Paralysis',
        question_desc: 'Was there any paralysis?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: [], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
    ],
  };
