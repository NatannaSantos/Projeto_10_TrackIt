import styled from "styled-components";

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

p{
    font-size: 18px;
    color: #52B6FF;
}
`;
const Today=styled.img`
width: 91px;
height: 91px;
margin-bottom: 50px;
z-index: 1;
`
export{
    Container,
    Today
}