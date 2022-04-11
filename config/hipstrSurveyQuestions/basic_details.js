const basic_details = {
  block_id: 'basic_details',
  block_header: 'Pre-Screening',
  block_description: "basic details about what you're looking for",
  enabled: true,
  required: true,
  questions: [
    {
      id: 'own_car_yn',
      question_header: 'Do you alrady own a car?',
      question_desc: '',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: [],
          blocks_enabled: ['own_car_specs'],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'new_car',
      question_header: 'Are you looking for a new hybrid or electric car?',
      question_desc: '(yes or no)',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: [],
          blocks_enabled: ['new_car_specs'],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'used_car',
      question_header: 'Are you interested in a used car?',
      question_desc: '(yes or no)',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: [],
          blocks_enabled: ['used_car_specs'],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'demographics_household_size',
      question_header: 'How many live in your household?',
      question_desc: 'Enter the number of people, including yourself',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: 'demographics_income',
      question_header: 'How would you describe your income level?',
      question_desc: 'Choose from one of the categories',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Less than $50,000', children: [], blocks_enabled: [] },
        { value: '$50,00-$100,000', children: [], blocks_enabled: [] },
        { value: '$100,000+', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = basic_details;
