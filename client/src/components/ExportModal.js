import React from 'react';

import { connect } from 'react-redux';

import {
  Modal,
  Header,
  Icon,
  Button,
  Container,
  Grid,
} from 'semantic-ui-react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import {
  toggleExportModal,
  exportDateChanged,
  updateHPMessage,
} from '../actions/stateActions';
import { setExportData } from '../actions/exportActions';

const ExportModal = ({
  modalIsOpen,
  toggleExportModal,
  exportDateChanged,
  datesLegal,
  dates,
  setExportData,
  updateHPMessage,
}) => {
  const history = useHistory();

  const { getAccessTokenSilently } = useAuth0();

  const onDateChange = (field, val) => {
    console.log(field, val);
    exportDateChanged(field, val);
  };

  const getSurvey = async () => {
    const body = {
      startDate: dates.start,
      endDate: dates.end,
    };

    try {
      let token = await getAccessTokenSilently();
      console.log('ExportModal.js: token set ' + token);
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.post('/api/getSurveys', body, config);
      console.log(res);

      if (res.data.result.length === 0) {
        updateHPMessage(
          `There were no surveys submitted from ${new Date(
            dates.start
          ).toLocaleDateString()} to ${new Date(
            dates.end
          ).toLocaleDateString()}`
        );
        toggleExportModal();
      } else {
        setExportData(res.data.result, res.data.ids);
        toggleExportModal();
        updateHPMessage(``);
        history.push('/export');
        return <div>empty</div>;
      }
    } catch (err) {
      console.log(err);
      updateHPMessage(
        `There was an error retrieving surveys. Please try again`
      );
      toggleExportModal();
    }
  };

  return (
    <Modal basic open={modalIsOpen}>
      <Modal.Content>
        <Container id={'exportModalDateContainer'}>
          <Grid divided stackable columns={2}>
            <Grid.Row columns={'1'}>
              <Grid.Column>
                <Header size={'large'}>
                  Select Start & End Date to View Surveys
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign={'left'} width={6}>
                <Container text fluid style={{ maxWidth: '30%' }}>
                  <Header size={'tiny'}>Start Date</Header>
                </Container>
              </Grid.Column>
              <Grid.Column width={10} textAlign={'right'}>
                <Container
                  fluid
                  style={{
                    display: 'flex',
                    flexFlow: 'wrap',
                  }}
                >
                  <Container>
                    <input
                      type={'date'}
                      className={'inputField'}
                      style={{ fontSize: '1rem' }}
                      onChange={(val) =>
                        onDateChange('start', val.target.value)
                      }
                    ></input>
                  </Container>
                </Container>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign={'left'} width={6}>
                <Container text fluid style={{ maxWidth: '30%' }}>
                  <Header size={'tiny'}>End Date</Header>
                </Container>
              </Grid.Column>
              <Grid.Column width={10} textAlign={'right'}>
                <Container
                  fluid
                  style={{
                    display: 'flex',
                    flexFlow: 'wrap',
                  }}
                >
                  <Container>
                    <input
                      type={'date'}
                      className={'inputField'}
                      style={{ fontSize: '1rem' }}
                      onChange={(val) => onDateChange('end', val.target.value)}
                    ></input>
                  </Container>
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Modal.Content>
      <Modal.Actions style={{ textAlign: 'center' }}>
        <Button color='red' inverted onClick={() => toggleExportModal()}>
          <Icon name='remove' /> Cancel
        </Button>
        <Button
          color='green'
          inverted
          onClick={() => getSurvey()}
          disabled={!datesLegal}
        >
          <Icon name='checkmark' /> Get Surveys
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.state.exportModal.isOpen,
    datesLegal: state.state.exportModal.datesLegal,
    dates: {
      start: state.state.exportModal.startDate,
      end: state.state.exportModal.endDate,
    },
  };
};

export default connect(mapStateToProps, {
  toggleExportModal,
  exportDateChanged,
  setExportData,
  updateHPMessage,
})(ExportModal);
