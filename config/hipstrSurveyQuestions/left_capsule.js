const left_capsule =
  // left_capsule
  {
    block_id: 'left_capsule',
    block_header: 'Left Hip Capsule Details',
    block_description: 'Details about the Left Hip Capsule',
    enabled: false,
    required: true,
    questions: [
      {
        id: 'left_capsule_status',
        question_header: 'Left Capsule',
        question_desc: 'What was the status of the Left Capsule?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Normal', children: [], blocks_enabled: [] },
          {
            value: 'Abnormal',
            children: ['left_capsule_capsular_defect'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'left_capsule_capsular_defect',
        question_header: 'Capsulotomy',
        question_desc: 'Was there a Capsular Defect?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: [], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: 'left_capsule_capsulotomy_performed',
        question_header: 'Capsulotomy',
        question_desc: 'Was a Capsulotomy Performed?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Yes',
            children: ['left_capsule_capsulotomy_type'],
            blocks_enabled: [],
          },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: 'left_capsule_capsulotomy_type',
        question_header: 'Capsulotomy Type',
        question_desc: 'What was the type of Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          {
            value: 'Inter-portal',
            children: ['left_capsule_interportal'],
            blocks_enabled: [],
          },
          {
            value: 'T-Capsulotomy',
            children: ['left_capsule_tcapsulotomy'],
            blocks_enabled: [],
          },
          {
            value: 'Perl-portal',
            children: ['left_capsule_peri_portal'],
            blocks_enabled: [],
          },
          {
            value: 'Other',
            children: ['left_capsule_other_capsulotomy_type'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'left_capsule_other_capsulotomy_type',
        question_header: 'Other Capsulotomy Type',
        question_desc: 'What was the Other Capsulotomy Type?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: 'left_capsule_interportal',
        question_header: 'Interportal',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          {
            value: 'Partially Closed',
            children: ['left_capsule_suture_type'],
            blocks_enabled: [],
          },
          {
            value: 'Fully Closed',
            children: ['left_capsule_suture_type'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'left_capsule_tcapsulotomy',
        question_header: 'T-Capsulotomy',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          {
            value: 'Partially Closed',
            children: ['left_capsule_suture_type'],
            blocks_enabled: [],
          },
          {
            value: 'Fully Closed',
            children: ['left_capsule_suture_type'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'left_capsule_peri_portal',
        question_header: 'Perl-portal',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          {
            value: 'Fully Closed',
            children: ['left_capsule_suture_type'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: 'left_capsule_suture_type',
        question_header: 'Suture Type',
        question_desc: 'What was the type of the suture?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Absorbable', children: [], blocks_enabled: [] },
          { value: 'Non-absorbable', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
    ],
  };

module.exports = left_capsule;
