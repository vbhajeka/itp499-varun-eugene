const prior_right =
  // prior_right
  {
    block_id: 'prior_right',
    block_header: 'Prior Surgical History: Right Hip',
    block_description: "Details of Patient's prior surgery on the right hip",
    enabled: false,
    required: true,
    questions: [
      {
        id: 'prior_right_surgery',
        question_header: 'Prior Surgical History: Right Hip',
        question_desc: 'Was surgery previously performed on the right hip',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: [
              'prior_right_surgery_type',
              'prior_right_surgery_multiple',
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
        id: 'prior_right_surgery_type',
        question_header: 'Right Hip Surgery Type',
        question_desc: 'Select Surgery Type',
        enabled: false,
        required: true,
        type: 'MC',
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
            children: ['prior_right_surgery_other'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_right_surgery_other',
        question_header: 'Other Prior Right Hip Surgery',
        question_desc: 'Enter other prior right hip surgery',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
      {
        id: 'prior_right_surgery_multiple',
        question_header: 'Multiple Prior Right Hip Surgeries',
        question_desc: 'Were there multiple surgeries performed?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: ['prior_right_surgery_all'],
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
        id: 'prior_right_surgery_all',
        question_header: 'All Prior Right Hip Surgeries',
        question_desc: 'Select all prior surgeries',
        enabled: false,
        required: false,
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
            children: ['prior_right_surgery_all_other'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'prior_right_surgery_all_other',
        question_header: 'Other Prior Right Hip Surgery',
        question_desc: 'Enter other prior right hip surgery',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
    ],
  };

module.exports = prior_right;
