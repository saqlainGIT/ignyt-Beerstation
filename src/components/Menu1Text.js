import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import one from "../image/dinner1.jpg";

function Menu1Text({ addToCart }) {
  const handleAddToCart = (itemName, price) => {
    addToCart(itemName, price);
  };

  return (
    <div>
      <br />
      <br />
      <Row
        xs={1}
        md={2}
        lg={3}
        className="g-4 container-fluid mx-auto justify-content-center "
      >
        <Col>
          <Card>
            <img src={one} alt="pic" className="card-img" />
            <Card.Body>
              <Card.Title>Tikka</Card.Title>
              <Card.Text>
                Indulge in our tantalizing Chicken Tikka, a culinary masterpiece
                that marries tender, succulent pieces of chicken with an
                exquisite blend of traditional Indian spices. Each bite is a
                symphony of flavors, with the perfect balance of smoky char from
                the tandoor oven and the aromatic spices that infuse every
                morsel.
                <br />
                <br />
                <>
                  <span className="font-weight-bold">Price : ₹350</span>{" "}
                  <button onClick={() => handleAddToCart("Tikka", 350)}>
                    Add to Cart
                  </button>
                </>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
    </div>
  );
}

export default Menu1Text;
