import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import History from "./history.jsx";
import DataTable from './table.jsx';

// const products = [ 
//     {
//         "id": 1,
//         "name": "anthony",
//         "price": 10,
//         "genre": "action",
//         "title": "toy story",
//         "language": "en",
//         "runtime": 100,
//         "revenue": 1000000,
//         "status": "released",
//         "budget": 1000,
//         "popularity": 10,
//         "tagline": "okie",
//         "adult": "False"
//     }
//  ];

class Baseline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){

      return (
        <div>
            <Container>
                <Row>
                    <Col md={9}>
                        <DataTable />
                    </Col>
                    <Col md={3}>
                        <History />
                    </Col>
                </Row>
            </Container>
            
            
        </div>
      );
  }
}

export default Baseline;
