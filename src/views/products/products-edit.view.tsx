import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../../utils/products/products.context";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useUpdateProducts } from "./hooks/products-update.hook";
import { ProductType } from "../../utils/types/product.type";


export const ProductsEditView = () => {

  const { productstate, handleSubmit, onInputChange, onInputChangeNumber, goBack } = useUpdateProducts()
  const { handle, title, description, sku, grams, stock, price, comparePrice, barCode } = productstate;

  return(
    <>
    <h3>Edit Products</h3>
    <Form style={{minWidth: '40rem'}} className="my-3 round-5 shadow bg-body rounded" onSubmit={handleSubmit}>
      <div className="py-5 px-5">
        <Row>
          <Col className="mb-3">
            <Form.Group className="mb-3" >
              <Form.Label>Handle</Form.Label>
              <Form.Control 
                type={"text"} 
                name={"handle"} 
                key={"handle"}
                value={handle}
                onChange={onInputChange}
                />
            </Form.Group>
          </Col>
          <Col className="mb-3">
            <Form.Group className="mb-3" >
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type={"text"} 
                name={"title"} 
                key={"title"}
                value={title}
                onChange={onInputChange}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group className="mb-3" >
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5}
                // type={"text"} 
                name={"description"} 
                key={"description"}
                value={description}
                onChange={onInputChange}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3">
            <Form.Group className="mb-3" >
              <Form.Label>SKU</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"sku"} 
                key={"sku"}
                value={sku}
                disabled
                readOnly
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Gramos</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"grams"} 
                key={"grams"}
                value={grams}
                onChange={onInputChangeNumber}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Stock</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"stock"} 
                key={"stock"}
                value={stock}
                onChange={onInputChangeNumber}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Label>Precio</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"price"} 
                key={"price"}
                value={price}
                onChange={onInputChangeNumber}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Precio Comparacion</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"comparePrice"} 
                key={"comparePrice"}
                value={comparePrice}
                onChange={onInputChangeNumber}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Codigo de Barra</Form.Label>
              <Form.Control 
                type={"number"} 
                name={"barCode"} 
                key={"barCode"}
                value={barCode}
                onChange={onInputChangeNumber}
                />
            </Form.Group>
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-evenly p-3 bg-light bg-gradient">
        <Button className="mx-2 px-3 btn-sm btn-outline-success" variant="btn-outline-success" type="submit" >Guardar</Button>
        <Button className="mx-2 px-3 btn-sm btn-outline-danger" variant="btn-outline-danger" onClick={goBack}>Cancelar</Button>
      </div>
    </Form>
    </>
  )
}