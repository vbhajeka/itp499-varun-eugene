import { Grid, Segment, Image, Container } from 'semantic-ui-react';

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
      <Container text style={{ color: 'white' }}>
        <Image
          // src={logo}
          // src={new_logo}
          src={newer_logo}
          alt='Red dot'
          centered
          style={{ marginTop: '4%' }}
        />
        <div>
          Battery Electric Vehicles and Plug-In Hybrid Vehicles do reduce
          greenhouse gas emissions and pollute the air less, but there is a
          space for further development.
        </div>
        <div>
          Some of the most functional, frustration and traffic-free cities rely
          heavily on bikes and public transportation.
        </div>
        <div>
          By facilitating a shift towards those modes of transportation, we can
          create a cleaner, easier city.
        </div>
        <div>
          These methods of transportation are more accessible than you think.
        </div>
        <div>
          Public transit is shown to be 10 times safer than driving and makes
          communities safer Electric bikes and scooters are everywhere, thanks
          to rideshare companies. You might have accessible options available
          for your needs so you can drive less, pollute less, and help build a
          better city!
        </div>
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
