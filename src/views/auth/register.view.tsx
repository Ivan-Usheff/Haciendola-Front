import { Button, Card, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { TextInputCompoent } from "../../components/input/text.input"
import { useRegister } from "./hooks/register.hooks"


export const RegisterView = () => {

  const {inputsBody} = useRegister()

  const formBody = () => {
    return inputsBody.map((ib,i) => {
      return <TextInputCompoent props={ib} key={`inputs_${i}`}/>
    })
  }
  
  return(
    <>
    <Card style={{ width: '23rem' }}>
      <Card.Header className="text-center">
        <Card.Title className="m-3"><h3>Register</h3></Card.Title>
        <Card.Text className="mb-2 p-3">
          Registrate para ver los productos
        </Card.Text>
      </Card.Header>
      <Card.Body>
        <Form>

          {formBody()}

          <Button variant="dark" type="submit" className="mt-3">
            Enviar
          </Button>

        </Form>
      </Card.Body>
      <Card.Footer className="text-center p-3">
        Ya tienes cuenta? <Link to={"/Auth"}>Ingresa</Link><br/>
        <Link to={"/"}>Index</Link>
      </Card.Footer>
    </Card>
    </>
  )
}