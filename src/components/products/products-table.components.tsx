import { Button } from "react-bootstrap";
import { ProductType } from "../../utils/types/product.type";




export const ProductTable = ({prod, viewHook, deleteHook}:{prod: ProductType[], viewHook: (sk:number) => void, deleteHook: (sk:number) => void}) => {
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Precio</th>
          <th scope="col">Gramos</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {
        prod.map((ps, i) => {
          const { title, price, grams, sku } = ps;
          return(
            <tr key={i++}>
              <th scope="row">{i++}</th>
              <td>{title}</td>
              <td>${price}</td>
              <td>{grams}g</td>
              <td>
                <Button className="mx-2 btn btn-outline-success bi bi-eye" variant="btn-outline-success" onClick={() => {viewHook(sku)}} />
                <Button className="mx-2 btn btn-outline-danger bi bi-trash3" variant="btn-outline-danger" onClick={() => {deleteHook(sku)}} />
              </td>
            </tr>
          )
        })
        }
      </tbody>
    </table>
  )
}