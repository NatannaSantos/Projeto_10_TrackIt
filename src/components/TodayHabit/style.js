import styled from "styled-components";

const Container = styled.div`
width: 340px;
height: 94px;
background-color:#FFFFFF;
border-radius: 5px;
margin-top: 20px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px;

`;
const Text = styled.div`
h1{
    font-size: 20px;
    color: #666666;
    
}
p{
    font-size: 13px;
    padding-top: 5px;
    
}
`;
const Button = styled.div`
width: 70px;
height: 70px;
background-color: ${props=> props.selected===false? "#EBEBEB" : "#8FC549"};
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
`
export{
    Container,
    Text,
    Button
}