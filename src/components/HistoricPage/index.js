import Top from "../Top";
import Menu from "../Menu";
import { Container } from "./style";

export default function HistoricPage() {
    return (
        <Container>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            <Top />
            <Menu />
        </Container>
    );
}