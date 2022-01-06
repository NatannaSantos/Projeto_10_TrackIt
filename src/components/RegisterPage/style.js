import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
width: 100%;
padding: 31px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const StyledLink = styled(Link)`
  width: 303px;
  height: 40px;
  margin-top: 16px;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`
export {
    Container,
    StyledLink
}