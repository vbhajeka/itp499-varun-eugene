const { MongoClient } = require('mongodb');
const config = require('config');
const { ObjectId } = require('mongodb');

const url = config.get('mongoURL');
const dbName = config.get('dbName');

const client = new MongoClient(url, { useUnifiedTopology: true });

async function otherDB() {
  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db(dbName);
    const col = db.collection('Metadata');

    const qCol = db.collection('Questions');

    const questions = [
      {
        type: 'MC',
        header: 'Patient Demographics',
        text: "Was the Patient's Height/Weight recorded?",
        value: [],
        required: true,
        options: [{ value: 'Yes' }, { value: 'No' }],
        dependents: [
          {
            value: 'Yes',
            children: ['1'],
          },
        ],
      },
      {
        type: 'MFR',
        header: 'Patient Demographics',
        text: 'Enter Patient Demographics',
        value: [],
        required: true,
        options: [
          { value: 'height', q_id: '2' },
          { value: 'weight', q_id: '3' },
          { value: 'bmi', q_id: '4' },
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
      {
        type: 'MC',
        header: 'Prior Surgical History',
        text: 'Left Hip?',
        value: [],
        required: true,
        options: [{ value: 'Yes' }, { value: 'No' }],
        dependents: [
          {
            value: 'Yes',
            children: ['6'],
          },
        ],
      },
      {
        type: 'MFR',
        header: 'Prior Surgical History',
        text: 'Enter Prior Surgury: Left Hip',
        value: [],
        required: true,
        options: [
          { value: 'Most recent Left Hip Surgery', q_id: '7' },
          { value: 'Multiple Prior Left Hip Surgeries', q_id: '8' },
          { value: 'All Prior Left hip Surgeries', q_id: '9' },
        ],
        dependents: [],
      },
      {
        type: 'MFRO',
        header: 'Most recent Left Hip Surgery',
        value: [],
        required: true,
        options: [
          { value: 'Arthrosocpy' },
          { value: 'THA' },
          { value: 'PAO' },
          { value: 'I&D' },
          { value: 'Surgical Dislocation' },
          { value: 'SCFE' },
          { value: 'Other' },
        ],
        dependents: [],
      },
      {
        type: 'MFRO',
        header: 'Multiple Prior Left Hip Surgeries',
        value: [],
        required: true,
        options: [{ value: 'Yes' }, { value: 'No' }],
        dependents: [],
      },
      {
        type: 'MFRSATA',
        header: 'All Prior Left hip Surgeries',
        value: [],
        required: false,
        options: [
          { value: 'Arthrosocpy' },
          { value: 'THA' },
          { value: 'PAO' },
          { value: 'I&D' },
          { value: 'Surgical Dislocation' },
          { value: 'SCFE' },
          { value: 'Other' },
        ],
        dependents: [],
      },
      {
        id: 'dummyQ',
        type: 'FR',
        header: 'Dummy',
        text: 'this is an fr question',
        value: [],
        required: true,
        options: [],
        dependents: [],
      },
    ];

    //const p = await qCol.insertMany(questions);
    //const p = await col.insertOne(testDoc);
    console.log(await qCol.find({ value: [] }));
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

module.exports = otherDB;
