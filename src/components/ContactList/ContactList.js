import React from "react";
import {Button, Span, List} from "./ContactList.styled"

export function ContactList ({items, removeContact}){
    const elements = items.map(({name, number, id}) => {
        return (<List key={id}>{name} : <Span>{number}</Span>
        <Button onClick={() => 
            removeContact(id)} 
         type="button" >Delete</Button>
        </List>)
    })
    return(
        <ul>{elements}</ul>
    )
}

