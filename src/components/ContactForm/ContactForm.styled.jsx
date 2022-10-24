import styled from "styled-components";

export const Form = styled.form `display: flex;
 flex-direction: column;
 width: 500px;`

export const Label = styled.label `margin-bottom: 10px;
 font-weight: bold;
 &:focus-within{border-color: blue;}`

export const Input = styled.input `margin-bottom: 10px;
height: 35px;
border-radius: 10px;
&:hover{border-color: blue;}`

export const Button = styled.button `width: 200px; margin-top: 30px;
margin-right: auto;
margin-left: auto;
font-weight: bold;
height: 30px; 
border-radius: 10px;
padding: 5px;
&:hover {background-color: blue; color: white; border-color: transparent;}`