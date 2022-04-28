import { Grid, Segment, Image, Container, Header } from 'semantic-ui-react';

import { Link } from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { logo } from '../images/logo';
import { new_logo } from '../images/new_logo';
import { newer_logo } from '../images/newer_logo';

import { connect as reduxConnect } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { toggleExportModal } from '../actions/stateActions';

import ExportModal from './ExportModal';

const AboutPage = ({
  toggleExportModal,
  isAdmin,
  isMobile,
  homePageMessage,
}) => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading, error } =
    useAuth0();

  if (window.matchMedia('(max-width: 767px)').matches) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  if (error) {
    homePageMessage = `${error}`;
    console.log(error);
  }

  return (
    <Fragment>
      <Container
        style={{ overflowX: 'auto', marginBottom: '2%', marginTop: '2%' }}
      >
        <Header as='h1' textAlign='center'>
          Shifting the Transportation Meta
        </Header>
        <Segment raised>
          <Grid centered columns={2}>
            <Grid.Column verticalAlign='top' width={6}>
              <Image
                src='https://aaaliving.acg.aaa.com/wp-content/uploads/2021/08/questions-about-electric-car-768x432.jpg'
                size='large'
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Container text fluid>
                Battery Electric Vehicles and Plug-In Hybrid Vehicles do reduce
                greenhouse gas emissions and pollute the air less, but there is
                a space for further development.
                <br />
                <br />
                Some of the most functional, frustration and traffic-free cities
                rely heavily on bikes and public transportation. By facilitating
                a shift towards those modes of transportation, we can create a
                cleaner, easier city.{' '}
                <a src='https://youtu.be/d8RRE2rDw4k'>Here</a> is a video
                describing the impact good bike and transit systems have on
                traffic.
              </Container>
            </Grid.Column>
          </Grid>

          <Grid centered columns={2}>
            <Grid.Column width={11}>
              <Container text fluid>
                These methods of transportation are more accessible than you
                think. Public transit is shown to be 10 times safer than driving
                and makes communities safer, as shown by a{' '}
                <a src='https://mobilitylab.org/2016/09/08/transit-10-times-safer-driving-makes-communities-safer-says-new-apta-report/'>
                  study by the American Public Transit Association
                </a>
                . Electric bikes and scooters are everywhere, thanks to
                rideshare companies. <br />
                <br />
                You might have accessible options available for your needs so
                you can drive less, pollute less, and help build a better city.
              </Container>
            </Grid.Column>
            <Grid.Column verticalAlign='top' width={5}>
              <Image
                src='https://bloximages.newyork1.vip.townnews.com/laloyolan.com/content/tncms/assets/v3/editorial/d/6c/d6cea4b1-e0e0-5e2a-a4f1-cbd269347d23/58d8533746ed4.image.jpg?resize=400%2C266'
                size='large'
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
    homePageMessage: state.state.homePageMessage,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
})(AboutPage);
