import styled from "styled-components";

const Container = styled.div`
width: 30px;
height: 30px;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color: ${props=> props.background===false? "#FFFFFF" : "#CFCFCF"};
color: ${props=> props.background===false? "#DBDBDB" : "#FFFFFF"};
font-size: 20px;
margin-right: 5px;
display: flex;
align-items: center;
justify-content: center;
`
export{
    Container
}