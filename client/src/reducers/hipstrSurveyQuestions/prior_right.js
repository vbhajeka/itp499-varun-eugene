export const prior_right =
  // prior_right
  {
    block_id: 'prior_right',
    block_header: 'Prior Surgical History: Right Hip',
    block_description: "Details of Patient's prior surgery on the right hip",
    enabled: false,
    required: true,
    questions: [
      {
        id: '24',
        question_header: 'Prior Surgical History: Right Hip',
        question_desc: 'Was surgery previously performed on the right hip',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: ['7', '8'],
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
        id: '7',
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
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: '8',
        question_header: 'Multiple Prior Right Hip Surgeries',
        question_desc: 'Were there multiple surgeries performed?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: ['9'],
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
        id: '9',
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
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
    ],
  };
