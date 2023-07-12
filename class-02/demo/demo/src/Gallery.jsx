import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Gallery extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '10em' }}>
              <Card.Img variant="top" src={this.props.pictures[0].image_url} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src={this.props.pictures[1].image_url} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src={this.props.pictures[2].image_url} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src={this.props.pictures[3].image_url} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src={this.props.pictures[4].image_url} />
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '8rem' }}>
              <Card.Img variant="top" src={this.props.pictures[5].image_url} />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Gallery;
