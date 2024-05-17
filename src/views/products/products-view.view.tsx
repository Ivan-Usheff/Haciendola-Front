import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useViewProduct } from "./hooks/products-view.hook";


export const ProductsViewView = () => {

  const { product, editProduct, deleteProduct, productList } = useViewProduct()
  const { handle, title, description, sku, grams, stock, price, comparePrice, barCode } = product;

  return(
    <>
      <h3>View Products</h3>
      
      <Row className="gx-5 w-100 d-flex justify-content-evenly">
        <Col md={2}>
          
          <div className="bg-dark-subtle p-3">
            <h4 className="p-3">Filtros</h4>
            <ListGroup variant="flush" className="bg-transparent pb-2 text-center">
              <ListGroup.Item action variant="light" as={"button"} onClick={() => {editProduct()}}>
                Editar
              </ListGroup.Item>
              <ListGroup.Item action variant="light" as={"button"} onClick={() => {deleteProduct(sku)}} >
                Borrar
              </ListGroup.Item>
              <ListGroup.Item action variant="light" as={"button"} onClick={() => {productList()}} >
                Volver
              </ListGroup.Item>
            </ListGroup>
          </div>

        </Col>
        <Col className="px-3 mx-5">

          <Card className="m-5" style={{minWidth: '25rem' }}>
            <Card.Header as="h5" className="text-center">{title}</Card.Header>
            <Card.Body className="px-3">
              <Card.Title className="mb-3">{handle}</Card.Title>
                <div className="mt-2" dangerouslySetInnerHTML={{__html:description}} />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-evenly p-3">
                <ul className="list-unstyled">
                  <li>SKU: {sku}</li>
                  <li>Gramos: {grams}g.</li>
                  <li>Stock: {stock}u.</li>
                </ul>
                <ul className="list-unstyled">
                  <li>Precio: ${price}</li>
                  <li>Precio de Comparacion: ${comparePrice}</li>
                  <li>Codigo de barra: {barCode}</li>
                </ul>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  )
}