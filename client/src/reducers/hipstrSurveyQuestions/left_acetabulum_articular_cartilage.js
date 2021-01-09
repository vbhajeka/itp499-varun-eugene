export const left_acetabulum_articular_cartilage = {
  block_id: 'left_acetabulum_articular_cartilage',
  block_header: 'Left Acetabulum Articular Cartilage Details',
  block_description: 'Details about the Left Acetabulum Articular Cartilage',
  enabled: false,
  required: true,
  questions: [
    {
      id: '0',
      question_header: 'Left Acetabulum Articular Cartilage',
      question_desc:
        'What was the status of the Left Acetabulum Articular Cartilage?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Normal', children: [], blocks_enabled: [] },
        {
          value: 'Abnormal',
          children: ['1', '2'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Chondro-labral Separation',
      question_desc: 'Was there Chondro-labral Separation?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Yes', children: ['3'], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '3',
      question_header: 'Chondro-labral Separation Treatment',
      question_desc:
        'What was the Treatment for the Chondro-labral Separation?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'None', children: [], blocks_enabled: [] },
        { value: 'Chondroplasty', children: [], blocks_enabled: [] },
        { value: 'Microfracture', children: [], blocks_enabled: [] },
        { value: 'Cartilage Scaffold', children: [], blocks_enabled: [] },
        {
          value: 'Juvenile Cartilage Cells',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Fibrin Glue', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['4'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '4',
      question_header: 'Other Chondro-labral Separation Treatment',
      question_desc:
        'What was the Treatment for the Chondro-labral Separation?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '2',
      question_header: 'Articular Cartilage Lesions Present',
      question_desc: 'Were there Articular Cartilage Lesions Present?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['5', '6', '7', '8'],
          blocks_enabled: [],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '5',
      question_header: 'Acetabular Lesion Location',
      question_desc: 'Select areas of GREATEST Articular Cartilage Damage',
      enabled: false,
      required: true,
      type: 'SATA',
      img:
        'https://redcap.stanford.edu/surveys/index.php?pid=21691&__passthru=DataEntry%2Fimage_view.php&doc_id_hash=c29c36c994ecdc13b826e4512112785fa8c0594c&id=1165309&instance=1&s=3YFJPJAHNE',
      options: [
        { value: '1', children: [], blocks_enabled: [] },
        { value: '2', children: [], blocks_enabled: [] },
        { value: '3', children: [], blocks_enabled: [] },
        { value: '4', children: [], blocks_enabled: [] },
        { value: '5', children: [], blocks_enabled: [] },
        { value: '6', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '6',
      question_header: 'Acetabular Extent of Damage',
      question_desc: 'From the rim to the edge of Cotyloid Fossa',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: '< 1/3', children: [], blocks_enabled: [] },
        { value: '1/3 to 2/3', children: [], blocks_enabled: [] },
        { value: '> 2/3', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '7',
      question_header:
        'Select Beck Classification for area of greatest damage:',
      long_question_desc: [
        'Normal - Macroscopically sound cartilage',
        'Malacia - Roughening of surface, fibrillation',
        'Debonding - Loss of fixation to the subchondral bone, macroscopically sound cartilage, carpet phenomenon',
        'Cleavage - Loss of fixation to the subchondral bone, frayed edges, thinning of cartilage',
        'Defect - Full thickness defect',
      ],
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Normal',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Malacia',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Debonding',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Cleavage',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Defect',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '8',
      question_header: 'Articular Separation Treatment',
      question_desc: 'What was the Treatment for the Articular Separation?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'None', children: [], blocks_enabled: [] },
        { value: 'Chondroplasty', children: [], blocks_enabled: [] },
        { value: 'Microfracture', children: [], blocks_enabled: [] },
        { value: 'Cartilage Scaffold', children: [], blocks_enabled: [] },
        {
          value: 'Juvenile Cartilage Cells',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Fibrin Glue', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['63'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '63',
      question_header: 'Other Articular Separation Treatment',
      question_desc: 'What was the Other Articular Separation Treatment?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
  ],
};