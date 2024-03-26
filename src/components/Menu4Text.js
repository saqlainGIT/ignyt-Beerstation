import React from "react";
import one from "../image/ice2.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Menu4Text() {
  return (
    <div>
      <br />
      <br />
      <br />

      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-4 container-fluid mx-auto justify-content-center "
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <img src={one} alt="pic" className="card-img" />
              <Card.Body>
                <Card.Title>Ice Cream</Card.Title>
                <Card.Text>
                  Indulge your sweet tooth with our delectable selection of ice
                  creams, handcrafted to perfection using the finest ingredients
                  and traditional techniques. Each scoop is a symphony of creamy
                  richness, with flavors ranging from classic favorites like
                  velvety vanilla and decadent chocolate to exotic creations
                  like refreshing mint chip and fruity sorbets bursting with
                  real fruit goodness.
                  <br />
                  <br />
                  <span className="font-weight-bold ">Price : ₹200 </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <br />

      <br />

      {/* <div className="row no-gutters">
            <div className="col">
            <img src={one} alt="pic" className="card-img" />
            </div>
            <div className="col">
            <div className="card-body">
            <h2 className="card-title">nagetts &nbsp;<span className="price">5rs</span></h2>
            <p className="card-text">Chicken, Potatoes, Rice</p>
            </div>
            </div>
            </div> */}
    </div>
  );
}
export default Menu4Text;
