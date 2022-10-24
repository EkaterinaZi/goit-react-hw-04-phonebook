import React from 'react';
import { Title, Input } from './Filter.styled';
import { nanoid } from 'nanoid';


export const Filter = ({handleChange, filter}) => {
    const filterId = nanoid();
    return(
        <>
   <Title>
    Find contacts by name</Title>
    <Input 
    id={filterId}
    type="text" 
    name="filter" 
    onChange={handleChange} 
    value={filter}>
    </Input>
    </>
)
}
