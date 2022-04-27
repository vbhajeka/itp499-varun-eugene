import { Grid, Segment, Image, Container } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../index.css';
import { Fragment } from 'react';

import { connect as reduxConnect } from 'react-redux';

import { toggleExportModal } from '../actions/stateActions';

import { storeMaps } from '../actions/resultsActions';

import GoogleMapReact from 'google-map-react';

const MapComponent = ({
  mode,
  content,
  transitMode,
  gmap,
  gmaps,
  buttonPressed,
  storeMaps,
}) => {
  const defaultProps = {
    center: {
      lat: 34.001928,
      lng: -118.293934,
    },
    zoom: 7,
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    storeMaps(map, maps);
    console.log(mode + ' is mode');
    switch (mode) {
      case 'drive':
        transitMode = maps.TravelMode.DRIVING;
        break;
      case 'bike':
        transitMode = maps.TravelMode.BICYCLING;
        break;
      case 'transit':
        transitMode = maps.TravelMode.TRANSIT;
        break;
    }

    const directionsService = new maps.DirectionsService();
    const directionsRenderer = new maps.DirectionsRenderer();

    directionsService
      .route({
        origin: {
          query: '2565 Ellendale Pl Los Angeles CA 90007',
        },
        destination: {
          query: '10745 Dickson Ct, Los Angeles, CA 90095',
        },
        travelMode: transitMode,
      })
      .then((response) => {
        console.log(response);
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(map);
        console.log('rendered...?');
      })
      .catch((e) => console.log('error'));
  };

  if (buttonPressed) {
    console.log('asdf');
    console.log(gmap);
    handleApiLoaded(gmap, gmaps);
  } else {
    console.log('rendering map');
  }

  return (
    <Fragment>
      <Segment>
        <Grid centered={true} columns={2}>
          <Grid.Column>
            <Segment>
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: 'AIzaSyC8XUHzHj-4Fwjv_-lS04AplPam2cZ0PVc',
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  onGoogleApiLoaded={({ map, maps }) =>
                    handleApiLoaded(map, maps, 'drive')
                  }
                  yesIWantToUseGoogleMapApiInternals={true}
                ></GoogleMapReact>
              </div>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Container text>{content}</Container>
          </Grid.Column>
        </Grid>
      </Segment>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    continueToSurvey: state.blocks.cont,
    isAdmin: state.state.isAdmin,
    homePageMessage: state.state.homePageMessage,
    mode: state.results.transitMode,
    buttonPressed: state.results.buttonPressed,
    gmap: state.results.map,
    gmaps: state.results.maps,
  };
};

export default reduxConnect(mapStateToProps, {
  toggleExportModal,
  storeMaps,
})(MapComponent);
