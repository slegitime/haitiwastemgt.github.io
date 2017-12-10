import React, { Component } from 'react';
import{
  Segment,
  Grid,
  List,
  Container,
  Header
} from 'semantic-ui-react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Resources' />
                  <List link inverted>
                    <List.Item as='a'>React</List.Item>
                    <List.Item as='a'>Node JS</List.Item>
                    <List.Item as='a'>SCSS</List.Item>
                    <List.Item as='a'>Gulp</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Relevant Links' />
                  <List link inverted>
                    <List.Item as='a'>Semantic-UI</List.Item>
                    <List.Item as='a'>React Bootstrap</List.Item>
                    <List.Item as='a'>Google Maps API</List.Item>
                    <List.Item as='a'>JunglePay</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Waste Management App - Haiti</Header>
                  <p>Coming soon in Haitian Creole</p>
                <p>&copy; Sybille Marion L&eacute;gitime</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </footer>
    );
  }
}

export default Footer;
