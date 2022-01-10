import styled from "styled-components";

const Container=styled.div`
width:340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
margin-left: 20px;
margin-bottom: 10px;
display: flex;


img{
    width: 13px;
    height: 15px;
    margin-top: 10px;
}
`;
const Schedule = styled.div`
margin: 10px;
margin-right: 50px;


p{
    font-size: 20px;
    color: #666666;
    margin-bottom: 5px;    
}
`;
const Week=styled.div`
width: 250px;
margin-left: 5px;
margin-top:10px;
display: flex;
justify-content: space-between;
`

export{
    Container,
    Schedule,
    Week
}