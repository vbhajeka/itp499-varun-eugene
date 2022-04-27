import React from "react";
import ReactDOM from "react-dom";
// import { Grid, Row, Col } from "react-flexbox-grid";
import {
  Container,
  Header,
  Grid,
  Table,
  Segment,
  Rail,
  Image,
  Modal,
  Button,
  Icon,
  Divider
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css"; // import { Container, Header } from "semantic-ui";

class App extends React.Component {
  render() {
    var carType = "Electric";
    {/* One way distance and cost of commute */}
    var oneWayDistance = 35; {/* FROM API RESPONSE*/}
    var oneWayGasCost = 0.208 * oneWayDistance;
    var oneWayHybridCost = 0.125 * oneWayDistance;
    var oneWayElectricCost = 0.083 * oneWayDistance;
    var commuteNumber = 22 * 2;
    var monthlyGasCost = commuteNumber * oneWayGasCost;
    var monthlyHybridCost = commuteNumber * oneWayHybridCost;
    var monthlyElectricCost = commuteNumber * oneWayElectricCost;
    var monthlyHybridDiff = monthlyGasCost - monthlyHybridCost;
    var monthlyElectricDiff = monthlyGasCost - monthlyElectricCost;

    var morningDrivingTime = 15; {/* FROM API RESPONSE*/}
    var eveningDrivingTime = 18; {/* FROM API RESPONSE*/}
    var totalDrivingTime = morningDrivingTime + eveningDrivingTime; 

    var bikeRoundCostDiff = (2 * oneWayGasCost) - 0;
    var bikeOneWayTime = 25; {/* FROM API RESPONSE*/}
    var bikeRoundTimeDiff = (2 * bikeOneWayTime) - totalDrivingTime;

    var transitMorningTime = 35; {/* FROM API RESPONSE*/}
    var transitEveningTime = 38; {/* FROM API RESPONSE*/}
    var transitTotalTime = transitMorningTime + transitEveningTime;
    var transitRoundCostDiff = (2 * oneWayGasCost) - 2.50;
    var transitRoundTimeDiff = transitTotalTime - totalDrivingTime;
    var carDailyCost = 41;

    return (
      <Container>
        <Header as="h1">If you buy a {carType} car...</Header>
        <Segment>
          <Grid centered columns={2}>
            <Grid.Column>
              <Segment>
                <Image src="map.png" />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                You can save ${Math.round(monthlyElectricDiff)} in gas every month!
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>

        <Segment>
          <Container text centered>
            But what about other options?
          </Container>
          <Icon angle double down />
        </Segment>

        <Header as="h2" centered>
          You can take...
        </Header>

        <Segment>
          <Grid centered columns={2}>
            <Grid.Column>
              <Grid centered columns={2}>
                <Grid.Column>
                  <Icon name="bicycle" />
                </Grid.Column>
                <Grid.Column centered>
                  <Header as="h3">Bike</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                It will take {bikeRoundTimeDiff} more minutes than driving.
              </Container>
              <Container text>
                And it's free! This saves you ${Math.round(bikeRoundCostDiff)} a day.
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment>
          <Grid centered columns={2}>
            <Grid.Column>
              <Grid centered columns={2}>
                <Grid.Column>
                  <Icon name="bus" />
                </Grid.Column>
                <Grid.Column centered>
                  <Header as="h3">Transit</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                It will take {transitRoundTimeDiff} more minutes than driving.
              </Container>
              <Container text>
                And it's free! This saves you ${Math.round(transitRoundCostDiff)} a day.
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>

        <Header as="h2" centered>
          If you have more time, consider mixing and matching...{" "}
        </Header>
        <Segment>
          <Grid centered columns={2}>
            <Grid.Column>
              <Grid centered columns={2}>
                <Grid.Column>
                  <Icon name="bicycle" />
                  <Icon name="bus" />
                </Grid.Column>
                <Grid.Column centered>
                  <Header as="h3">Morning: Bike</Header>
                  <Header as="h3">Evening: Transit</Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Container text>
                It will take {bikeRoundTimeDiff} more minutes than driving.
              </Container>
              <Container text>
                It will take {transitRoundTimeDiff} more minutes than driving.
              </Container>
              <Container text>
                It's not free. This saves you ${carDailyCost} a day.
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
