import { Container,Today } from "./style";
import Vetor from "../../assets/hoje.png"


export default function Menu(){
    return(
        <Container> 
            <p>Hábitos</p>          
            <Today src={Vetor} />  
            <p>Histórico</p>         
        </Container>
    );
}