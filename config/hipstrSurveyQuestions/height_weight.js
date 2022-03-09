const height_weight =
  // height_weight
  {
    block_id: 'height_weight',
    block_header: 'Patient Physical Details',
    block_description: 'Patient Measurements',
    enabled: true,
    required: true,
    questions: [
      {
        id: 'height',
        question_header: 'Patient Height',
        question_desc: 'Height',
        enabled: true,
        required: true,
        type: 'FR',
        fr_type: 'number',
        children: [],
        value: [],
      },
      {
        id: 'height_unit',
        question_header: 'Height Unit',
        question_desc: 'What unit was used to measure height?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Inches', children: [], blocks_enabled: [] },
          { value: 'Centimeters', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: 'weight',
        question_header: 'Patient Weight',
        question_desc: 'Weight in Pounds',
        enabled: true,
        required: true,
        type: 'FR',
        fr_type: 'number',
        children: [],
        value: [],
      },
      {
        id: 'weight_unit',
        question_header: 'Weight Unit',
        question_desc: 'What unit was used to measure weight?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Pounds', children: [], blocks_enabled: [] },
          { value: 'Kilograms', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
    ],
  };

module.exports = height_weight;
