const new_car_specs = {
  block_id: 'new_car_specs',
  block_header: 'New Car Information',
  block_description: "Give us some details about a new car you're looking at",
  enabled: false,
  required: true,
  questions: [
    {
      id: 'new_car_make',
      question_header: 'Make',
      question_desc: 'Enter the make of your new desired car',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Tesla', children: [], blocks_enabled: [] },
        { value: 'Nissan', children: [], blocks_enabled: [] },
        { value: 'Chevrolet', children: [], blocks_enabled: [] },
        { value: 'Hyundai', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'new_car_model',
      question_header: 'Make and model',
      question_desc: 'Enter the model of your new desired car',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Model 3', children: [], blocks_enabled: [] },
        { value: 'Leaf', children: [], blocks_enabled: [] },
        { value: 'Bolt', children: [], blocks_enabled: [] },
        { value: 'Ioniq', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = new_car_specs;
