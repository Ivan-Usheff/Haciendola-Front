import { Link } from "react-router-dom";
import { useLogin } from "./hooks/hooks"
import { Button, Card, Form } from "react-bootstrap";
import { TextInputCompoent } from "../../components/input/text.input";



export const LoginView = () => {

  const {handleSubmit, inputsBody, validated} = useLogin();

  const formBody = () => {
    return inputsBody.map((ib,i) => {
      return <TextInputCompoent props={ib} key={`inputs_${i}`}/>
    })
  }

  return(
    <>
    <Card style={{ width: '23rem' }} className="m-3">
      <Card.Header className="text-center">
        <Card.Title className="m-3"><h3>Login</h3></Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text className="text-center mb-2 p-3">
          Ingresa a tu cuenta para ver los productos
        </Card.Text>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {formBody()}
          <Button variant="dark" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Card.Body>
      <Card.Footer className="text-center p-3">
        No tienes cuenta? Registrate <Link to={"/Auth/Register"}>aqui</Link><br/>
        <Link to={"/"}>Index</Link>
      </Card.Footer>
    </Card>
    </>
  )
}