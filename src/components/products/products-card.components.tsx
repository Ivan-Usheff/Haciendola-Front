import {Button, Card} from 'react-bootstrap';
import { ProductType } from '../../utils/types/product.type';
import { useEffect } from 'react';


export const ProductCard = ({prod, viewHook, deleteHook}:{prod: ProductType, viewHook: (sk:number) => void, deleteHook: (sk:number) => void}) => {

  const { title, description, sku, grams, stock, price } = prod;

  const listDescriptionProps = () => {
    return <div className="h-75"dangerouslySetInnerHTML={{__html:description}} />
  }

  return (
    <Card style={{ minWidth: '13rem', maxWidth: '18rem' }}>
    <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Text className="mb-2 text-muted"></Card.Text>
        {listDescriptionProps()}
        <p><strong>Gramos:</strong> {grams}g</p>
        <p><strong>Precio:</strong> ${price}</p>
        <Button className="mx-2 btn-sm btn-outline-success bi bi-eye" variant="btn-outline-success" onClick={() => {viewHook(sku)}} />
        <Button className="mx-2 btn-sm btn-outline-danger bi bi-trash3" variant="btn-outline-danger" onClick={() => {deleteHook(sku)}} />
      </Card.Body>
      <Card.Footer className='text-muted'>
        <Card.Text className="fs-6">SKU: {sku}</Card.Text>
        <Card.Text className="fs-6">Stock: {stock}</Card.Text>
      </Card.Footer>
    </Card>
  );
}
