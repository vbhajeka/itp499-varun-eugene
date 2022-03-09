const right_glute_repair = {
  block_id: 'right_glute_repair',
  block_header: 'Gluteus Tendon Repair Details',
  block_description: 'Right Side',
  enabled: false,
  required: true,
  questions: [
    {
      id: 'right_glute_repair_type',
      question_header: 'Gluteus Tendon Repair Type',
      question_desc: 'Select Gluteus tendon repair type',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Arthroscopic',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Open',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_lesion_size',
      question_header: 'Size of Lesion',
      question_desc: 'Enter the Size of the Lesion (in cm)',
      enabled: true,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'right_glute_repair_implant_manu',
      question_header: 'Implant Manufacturer',
      question_desc: 'Who manufactured the implant?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        {
          value: 'Arthex',
          children: ['right_glute_repair_arthex_system'],
          blocks_enabled: [],
        },
        {
          value: 'Biomet',
          children: ['right_glute_repair_biomet_system'],
          blocks_enabled: [],
        },
        {
          value: 'Conmed',
          children: ['right_glute_repair_conmed_system'],
          blocks_enabled: [],
        },
        {
          value: 'Smith & Nephew',
          children: ['right_glute_repair_smith_nephew'],
          blocks_enabled: [],
        },
        {
          value: 'Stryker / Pivot',
          children: ['right_glute_repair_stryker_pivot_type'],
          blocks_enabled: [],
        },
        {
          value: 'Medacta',
          children: ['right_glute_repair_medacta_system'],
          blocks_enabled: [],
        },
        {
          value: 'Other',
          children: [
            'right_glute_repair_implant_manu_other',
            'right_glute_repair_anchor_type',
            'right_glute_repair_anchor_mat',
          ],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_implant_manu_other',
      question_header: 'Other Implant Manufacturer',
      question_desc: 'What was the Other Implant Manufacturer?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_arthex_system',
      question_header: 'Arthex Implant System',
      question_desc: 'What was the Arthex Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'Pushlock', children: [], blocks_enabled: [] },
        {
          value: 'Biocomposite Pushlock',
          children: [],
          blocks_enabled: [],
        },
        { value: 'PEEK SutureTak', children: [], blocks_enabled: [] },
        {
          value: 'Biocomposite SutureTak',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Knotless FiberTak', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_glute_repair_arthex_system_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_arthex_system_other',
      question_header: 'Other Arthex Implant System',
      question_desc: 'What was the Other Arthex Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_biomet_system',
      question_header: 'Biomet Implant System',
      question_desc: 'What was the Biomet Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        {
          value: 'Juggerknot Long Soft Anchor',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Other',
          children: ['right_glute_repair_biomet_system_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_biomet_system_other',
      question_header: 'Other Biomet Implant System',
      question_desc: 'What was the Other Biomet Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_conmed_system',
      question_header: 'Conmed Implant System',
      question_desc: 'What was the Conmed Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        {
          value: 'Poplok',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Press FT', children: [], blocks_enabled: [] },
        { value: 'Bio Mini Revo', children: [], blocks_enabled: [] },
        { value: 'Y Knot', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_glute_repair_conmed_system_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_conmed_system_other',
      question_header: 'Other Conmed Implant System',
      question_desc: 'What was the Other Conmed Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_smith_nephew',
      question_header: 'Smith & Nephew Implant System',
      question_desc: 'What was the Smith & Nephew Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'Bioraptor Knotless', children: [], blocks_enabled: [] },
        { value: 'Bioraptor PK', children: [], blocks_enabled: [] },
        { value: 'Labralock P', children: [], blocks_enabled: [] },
        { value: 'Mini Magnum', children: [], blocks_enabled: [] },
        { value: 'Mini Magnum Plus', children: [], blocks_enabled: [] },
        { value: 'Osteoraptor', children: [], blocks_enabled: [] },
        { value: 'Q-Fix', children: [], blocks_enabled: [] },
        { value: 'Mini Q-Fix', children: [], blocks_enabled: [] },
        { value: 'Speedlock', children: [], blocks_enabled: [] },
        { value: 'Speedlock Plus', children: [], blocks_enabled: [] },
        { value: 'Speedlock Ultra', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_glute_repair_smith_nephew_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_smith_nephew_other',
      question_header: 'Other Smith & Nephew Implant System',
      question_desc: 'What was the Other Smith & Nephew Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_stryker_pivot_type',
      question_header: 'Stryker / Pivot Implant System',
      question_desc: 'What was the Stryker / Pivot Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'Iconix', children: [], blocks_enabled: [] },
        { value: 'Pivot Cinchlock SS', children: [], blocks_enabled: [] },
        { value: 'Pivot Nanotak Flex', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_glute_repair_stryker_pivot_type_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_stryker_pivot_type_other',
      question_header: 'Other Stryker / Pivot Implant System',
      question_desc: 'What was the Other Stryker / Pivot Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_medacta_system',
      question_header: 'Medacta Implant System',
      question_desc: 'What was the Medacta Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'Mectalock PPEK', children: [], blocks_enabled: [] },
        { value: 'Mectalock TI', children: [], blocks_enabled: [] },
        { value: 'Mectatap TI', children: [], blocks_enabled: [] },
        { value: 'Mectalock All Suture', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_glute_repair_medacta_system_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_medacta_system_other',
      question_header: 'Other Medacta Implant System',
      question_desc: 'What was the Other Medacta Implant System?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_num_anchors',
      question_header: 'Number of Anchors',
      question_desc: 'How many anchors were used?',
      enabled: true,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'number',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_anchor_mat',
      question_header: 'Anchor Material',
      question_desc: 'What was the material of the anchor?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'All-suture Based', children: [], blocks_enabled: [] },
        { value: 'Metal', children: [], blocks_enabled: [] },
        { value: 'Bioabsorbable', children: [], blocks_enabled: [] },
        { value: 'PEEK', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_anchor_type',
      question_header: 'Anchor Type',
      question_desc: 'What type of anchor was used?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'SATA',
      options: [
        { value: 'Knotted', children: [], blocks_enabled: [] },
        { value: 'Knotless', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_formation',
      question_header: 'Gluteus Repair Formation',
      question_desc: 'What was the formation',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Single Row', children: [], blocks_enabled: [] },
        { value: 'Double Row', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_augmentation',
      question_header: 'Augmentation',
      question_desc: 'Was there any augmentation?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Yes',
          children: ['right_glute_repair_augmentation_type'],
          blocks_enabled: [],
        },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_augmentation_type',
      question_header: 'Type of Augmentation',
      question_desc: 'What was the type of Augmentation?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'MC',
      options: [
        {
          value: 'Autograft',
          children: ['right_glute_repair_autograft_type'],
          blocks_enabled: [],
        },
        {
          value: 'Allograft',
          children: ['right_glute_repair_allograft_type'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_autograft_type',
      question_header: 'Autograft Type',
      question_desc: 'Enter the autograft type',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_allograft_type',
      question_header: 'Type of Allograft',
      question_desc: 'What was the type of Allograft?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'MC',
      options: [
        { value: 'IT Band', children: [], blocks_enabled: [] },
        {
          value: 'Dermal Autograft',
          children: ['right_glute_repair_dermal_allograft_type'],
          blocks_enabled: [],
        },
        {
          value: 'Other',
          children: ['right_glute_repair_other_allograft'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_other_allograft',
      question_header: 'Other Type of Allograft',
      question_desc: 'What was the Other Type of Allograft?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: 'right_glute_repair_dermal_allograft_type',
      question_header: 'Type of Dermal Allograft',
      question_desc: 'What was the type of Dermal Allograft?',
      long_question_desc: [
        'Graftjacket - Wright Medical Technology / human cadaver dermis',
        'Cuffpatch - Arthrotek / Porcine SIS',
        'Restore - Depuy Orthopaedics / Porcine SIS',
        'Permacol - Zimmer / Porcine dermis',
        'Tissuemend - Stryker / Porcine dermis',
        'Artelon and Sportmesh - Artimplant and Biomet / Polyurethane urea polymer',
        'Bio-Blanket - Kensey Nash Corporation / Bovine dermis',
        'Gore-Tex Patch WL - Gore and Associates / ePTFE',
        'Leeds-Keio - Xiros plc, Yufu Itonaga / Polyester ethylene terephthalate',
        'Poly-Tape - Xiros plc, Yufu Itonaga / Polyester ethylene terephthalate',
        'OrthoADAPT - Pegasus Biologic Inc / Equine pericardium',
        'Shelhigh No-React Encuff Patch - Shelhigh Inc / Bovine or porcine pericardium',
      ],
      enabled: false,
      required: true,
      isPref: true,
      type: 'MC',
      options: [
        {
          value: 'Graftjacket',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Cuffpatch',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Restore',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Permacol',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Tissuemend',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Artelon and Sportmesh',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Bio-Blanket',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Gore-Tex Patch WL',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Leeds-Keio',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Poly-Tape',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'OrthoADAPT',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Shelhigh No-React Encuff Patch',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Other',
          children: ['right_glute_repair_dermal_allograft_type_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_glute_repair_dermal_allograft_type_other',
      question_header: 'Other Type of Dermal Allograft',
      question_desc: 'What was the Other Type of Dermal Allograft?',
      enabled: false,
      required: true,
      isPref: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
  ],
};

module.exports = right_glute_repair;
