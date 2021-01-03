import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react'
import './App.css';

const App = () => (
    <Container id="main" textAlign='center'>
      <Header as='h1'>Question title</Header>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={1}>
            <Header as='h3'>loren ipsum</Header>
          </Grid.Column>
          <Grid.Column width={1}>
            <Header as='h3'>loren ipsum</Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    
)



export default App;
