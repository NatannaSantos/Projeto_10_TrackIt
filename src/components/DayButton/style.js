import styled from "styled-components";

const Container=styled.button`
width: 30px;
height: 30px;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color: ${props=> props.selected===false? "#FFFFFF" : "#CFCFCF"};
color: ${props=> props.selected===false? "#DBDBDB" : "#FFFFFF"};
font-size: 20px;
`;

export {
    Container
}