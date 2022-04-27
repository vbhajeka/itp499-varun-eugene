const own_car_specs = {
  block_id: 'own_car_specs',
  block_header: 'Current Car Information',
  block_description: 'Give us some details about the Car you already Own',
  enabled: false,
  required: true,
  questions: [
    {
      id: 'own_car_type',
      question_header: 'Type of car',
      question_desc: 'What type of car do you drive?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Gasoline',
          children: ['own_car_mileage'],
          blocks_enabled: [],
        },
        { value: 'Hybrid', children: ['own_car_mileage'], blocks_enabled: [] },
        { value: 'Electric', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'own_car_mileage',
      question_header: 'Mileage of car',
      question_desc: 'Enter the mileage of the car per gallon',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
  ],
};

module.exports = own_car_specs;
