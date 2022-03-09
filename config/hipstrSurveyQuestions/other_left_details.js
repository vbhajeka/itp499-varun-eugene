const other_left_details = {
  block_id: 'other_left_details',
  block_header: 'Additional Left Hip Details',
  enabled: false,
  required: true,
  questions: [
    {
      id: 'other_left_details',
      question_header: 'Other Surgery Details',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        {
          value: 'Synovextomy',
          children: ['other_left_details_synvextomy'],
          blocks_enabled: [],
        },
        {
          value: 'Ligamentum Teres',
          children: ['other_left_details_ligamentum_teres'],
          blocks_enabled: [],
        },
        {
          value: 'Capsular Plication',
          children: ['other_left_details_capsular_plication'],
          blocks_enabled: [],
        },
        {
          value: 'Iliopsoas Tendon Lengthening',
          children: ['other_left_details_iliosopas_details'],
          blocks_enabled: [],
        },
        {
          value: 'IT Band Lengthening (external snapping)',
          children: ['other_left_details_it_band'],
          blocks_enabled: [],
        },
        {
          value: 'Trochanteric Bursectomy',
          children: ['other_left_details_bursectomy_details'],
          blocks_enabled: [],
        },
        {
          value: 'Gluteus Tendon Repair',
          children: [],
          blocks_enabled: ['left_glute_repair'],
        },
        {
          value: 'I&D for Joint Infection',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Subchondroplasty',
          children: ['other_left_details_subchondroplasty'],
          blocks_enabled: [],
        },
        { value: 'Hamstring Repair', children: [], blocks_enabled: [] },
        {
          value: 'Open Cartilage Repair',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Proximal Femur Osteotomy (PFO)',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Surgical Hip Dislocation (SDH)',
          children: [],
          blocks_enabled: [],
        },
        { value: 'ORIF', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['other_left_details_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'other_left_details_synvextomy',
      question_header: 'Synvextomy Details',
      question_desc: 'Was the synvextomy partial or total?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Partial', children: [], blocks_enabled: [] },
        {
          value: 'Total',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'other_left_details_other',
      question_header: 'Other Left Details',
      question_desc: 'Enter any other details observed about the left side',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'other_left_details_iliosopas_details',
      question_header: 'Iliopsoas Tendon Lengthening Details',
      question_desc: 'At What Level was the Iliopsoas Tendon Lengthened?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Central Compartment', children: [], blocks_enabled: [] },
        {
          value: 'Peripheral Compartment',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Lesser Trochanter', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'other_left_details_bursectomy_details',
      question_header: 'Trochanteric Bursectomy Details',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'IT Band Sparing', children: [], blocks_enabled: [] },
        { value: 'Tenoplasty', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'other_left_details_it_band',
      question_header: 'IT Band Lengthening (external snapping) Details',
      question_desc: 'Select all that apply',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Posterior Band Incision',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Central IT Band Partial Excision',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'other_left_details_ligamentum_teres',
      question_header: 'Ligamentum Teres Details',
      question_desc: 'Select all that apply',
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
          children: ['left_ligamentum_teres_Recon_graft_type'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'other_left_details_subchondroplasty',
      question_header: 'Subchondroplasty Details',
      question_desc: 'Select all that apply',
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
      id: 'other_left_details_capsular_plication',
      question_header: 'Plication Details',
      question_desc: 'Location of Plication',
      enabled: false,
      required: true,
      type: 'SATA',
      options: [
        {
          value: 'Iliofemoral Ligament',
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
          children: ['other_left_plication_details'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'other_left_plication_details',
      question_header: 'Other Plication Details',
      question_desc: 'Enter other details observed about the Plication',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'left_ligamentum_teres_Recon_graft_type',
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

module.exports = other_left_details;
