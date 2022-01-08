import styled from "styled-components"

const Container = styled.div`
width: 375px;
height: 70px;
background-color: #126BA5;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.5);
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
`;
const ProfilePicture = styled.img`
width: 51px;
height: 51px;
border-radius: 50%;
`
export {
    Container,
    ProfilePicture
}