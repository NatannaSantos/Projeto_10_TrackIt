import { Container } from "./style";

export default function HistoricBox({habit,nome}){
console.log(nome);
    return(
        <Container>
            <p>{nome}</p>
        </Container>
    );
}