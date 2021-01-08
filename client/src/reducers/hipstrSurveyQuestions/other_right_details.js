export const other_right_details = {
  block_id: 'other_right_details',
  block_header: 'Other Right Details',
  block_description: 'Select any further details observed on the right side',
  enabled: false,
  required: true,
  questions: [
    {
      id: '0',
      question_header: 'Other Right Details',
      question_desc: 'Select any further details observed on the right side',
      enabled: true,
      required: true,
      type: 'SATA',
      options: [
        { value: 'Arthroscopy', children: [], blocks_enabled: [] },
        {
          value: 'Iliopsoas tendon lengthening',
          children: ['1'],
          blocks_enabled: [],
        },
        {
          value: 'Trochanteric bursectomy',
          children: ['2'],
          blocks_enabled: [],
        },
        {
          value: 'Gluteus tendon repair',
          children: [],
          blocks_enabled: ['right_glute_repair'],
        },
        {
          value: 'IT band lengthening (external snapping)',
          children: ['3'],
          blocks_enabled: [],
        },
        {
          value: 'I&D for joint infection',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Ligamentum teres', children: ['4'], blocks_enabled: [] },
        { value: 'Subchondroplasty', children: ['5'], blocks_enabled: [] },
        { value: 'Plication', children: ['6'], blocks_enabled: [] },
        {
          value: 'Proximal femur osteotomy (PFO)',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Open cartilage repair',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Surgical hip dislocation (SDH)',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Other', children: ['8'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Iliopsoas tendon lengthening Details',
      question_desc:
        'Select any further details observed about the Iliopsoas tendon lengthening (Select all that apply)',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        { value: 'Central compartment', children: [], blocks_enabled: [] },
        {
          value: 'Peripheral compartment',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Lesser trochanter', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '2',
      question_header: 'Trochanteric bursectomy Details',
      question_desc:
        'Select any further details observed about the Trochanteric bursectomy',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'IT Band Sparring', children: [], blocks_enabled: [] },
        { value: 'Tenoplasty', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '3',
      question_header: 'IT band lengthening (external snapping) Details',
      question_desc:
        'Select any further details observed about the IT band lengthening (external snapping, Select all that apply)',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Posterior band incision',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Central IT band partial excision',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '4',
      question_header: 'Ligamentum Teres Details',
      question_desc:
        'Select any further details observed about the Ligamentum Teres (Select all that apply)',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Debridement',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Reconstruction',
          children: ['9'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '5',
      question_header: 'Subchondroplasty Details',
      question_desc:
        'Select any further details observed about the Subchondroplasty (Select all that apply)',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Acetabulum',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Femur',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '6',
      question_header: 'Plication Details',
      question_desc:
        'Select any further details observed about the Plication (Select all that apply)',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Iliofemoral ligament',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'RICH',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Other',
          children: ['7'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '7',
      question_header: 'Other Plication Details',
      question_desc: 'Enter other details observed about the Plication',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: '8',
      question_header: 'Other Right Details',
      question_desc: 'Enter any other details observed about the right side',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: '9',
      question_header: 'Ligamentum Teres Reconstruction Graft Type',
      question_desc: 'Enter the Ligamentum Teres Reconstruction Graft Type',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
  ],
};
