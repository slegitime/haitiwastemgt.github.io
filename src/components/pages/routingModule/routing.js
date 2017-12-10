import React from 'react';
import{ Grid, Row, Col, FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';
import { compose, withProps, lifecycle } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//search box componenent
class Search extends React.Component {
  render(){
    //locations
    const locations = [
      {id:0, name: 'Nashua, NH', LatLng:'42.765366, -71.467567'}
    ]

    const find = (id) => locations .find(p => p.id === id)

    const ExampleLocation = () => (
      <Router>
        <Location match={{ params: {id: 0}, url:''}}/>
      </Router>
    )

    const Location = ({ match }) => {
      const location = find(match.params.id)
    }

    return(
      <div>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Destination</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="select">Select</option>
              <option value="other">
                  Nashua,NH
              </option>
            ))}
          </FormControl>
        </FormGroup>
      </div>
    )
  }
}

class Routing extends React.Component {
  //instantiating a map component
  render() {
    /* global google */
    const RoutingMap = compose(
      withProps({
        googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyBBqQoTCf331qHiNfDq-71bkBKolD0gzh4&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div style={{height: `400px`}}/>,
        mapElement: <div style={{height: `100%`}}/>,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount(){
          const DirectionsService = new google.maps.DirectionsService();

          //start directions client, with route
          DirectionsService.route({
            origin: new google.maps.LatLng(42.974037, -71.506446),
            destination: new google.maps.LatLng(42.765366, -71.467567),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if(status === google.maps.DirectionsStatus.OK){
              this.setState({
                directions: result,
              });
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap
        defaultZoom={7}
        defaultCenter={new google.maps.LatLng(42.974037, -71.506446)}
        >
          {props.directions && <DirectionsRenderer directions={props.directions}/>}
        </GoogleMap>
    );

    return (
      <div className="Routing">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={9}>
              <h2>Google Maps Directions API</h2>
              <RoutingMap/>
            </Col>
            <Col xs={6} md={3}>
              <h2>Route info</h2>
              <Search/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Routing;
