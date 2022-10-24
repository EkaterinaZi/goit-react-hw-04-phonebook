import React from "react";
import {Form, Label, Input, Button} from "./ContactForm.styled"
import { nanoid } from 'nanoid';

class ContactForm extends React.Component{
    state = {
        name: '',
        number: ''
    }
    nameId = nanoid();
    numberId = nanoid();

    joinContact = (e) => {
        const { name, value } = e.currentTarget
        this.setState({
        [name]: value,
    }
    )
      }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
      }
    reset = () => {
        this.setState({name: '',number: ''})
    }
    render() {
    return (
    <Form onSubmit={this.handleSubmit}>
    <Label htmlFor={this.nameId}>Name</Label>
    <Input
  type="text"
  value={this.state.name}
  onChange={this.joinContact}
  name="name"
  id={this.nameId}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<Label htmlFor={this.numberId}>Number</Label>
<Input
  type="tel"
  name="number"
  id={this.numberId}
  value={this.state.number}
  onChange={this.joinContact}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
     <Button type="submit">Add contact</Button>
     </Form>
        ) ;
    }
}

export default ContactForm;