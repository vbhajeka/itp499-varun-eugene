export const mainQuestions = [
  {
    type: 'MC',
    header: 'Side',
    text: 'Which side was operated on?',
    value: [],
    required: true,
    options: [
      {
        value: 'Left',
      },
      {
        value: 'Right',
      },
      {
        value: 'Both',
      },
    ],
    dependents: [
      {
        value: 'Left',
        children: ['All left details'],
      },
      {
        value: 'Right',
        children: ['All right details'],
      },
      {
        value: 'Both',
        children: ['All details'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Data Level',
    text: 'What level of data do you wish to report?',
    value: [],
    required: true,
    options: [
      {
        value: 'Level 1',
      },
      {
        value: 'Level 2 - Detailed (includes alpha angle, tennis)',
      },
    ],
    dependents: [
      {
        value: 'Level 2 - Detailed (includes alpha angle, tennis)',
        children: ['level 2 data'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Patient Demographics',
    text: "Was the Patient's Height/Weight recorded?",
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['H/W/BMI'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Prior Surgical History',
    text: 'Left Hip?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['Prior Left Details'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Prior Surgical History',
    text: 'Right Hip?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['Prior Right Details'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Conjunction',
    text:
      'Is this hip arthroscopy performed in conjunction with femoral osteotomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Approach',
    text: 'Approach?',
    value: [],
    required: true,
    options: [
      {
        value: 'Arthroscopy',
      },
      {
        value: 'Combined',
      },
      {
        value: 'Open',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Anesthesia',
    text: 'What kind of Anesthesia was used?',
    value: [],
    required: true,
    options: [
      {
        value: 'General',
      },
      {
        value: 'Spinal',
      },
      {
        value: 'Lumbar Plexus Block',
      },
      {
        value: 'Spinal / Epidural',
      },
      {
        value: 'Other',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Paralysis',
    text: 'Paralysis?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
];

export const heightWeight = [
  {
    type: 'MFR',
    header: 'Patient Demographics',
    text: 'Enter Patient Demographics',
    value: [],
    required: true,
    options: [
      { value: 'height', q_id: 'height id' },
      { value: 'weight', q_id: 'weight id' },
      { value: 'bmi', q_id: 'bmi id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRFR',
    header: 'Patient Height (in)',
    required: true,
    value: [],
    options: [],
    dependents: [],
  },
  {
    type: 'MFRFR',
    header: 'Patient Weight (lbs)',
    required: true,
    value: [],
    options: [],
    dependents: [],
  },
  {
    type: 'MFRFR',
    header: 'Patient BMI',
    required: true,
    value: [],
    options: [],
    dependents: [],
  },
];

export const priorLeft = [
  {
    type: 'MFR',
    header: 'Prior Surgical History',
    text: 'Enter Prior Surgury: Left Hip',
    value: [],
    required: true,
    options: [
      {
        value: 'Most recent Left Hip Surgery',
        q_id: 'left hip',
      },
      {
        value: 'Multiple Prior Left Hip Surgeries',
        q_id: 'multi',
      },
      {
        value: 'All Prior Left hip Surgeries',
        q_id: 'all',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Most recent Left Hip Surgery',
    value: [],
    required: true,
    options: [
      {
        value: 'Arthrosocpy',
      },
      {
        value: 'THA',
      },
      {
        value: 'PAO',
      },
      {
        value: 'I&D',
      },
      {
        value: 'Surgical Dislocation',
      },
      {
        value: 'SCFE',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Multiple Prior Left Hip Surgeries',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRSATA',
    header: 'All Prior Left hip Surgeries',
    value: [],
    required: false,
    options: [
      {
        value: 'Arthrosocpy',
      },
      {
        value: 'THA',
      },
      {
        value: 'PAO',
      },
      {
        value: 'I&D',
      },
      {
        value: 'Surgical Dislocation',
      },
      {
        value: 'SCFE',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
];

export const priorRight = [
  {
    type: 'MFR',
    header: 'Prior Surgical History',
    text: 'Enter Prior Surgury: Right Hip',
    value: [],
    required: true,
    options: [
      {
        value: 'Most recent Right Hip Surgery',
        q_id: 'left hip',
      },
      {
        value: 'Multiple Prior Right Hip Surgeries',
        q_id: 'multi',
      },
      {
        value: 'All Prior Right hip Surgeries',
        q_id: 'all',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Most recent Right Hip Surgery',
    value: [],
    required: true,
    options: [
      {
        value: 'Arthrosocpy',
      },
      {
        value: 'THA',
      },
      {
        value: 'PAO',
      },
      {
        value: 'I&D',
      },
      {
        value: 'Surgical Dislocation',
      },
      {
        value: 'SCFE',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Multiple Prior Right Hip Surgeries',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRSATA',
    header: 'All Prior Right hip Surgeries',
    value: [],
    required: false,
    options: [
      {
        value: 'Arthrosocpy',
      },
      {
        value: 'THA',
      },
      {
        value: 'PAO',
      },
      {
        value: 'I&D',
      },
      {
        value: 'Surgical Dislocation',
      },
      {
        value: 'SCFE',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
];

export const leftDetails = [
  {
    type: 'MC',
    header: 'Left Side',
    text: 'Left Labrum?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Side',
    text: 'Left Acetabulum?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Side',
    text: 'Left Acetabulum Articular Cartilage?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Side',
    text: 'Left Femur?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Side',
    text: 'Left Capsule?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Arthroscopy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Iliopsoas Tendon Lengthening?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['ilio sata question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Trochanteric Bursectomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['troch mc question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Gluteus Tendon Repair?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'IT Band Lengthening (External Snapping)?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['length question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'I&D for Joint Infection?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Ligamentum Teres?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['teres sata'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Subchondroplasty?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['sub mc'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Plication?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['plication sata'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Proximal Femur Osteotomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Open Cartilage Repair?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Left Details',
    text: 'Surgical Hip Dislocation?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
];

export const otherLeftSubDetails = [
  {
    type: 'SATA',
    header: 'Left Details',
    text: 'Iliopsoas Tendon Lengthening?',
    value: [],
    required: true,
    options: [
      {
        value: 'Central Compartment',
      },
      {
        value: 'Peripheral Compartment',
      },
      {
        value: 'Lesser Trochanter',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Details',
    text: 'Trochanteric Bursectomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'IT Band Sparring',
      },
      {
        value: 'Tenoplasty',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Left Details',
    text: 'IT Band Lengthening (External Snapping)?',
    value: [],
    required: true,
    options: [
      {
        value: 'Posterior Bank Incision',
      },
      {
        value: 'Central IT Band Partial Excision',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Left Details',
    text: 'Ligamentum Teres?',
    value: [],
    required: true,
    options: [
      {
        value: 'Debridement',
      },
      {
        value: 'Reconstruction',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Details',
    text: 'Subchondroplasty?',
    value: [],
    required: true,
    options: [
      {
        value: 'Acetabulum',
      },
      {
        value: 'Femur',
      },
      {
        value: 'Both',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Left Details',
    text: 'Plication?',
    value: [],
    required: true,
    options: [
      {
        value: 'Iliofemeral Ligament',
      },
      {
        value: 'RICH',
      },
      {
        value: 'Other',
      },
    ],
  },
];

export const leftLabramDetails = [
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Labral Tear?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['clockface to from', 'tear treatment'],
      },
      {
        value: 'No',
        children: [
          'other abnormalities',
          'abnormality to from',
          'abnormality treatment',
        ],
      },
    ],
  },
  {
    type: 'MFR',
    header: 'Left Labral Tear Details',
    text: 'Enter Labral Tear Details',
    value: [],
    required: true,
    options: [
      { value: 'clockface_to', q_id: 'clockface to id' },
      { value: 'clockface_from', q_id: 'clockface from id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Tear Clockface "from"',
    value: [],
    required: true,
    options: [
      {
        value: '12',
      },
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Tear Clockface "to"',
    value: [],
    required: true,
    options: [
      {
        value: '12',
      },
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
    ],
    dependents: [],
  },
  {
    type: 'SATA',
    header: 'Left Labral Tear Details',
    text: 'Left Labral Tear Treatment?',
    value: [],
    required: true,
    options: [
      {
        value: 'Debridement',
      },
      {
        value: 'Labrectomy',
      },
      {
        value: 'Repair',
      },
      {
        value: 'Reconstruction',
      },
      {
        value: 'None',
      },
    ],
    dependents: [
      {
        value: 'Repair',
        children: [
          'repair type',
          'implant manu',
          'anchor details w/subtle',
          'sublte configuration',
        ],
      },
      {
        value: 'Reconstruction',
        children: ['type/length of graft', 'implant manu', 'anchor details'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Repair Type?',
    value: [],
    required: true,
    options: [
      {
        value: 'Primary',
      },
      {
        value: 'Revision',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFR',
    header: 'Left Labrum Abnormality',
    text: 'Enter Labral Graft Details',
    value: [],
    required: true,
    options: [
      { value: 'type', q_id: 'type of graft id' },
      { value: 'length', q_id: 'length of graft id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Type of Labral Graft',
    value: [],
    required: true,
    options: [
      {
        value: 'Allograft',
      },
      {
        value: 'Autograft',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRFR',
    header: 'Length of Labral Graft',
    required: true,
    value: [],
    options: [],
    dependents: [],
  },
  {
    type: 'SATA',
    header: 'Left Labral Tear Details',
    text: 'Implant Manufacturer?',
    value: [],
    required: true,
    options: [
      {
        value: 'Arthrex',
      },
      {
        value: 'Biomet',
      },
      {
        value: 'Conmed',
      },
      {
        value: 'Smith & Nephew',
      },
      {
        value: 'Stryker / Pivot',
      },
      {
        value: 'Medacta',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [
      {
        value: 'Arthex',
        children: ['arthex implant system'],
      },
      {
        value: 'Biomet',
        children: ['biomet implant sytem'],
      },
      {
        value: 'Conmed',
        children: ['conmed implant system'],
      },
      {
        value: 'Smith & Nephew',
        children: ['Smith & Nephew implant sytem'],
      },
      {
        value: 'Stryker / Pivot',
        children: ['stryker implant sytem'],
      },
      {
        value: 'Medacta',
        children: ['medacta implant system'],
      },
      {
        value: 'Othere',
        children: ['other implant sytem'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Arthrex Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Pushlock',
      },
      {
        value: 'Biocomposite Pushlock',
      },
      {
        value: 'PEEK SutureTak',
      },
      {
        value: 'Biocomposite SutureTak',
      },
      {
        value: 'Knotless FiberTak',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Biomet Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Juggerknot Long Soft Anchor',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Conmed Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Poplok',
      },
      {
        value: 'Press FT',
      },
      {
        value: 'Bio Mini Revo',
      },
      {
        value: 'Y Knot',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Smith & Nephew Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Bioraptor Knotless',
      },
      {
        value: 'Bioraptor PK',
      },
      {
        value: 'Labralock P',
      },
      {
        value: 'Mini Magnum',
      },
      {
        value: 'Mini Magnum Plus',
      },
      {
        value: 'Osteoraptor',
      },
      {
        value: 'Q-Fix',
      },
      {
        value: 'Speedlock',
      },
      {
        value: 'Speedlock Plus',
      },
      {
        value: 'Suturefix Ultra',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Stryker / Pivot Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Iconix',
      },
      {
        value: 'Pivot Cinchlock SS',
      },
      {
        value: 'Pivot Nanotak Flex',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labrum Abnormality',
    text: 'Medacta Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Mectalock PPEK',
      },
      {
        value: 'Mectalock TI',
      },
      {
        value: 'Mectatap TI',
      },
      {
        value: 'Mectalock All Suture',
      },
    ],
    dependents: [],
  },
  {
    type: 'FR',
    header: 'Left Labrum Abnormality',
    text: 'Other Implant System?',
    value: [],
    required: true,
    options: [],
    dependents: [],
  },
  {
    type: 'MFR',
    header: 'Left Labral Tear Details',
    text: 'Enter Anchor Details',
    value: [],
    required: true,
    options: [
      { value: 'number_of_anchors', q_id: 'number of anchors id' },
      { value: 'anchor_materials', q_id: 'anchor mat id' },
      { value: 'anchro_type', q_id: 'anchor type id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Number of Anchors',
    value: [],
    required: true,
    options: [
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Anchor Material',
    value: [],
    required: true,
    options: [
      {
        value: 'All-suture Based',
      },
      {
        value: 'Metal',
      },
      {
        value: 'Bioabsorbable',
      },
      {
        value: 'PEEK',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Anchor Type',
    value: [],
    required: true,
    options: [
      {
        value: 'Knotted',
      },
      {
        value: 'Knotless',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Left Labral Tear Details',
    text: 'Left Labral Tear Treatment?',
    value: [],
    required: true,
    options: [
      {
        value: 'Simple',
      },
      {
        value: 'Mattress',
      },
      {
        value: 'Hybrid',
      },
    ],
    dependents: [],
  },
];

export const rightDetails = [
  {
    type: 'MC',
    header: 'Right Side',
    text: 'Right Labrum?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Side',
    text: 'Right Acetabulum?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Side',
    text: 'Right Acetabulum Articular Cartilage?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Side',
    text: 'Right Femur?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Side',
    text: 'Right Capsule?',
    value: [],
    required: true,
    options: [
      {
        value: 'Normal',
      },
      {
        value: 'Abnormal',
      },
    ],
    dependents: [
      {
        value: 'Abnormal',
        children: ['abnormal q'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Arthroscopy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Iliopsoas Tendon Lengthening?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['ilio sata question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Trochanteric Bursectomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['troch mc question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Gluteus Tendon Repair?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'IT Band Lengthening (External Snapping)?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['length question'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'I&D for Joint Infection?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Ligamentum Teres?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['teres sata'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Subchondroplasty?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['sub mc'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Plication?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['plication sata'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Proximal Femur Osteotomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Open Cartilage Repair?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Other Right Details',
    text: 'Surgical Hip Dislocation?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
  },
];

export const otherRightSubDetails = [
  {
    type: 'SATA',
    header: 'Right Details',
    text: 'Iliopsoas Tendon Lengthening?',
    value: [],
    required: true,
    options: [
      {
        value: 'Central Compartment',
      },
      {
        value: 'Peripheral Compartment',
      },
      {
        value: 'Lesser Trochanter',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Details',
    text: 'Trochanteric Bursectomy?',
    value: [],
    required: true,
    options: [
      {
        value: 'IT Band Sparring',
      },
      {
        value: 'Tenoplasty',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Right Details',
    text: 'IT Band Lengthening (External Snapping)?',
    value: [],
    required: true,
    options: [
      {
        value: 'Posterior Bank Incision',
      },
      {
        value: 'Central IT Band Partial Excision',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Right Details',
    text: 'Ligamentum Teres?',
    value: [],
    required: true,
    options: [
      {
        value: 'Debridement',
      },
      {
        value: 'Reconstruction',
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Details',
    text: 'Subchondroplasty?',
    value: [],
    required: true,
    options: [
      {
        value: 'Acetabulum',
      },
      {
        value: 'Femur',
      },
      {
        value: 'Both',
      },
    ],
  },
  {
    type: 'SATA',
    header: 'Right Details',
    text: 'Plication?',
    value: [],
    required: true,
    options: [
      {
        value: 'Iliofemeral Ligament',
      },
      {
        value: 'RICH',
      },
      {
        value: 'Other',
      },
    ],
  },
];

export const rightLabramDetails = [
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Labral Tear?',
    value: [],
    required: true,
    options: [
      {
        value: 'Yes',
      },
      {
        value: 'No',
      },
    ],
    dependents: [
      {
        value: 'Yes',
        children: ['clockface to from', 'tear treatment'],
      },
      {
        value: 'No',
        children: [
          'other abnormalities',
          'abnormality to from',
          'abnormality treatment',
        ],
      },
    ],
  },
  {
    type: 'MFR',
    header: 'Right Labral Tear Details',
    text: 'Enter Labral Tear Details',
    value: [],
    required: true,
    options: [
      { value: 'clockface_to', q_id: 'clockface to id' },
      { value: 'clockface_from', q_id: 'clockface from id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Tear Clockface "from"',
    value: [],
    required: true,
    options: [
      {
        value: '12',
      },
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Tear Clockface "to"',
    value: [],
    required: true,
    options: [
      {
        value: '12',
      },
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
      {
        value: '11',
      },
    ],
    dependents: [],
  },
  {
    type: 'SATA',
    header: 'Right Labral Tear Details',
    text: 'Right Labral Tear Treatment?',
    value: [],
    required: true,
    options: [
      {
        value: 'Debridement',
      },
      {
        value: 'Labrectomy',
      },
      {
        value: 'Repair',
      },
      {
        value: 'Reconstruction',
      },
      {
        value: 'None',
      },
    ],
    dependents: [
      {
        value: 'Repair',
        children: [
          'repair type',
          'implant manu',
          'anchor details w/subtle',
          'sublte configuration',
        ],
      },
      {
        value: 'Reconstruction',
        children: ['type/length of graft', 'implant manu', 'anchor details'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Repair Type?',
    value: [],
    required: true,
    options: [
      {
        value: 'Primary',
      },
      {
        value: 'Revision',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFR',
    header: 'Right Labrum Abnormality',
    text: 'Enter Labral Graft Details',
    value: [],
    required: true,
    options: [
      { value: 'type', q_id: 'type of graft id' },
      { value: 'length', q_id: 'length of graft id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Type of Labral Graft',
    value: [],
    required: true,
    options: [
      {
        value: 'Allograft',
      },
      {
        value: 'Autograft',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRFR',
    header: 'Length of Labral Graft',
    required: true,
    value: [],
    options: [],
    dependents: [],
  },
  {
    type: 'SATA',
    header: 'Right Labral Tear Details',
    text: 'Implant Manufacturer?',
    value: [],
    required: true,
    options: [
      {
        value: 'Arthrex',
      },
      {
        value: 'Biomet',
      },
      {
        value: 'Conmed',
      },
      {
        value: 'Smith & Nephew',
      },
      {
        value: 'Stryker / Pivot',
      },
      {
        value: 'Medacta',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [
      {
        value: 'Arthex',
        children: ['arthex implant system'],
      },
      {
        value: 'Biomet',
        children: ['biomet implant sytem'],
      },
      {
        value: 'Conmed',
        children: ['conmed implant system'],
      },
      {
        value: 'Smith & Nephew',
        children: ['Smith & Nephew implant sytem'],
      },
      {
        value: 'Stryker / Pivot',
        children: ['stryker implant sytem'],
      },
      {
        value: 'Medacta',
        children: ['medacta implant system'],
      },
      {
        value: 'Othere',
        children: ['other implant sytem'],
      },
    ],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Arthrex Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Pushlock',
      },
      {
        value: 'Biocomposite Pushlock',
      },
      {
        value: 'PEEK SutureTak',
      },
      {
        value: 'Biocomposite SutureTak',
      },
      {
        value: 'Knotless FiberTak',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Biomet Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Juggerknot Long Soft Anchor',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Conmed Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Poplok',
      },
      {
        value: 'Press FT',
      },
      {
        value: 'Bio Mini Revo',
      },
      {
        value: 'Y Knot',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Smith & Nephew Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Bioraptor Knotless',
      },
      {
        value: 'Bioraptor PK',
      },
      {
        value: 'Labralock P',
      },
      {
        value: 'Mini Magnum',
      },
      {
        value: 'Mini Magnum Plus',
      },
      {
        value: 'Osteoraptor',
      },
      {
        value: 'Q-Fix',
      },
      {
        value: 'Speedlock',
      },
      {
        value: 'Speedlock Plus',
      },
      {
        value: 'Suturefix Ultra',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Stryker / Pivot Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Iconix',
      },
      {
        value: 'Pivot Cinchlock SS',
      },
      {
        value: 'Pivot Nanotak Flex',
      },
      {
        value: 'Other',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labrum Abnormality',
    text: 'Medacta Implant System?',
    value: [],
    required: true,
    options: [
      {
        value: 'Mectalock PPEK',
      },
      {
        value: 'Mectalock TI',
      },
      {
        value: 'Mectatap TI',
      },
      {
        value: 'Mectalock All Suture',
      },
    ],
    dependents: [],
  },
  {
    type: 'FR',
    header: 'Right Labrum Abnormality',
    text: 'Other Implant System?',
    value: [],
    required: true,
    options: [],
    dependents: [],
  },
  {
    type: 'MFR',
    header: 'Right Labral Tear Details',
    text: 'Enter Anchor Details',
    value: [],
    required: true,
    options: [
      { value: 'number_of_anchors', q_id: 'number of anchors id' },
      { value: 'anchor_materials', q_id: 'anchor mat id' },
      { value: 'anchro_type', q_id: 'anchor type id' },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Number of Anchors',
    value: [],
    required: true,
    options: [
      {
        value: '1',
      },
      {
        value: '2',
      },
      {
        value: '3',
      },
      {
        value: '4',
      },
      {
        value: '5',
      },
      {
        value: '6',
      },
      {
        value: '7',
      },
      {
        value: '8',
      },
      {
        value: '9',
      },
      {
        value: '10',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Anchor Material',
    value: [],
    required: true,
    options: [
      {
        value: 'All-suture Based',
      },
      {
        value: 'Metal',
      },
      {
        value: 'Bioabsorbable',
      },
      {
        value: 'PEEK',
      },
    ],
    dependents: [],
  },
  {
    type: 'MFRO',
    header: 'Anchor Type',
    value: [],
    required: true,
    options: [
      {
        value: 'Knotted',
      },
      {
        value: 'Knotless',
      },
    ],
    dependents: [],
  },
  {
    type: 'MC',
    header: 'Right Labral Tear Details',
    text: 'Right Labral Tear Treatment?',
    value: [],
    required: true,
    options: [
      {
        value: 'Simple',
      },
      {
        value: 'Mattress',
      },
      {
        value: 'Hybrid',
      },
    ],
    dependents: [],
  },
];
