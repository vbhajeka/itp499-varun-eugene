const prior_left =
  // prior_left
  {
    block_id: 'prior_left',
    block_header: 'Prior Surgical History: Left Hip',
    block_description: "Details of Patient's prior surgery on the left hip",
    enabled: false,
    required: true,
    questions: [
      {
        id: 'prior_left_surgery',
        question_header: 'Prior Surgical History: Left Hip',
        question_desc: 'Was surgery previously performed on the left hip',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: [
              'prior_left_surgery_type',
              'prior_left_surgery_multiple',
            ],
            blocks_enabled: [],
          },
          {
            value: 'No',
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_left_surgery_type',
        question_header: 'Left Hip Surgery Type',
        question_desc: 'Select Most Recent Surgery Type(s)',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          {
            value: 'Arthroscopy',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'THA',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'PAO',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'I&D',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Surgical Dislocation',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'SCFE',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Other',
            children: ['prior_left_surgery_other'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_left_surgery_other',
        question_header: 'Other Prior Left Hip Surgery',
        question_desc: 'Enter other prior left hip surgery',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
      {
        id: 'prior_left_surgery_multiple',
        question_header: 'Multiple Prior Left Hip Surgeries',
        question_desc: 'Were there multiple surgeries performed?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: ['prior_left_surgery_all'],
            blocks_enabled: [],
          },
          {
            value: 'No',
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_left_surgery_all',
        question_header: 'All Prior Left Hip Surgeries',
        question_desc: 'Select all prior surgeries',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          {
            value: 'Arthroscopy',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'THA',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'PAO',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'I&D',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Surgical Dislocation',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'SCFE',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Other',
            children: ['prior_left_surgery_all_other'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_left_surgery_all_other',
        question_header: 'Other Prior Left Hip Surgery',
        question_desc: 'Enter other prior left hip surgery',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
    ],
  };

module.exports = prior_left;
