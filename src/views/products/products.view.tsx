import { Button, Col, Container, ListGroup, Row, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useProducts } from "./hooks/products.hook"
import { ProductCard } from "../../components/products/products-card.components"
import { ProductTable } from "../../components/products/products-table.components"


export const ProductsView = () => {

  const { products, viewProduct, deleteProduct, viewType, setViewType } = useProducts()


  const produtsAsCard = () => {
    return <Row xs={2} md={4} lg={3} className="g-3"> {
      products.map((ps, i)=>{
        return <Col key={i}><ProductCard key={ps.sku} prod={ps} deleteHook={deleteProduct} viewHook={viewProduct}/> </Col>
      })
    }
    </Row>
  }
  
  const productAsList = () => {
    return( <ProductTable prod={products} deleteHook={deleteProduct} viewHook={viewProduct}  />)
  }

  return(
      
      <Row className="gx-5 w-100 d-flex justify-content-around">
        <Col md={2}>

        </Col>
        <Col className="px-3 py-2 mx-5">

            <Stack direction="horizontal" className="px-3 py-2" gap={3}>
              <h3 className="p2">Products</h3>
              {/* <Link to={"#"} onClick={() => {setViewType('card')}} className="p2 ms-auto btn btn-link link-dark"><i className="bi bi-credit-card-2-front">Card</i></Link>
              <Link to={"#"} onClick={() => {setViewType('row')}} className="p2 btn btn-link link-dark"><i className="bi bi-card-list">List</i></Link> */}
            </Stack>
            <hr/>
            <Container fluid>
              {/* {viewType === 'row' ? productAsList() : produtsAsCard() } */}
              { productAsList() }
            </Container>
        
        </Col>
      </Row>
  )
}