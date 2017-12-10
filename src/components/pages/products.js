//importing components
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import{
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

//importing local componenents
import Routing from './routingModule/routing';
import Billing from './billingModule/billing';
import Scheduling from './schedulingModule/scheduling';

////START OF CONTENTCONTROL list//
const contentControl = [
  {
    path: '/Products',
    exact: true,
    content: () => <p><h2>Products</h2>
    <li>Billing
    Billing through mobile banking platforms (Natcom's Lajan Cash and Digicel's Mon Cash). More about mobile banking in Haiti here.</li>
    <li>Routing
    Assign customers to routes.
    Routing and route optimization features.
    Compare the Google Maps API with Uber API.</li>
    <li>Scheduling
    Updates the schedules depending on route.
    Have a mock schedule for three potential trucks.</li>
    <p>Contribute to help waste managers operate more efficiently given their equipment and workforce. This should help companies save money especially on fuel, by having a timely schedule and efficient route management. Also, efficient waste collection will allow neighborhoods to be more environment friendly and increase the lifestyle of the inhabitants. Will it help businesses be productive enough to service lower-income customers?</p>
    <p>Contribute to help waste managers operate more efficiently given their equipment and workforce. This should help companies save money especially on fuel, by having a timely schedule and efficient route management. Also, efficient waste collection will allow neighborhoods to be more environment friendly and increase the lifestyle of the inhabitants. Will it help businesses be productive enough to service lower-income customers?</p>
    <p>Contribute to help waste managers operate more efficiently given their equipment and workforce. This should help companies save money especially on fuel, by having a timely schedule and efficient route management. Also, efficient waste collection will allow neighborhoods to be more environment friendly and increase the lifestyle of the inhabitants. Will it help businesses be productive enough to service lower-income customers?</p>
  </p>
  },
  {
    path: '/Routing',
    content:()=> <Route exact path='/Routing' component={ Routing }/>
  },
  {
    path: '/Scheduling',
    content: ()=> <Route exact path='/Scheduling' component={ Scheduling }/>
  },
  {
    path: '/Billing',
    content: ()=> <Route exact path='/Billing' component={ Billing }/>
  }
]

/////START OF PRODUCTS COMPONENT////
class Products extends Component {

  state = {visible: true}

  toggleVisibility = () => this.setState({visible: this.state.visible})

  render(){
    const { visible } = this.state
    return(
      <div>
        <Router>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
              <Menu.Item name='routing'>
                <Icon name='map'/>
                <Link to='/Routing'>Routing</Link>
              </Menu.Item>
              <Menu.Item name='scheduling'>
                <Icon name='calendar'/>
                <Link to='/Scheduling'>Scheduling</Link>
              </Menu.Item>
              <Menu.Item name='billing'>
                <Icon name='payment'/>
                <Link to='/Billing'>Billing</Link>
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Grid>
                  <Row className='show-grid'>
                    <Col xs={12} md={10}>
                      {contentControl.map((route, index)=>(
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.content}
                        />
                      ))}
                    </Col>
                  </Row>
                </Grid>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Router>
      </div>
    )
  }
}

export default Products
