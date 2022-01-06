import Top from "../Top";
import Menu from "../Menu";
import Date from "../Date";
import { Container } from "./style";

export default function TodayPage() {
    return (
        <Container>
            <h1>Histórico</h1>
            <Top />
            <Date />
            <Menu />
        </Container>
    );
}