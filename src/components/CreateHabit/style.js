import styled from "styled-components"

const Container = styled.div`
width: 340px;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
margin-left: 20px;
gap: 10px;
display: flex;
justify-content: center;
flex-direction: column;
`;
const Input = styled.input`
width: 303px;
height: 45px;
border-radius: 5px;
border: 1px solid #D4D4D4;
margin-left: 20px;

:focus{
    outline: none;
    box-shadow: none;
}

::placeholder{
    font-size: 20px;
    color: #DBDBDB;
}
`;
const Week=styled.div`
width: 250px;
display: flex;
justify-content: space-between;
margin-left: 20px;
`
const DayButton=styled.button`
width: 30px;
height: 30px;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color: #FFFFFF;
color: #DBDBDB;
font-size: 20px;
`;
const SaveBox=styled.div`
width: 200px;
display: flex;
margin-left:155px;
margin-top: 20px;
`;
const CancelButton= styled.button `
width: 84px;
height: 35px;
background-color: #FFFFFF;
border: none;
color: #52B6FF;
font-size: 16px;
`
const SaveButton=styled.button`
width: 84px;
height: 35px;
background-color: #52B6FF;
border: none;
border-radius: 5px;
color: #FFFFFF;
font-size: 16px;
`;

export {
    Container,
    Input,
    Week,
    DayButton,
    SaveBox,
    SaveButton,
    CancelButton
}
