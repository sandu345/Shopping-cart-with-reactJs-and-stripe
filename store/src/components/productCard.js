import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  //props.product is the product we are selling
  const product = props.product;
  const cart = useContext(CartContext);
  const ProductQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {ProductQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {ProductQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="6"
                  onClick={() => cart.addOnetoCart(product.id)}
                  className="mx-2"
                >
                  +
                </Button>
                <Button
                  sm="6"
                  onClick={() => cart.removeOneFromcart(product.id)}
                  className="mx-2"
                >
                  -
                </Button>
              </Col>
              <Button
                variant="danger"
                onClick={() => cart.deleteFromcart(product.id)}
                className="my-2"
              >
                Remove from Cart
              </Button>
            </Form>
          </>
        ) : (
          <Button
            varient="primary"
            onClick={() => cart.addOnetoCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
