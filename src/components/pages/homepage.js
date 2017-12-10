import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import {
  Segment,
  Grid,
  Icon
 } from 'semantic-ui-react';

class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Haiti Waste Management</h1>
          <p>A Web app design to contribute to help waste managers operate more efficiently given their equipment and workforce. This should help companies in Haiti save money especially on fuel, by having a timely schedule and efficient route management. Also, efficient waste collection will allow neighborhoods to be more environment friendly and increase the lifestyle of the inhabitants. </p>
        </Jumbotron>

        <Grid columns={3} relaxed>
          <Grid.Column>
            <Segment basic>
              <Icon name='map' size="huge" textAlign='center'/>
              <p textAlign='center'>Google Maps API to render direction and display route information</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Icon name='calendar' size="huge"/>
              <p textAlign='center'>Design for calendar and schedule management. Contains several views</p>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic>
              <Icon name='payment' size='huge' textAlign='center'/>
              <p textAlign='center'>Billing widget for text billing using JunglePay API (in progress)</p>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Homepage;
