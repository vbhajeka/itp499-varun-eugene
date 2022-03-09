import React, { Fragment } from 'react';

import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Container, Grid, Header, Segment } from 'semantic-ui-react';

import ExportModalContent from './ExportModalContent';

import { toggleOpenSpecific } from '../actions/exportActions';

const ExportPage = ({ surveys, toggleOpenSpecific, ids }) => {
  const history = useHistory();
  if (surveys === undefined || surveys.length === 0) {
    history.push('/');
    return <div>empty</div>;
  }

  const getDate = (s) => {
    const q = s.find((w) => w.question === 'Date of Surgery');
    if (q) {
      return new Date(q.value[0]).toDateString();
    } else {
      return 'March 17, 2020';
    }
  };

  const getHips = (s) => {
    const q = s.find((w) => w.question === 'Surgery Site');
    let retVal = '';
    q.value.forEach((w) => (retVal += `${w}, `));
    return retVal.substring(0, retVal.length - 2);
  };

  const setPipes = (arr) => {
    let retVal = '';
    arr.forEach((a) => {
      retVal += `${a} | `;
    });
    retVal.replace(',', '-');
    return retVal.substring(0, retVal.length - 2);
  };

  const exportToCsv = () => {
    let allData = [[ids]];
    surveys.forEach((res) => {
      let csvData = [res.doc];
      ids.forEach((id) => {
        const thisId = res.surveyAnswers.find((x) => x.id === id);
        if (thisId) {
          csvData.push(setPipes(thisId.value));
        } else {
          if (id !== 'doctor_name') {
            csvData.push('');
          }
        }
      });
      allData.push(csvData);
    });

    let csvContent =
      'data:text/csv;charset=utf-8,' +
      allData.map((e) => e.join(',')).join('\n');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `HipSTER-results.csv`);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <Fragment>
      <ExportModalContent />
      <Container
        id='header'
        style={{
          backgroundColor: 'white',
          padding: '0',
          borderRadius: '10px',
        }}
      >
        <Grid padded divided>
          <Grid.Row columns={'4'}>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ fontSize: '1.5rem' }}
              >
                SURGERY DATE
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ fontSize: '1.5rem' }}
              >
                DOCTOR
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ fontSize: '1.5rem' }}
              >
                HIP SITE
              </Header>
            </Grid.Column>
            <Grid.Column>
              <Header
                size={'small'}
                color={'blue'}
                style={{ fontSize: '1.5rem' }}
              >
                SURVEY DATE
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <Container style={{ overflowX: 'auto', marginBottom: '6.5%' }}>
        {surveys.map((s) => (
          <Container
            key={s.date}
            style={{
              backgroundColor: 'white',
              padding: '3%',
              borderRadius: '10px',
              margin: '0.5rem',
            }}
            onClick={() => toggleOpenSpecific(s.date)}
          >
            <Grid>
              <Grid.Row columns={4} style={{ fontSize: '1rem' }}>
                <Grid.Column>{getDate(s.surveyAnswers)}</Grid.Column>
                <Grid.Column>{s.doc}</Grid.Column>
                <Grid.Column>{getHips(s.surveyAnswers)}</Grid.Column>
                <Grid.Column>{new Date(s.date).toDateString()}</Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        ))}
      </Container>
      <Container style={{ position: 'absolute', bottom: '3.6%' }}>
        <Grid>
          <Grid.Row columns={'2'}>
            <Grid.Column>
              <Link to='/'>
                <Segment
                  style={{ margin: '2%' }}
                  inverted
                  color={'blue'}
                  className={'buttonSegEnabled'}
                >
                  Back
                </Segment>
              </Link>
            </Grid.Column>
            <Grid.Column floated='left'>
              <Segment
                style={{ margin: '2%' }}
                inverted
                color={'red'}
                onClick={() => exportToCsv()}
                className={'buttonSegEnabled'}
              >
                Export to CSV
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    surveys: state.exportData.surveyData,
    ids: state.exportData.allQIds,
  };
};

export default connect(mapStateToProps, { toggleOpenSpecific })(ExportPage);
