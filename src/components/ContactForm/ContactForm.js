import {useState} from "react";
import {Form, Label, Input, Button} from "./ContactForm.styled"
import { nanoid } from 'nanoid';

export default function ContactForm({onSubmit}){
const [name, setName] = useState('');
const [number, setNumber] = useState('');
    
let nameId = nanoid();
let numberId = nanoid();

const joinContact = (e) => {
  const { name, value } = e.target
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      return;
      }
    }
const handleSubmit = e => {
  e.preventDefault();
  const contact = {name, number};
  onSubmit(contact);
  reset();
  }
const reset = () => {
  setName('');
  setNumber('')
  }
    
    return (
    <Form onSubmit={handleSubmit}>
    <Label htmlFor={nameId}>Name</Label>
    <Input
  type="text"
  value={name}
  onChange={joinContact}
  name="name"
  id={nameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<Label htmlFor={numberId}>Number</Label>
<Input
  type="tel"
  name="number"
  id={numberId}
  value={number}
  onChange={joinContact}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
     <Button type="submit">Add contact</Button>
     </Form>
        ) ;
    
}
