import React from "react";
import beer from "../image/beer.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Menu3Text() {
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
              <img src={beer} alt="pic" className="card-img" />
              <Card.Body>
                <Card.Title>Beer</Card.Title>
                <Card.Text>
                  Our restaurant takes pride in offering a curated selection of
                  beers, carefully chosen to complement our menu and satisfy
                  even the most discerning of palates. From crisp lagers to
                  robust ales, each beer is selected with the utmost attention
                  to quality and flavor.
                  <br />
                  <br />
                  <span className="font-weight-bold ">Price :₹ 800 </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <br />

      <br />
    </div>
  );
}
export default Menu3Text;
