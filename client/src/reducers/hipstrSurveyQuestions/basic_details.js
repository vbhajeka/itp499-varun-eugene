export const basic_details =
  // basic_details
  {
    block_id: 'basic_details',
    block_header: 'Surgery Details',
    block_description: 'Surgery Date & Site',
    enabled: true,
    required: true,
    questions: [
      {
        id: '0',
        question_header: 'Date of Surgery',
        question_desc: "Defaulted to Today's Date",
        enabled: true,
        required: false,
        type: 'FR',
        fr_type: 'date',
        children: [],
        value: [],
      },
      {
        id: '1',
        question_header: 'Surgery Site',
        question_desc: 'Which side was operated on? Select all that apply',
        enabled: true,
        required: true,
        type: 'SATA',
        options: [
          {
            value: 'Left',
            children: [],
            blocks_enabled: [
              'prior_left',
              'left_labrum',
              'left_acetabulum',
              'left_acetabulum_articular_cartilage',
              'left_femur',
              'left_capsule',
              'other_left_details',
              'left_diagnosis',
            ],
          },
          {
            value: 'Right',
            children: [],
            blocks_enabled: [
              'prior_right',
              'right_labrum',
              'right_acetabulum',
              'right_acetabulum_articular_cartilage',
              'right_femur',
              'right_capsule',
              'other_right_details',
              'right_diagnosis',
            ],
          },
        ],
        value: [],
      },
    ],
  };
