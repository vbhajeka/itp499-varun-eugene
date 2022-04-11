const commute_details = {
  block_id: 'commute_details',
  block_header: 'Commute Details',
  block_description: 'Tell us about your daily commute!',
  enabled: true,
  required: true,
  questions: [
    {
      id: 'alt_transpo',
      question_header:
        'Would you be interested in taking public transportation or rideshare for your commute?',
      // question_desc: '(yes or no)',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Yes', children: [], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'car_purpose',
      question_header:
        'Will this car be mainly for your regular work commute, or a family car?',
      question_desc: '',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Work', children: ['addr_work'], blocks_enabled: [] },
        { value: 'Family', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'addr_home',
      question_header: 'What is your home address?',
      question_desc: '',
      enabled: true,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'addr_work',
      question_header: 'What is your work address? ',
      question_desc: '',
      enabled: false,
      required: false,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'miles_errands',
      question_header:
        'How many miles do you spend driving to errands per week?',
      question_desc: '',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: 'miles_vacay',
      question_header:
        'How many miles do you spend driving for recreational trips or vacation in a month?',
      question_desc: '',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
  ],
};

module.exports = commute_details;
