import styled from "styled-components";
import { Link } from "react-router-dom";

const Container=styled.div`
width: 375px;
height: 70px;
background-color: #FFFFFF;
padding: 10px;
position: fixed;
bottom: 0;
left: 0;
display: flex;
align-items: center;
justify-content: space-between;
`;
const StyledLink= styled(Link)`
    font-size: 18px;
    color: #52B6FF;
    text-decoration: none;
`
const Today=styled.div`
width: 91px;
height: 91px;
z-index: 1;
margin-bottom: 50px;

`
export{
    Container,
    StyledLink,
    Today
}