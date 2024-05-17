import { Form } from "react-bootstrap"
import { TextInputType } from "./types/text.type"


export const TextInputCompoent = ({props}:{props: TextInputType}) => {

  const { name, label, type, required, description, onChagngeFuction, placeholder, badFeedbackText } = props;

  return(
    <Form.Group className="mb-3" controlId={name} key={`${name}_${type}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        required={required??false}
        key={`${name}_${type}`}
        onChange={onChagngeFuction}
      />
      <Form.Text className="text-muted">{description??''}</Form.Text>
      <Form.Control.Feedback type="invalid">
        {badFeedbackText??''}
      </Form.Control.Feedback>
    </Form.Group>
  )
}