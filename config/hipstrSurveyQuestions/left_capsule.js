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
        id: '0',
        question_header: 'Left Capsule',
        question_desc: 'What was the status of the Left Capsule?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Normal', children: [], blocks_enabled: [] },
          { value: 'Abnormal', children: ['1'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '1',
        question_header: 'Capsulotomy',
        question_desc: 'Was a Capsulotomy performed?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: ['2', '69'], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '69',
        question_header: 'Capsulotomy',
        question_desc: 'Was there a Capsulotomy defect?',
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
        id: '2',
        question_header: 'Capsulotomy Type',
        question_desc: 'What was the type of Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Inter-portal', children: ['3'], blocks_enabled: [] },
          { value: 'T-Capsulotomy', children: ['5'], blocks_enabled: [] },
          { value: 'Perl-portal', children: ['6'], blocks_enabled: [] },
          { value: 'Other', children: ['65'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '65',
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
        id: '3',
        question_header: 'Interportal',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          { value: 'Partially Closed', children: ['4'], blocks_enabled: [] },
          { value: 'Fully Closed', children: ['4'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '5',
        question_header: 'T-Capsulotomy',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          { value: 'Partially Closed', children: ['4'], blocks_enabled: [] },
          { value: 'Fully Closed', children: ['4'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '6',
        question_header: 'Perl-portal',
        question_desc:
          'After the procedure, what was done with the Capsulotomy?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Not closed', children: [], blocks_enabled: [] },
          { value: 'Fully Closed', children: ['4'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '4',
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
