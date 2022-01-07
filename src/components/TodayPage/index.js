import Top from "../Top";
import Menu from "../Menu";
import Date from "../Date";
import { Container } from "./style";

export default function TodayPage({token}) {
    console.log(token);
    return (
        <Container>
            <Top />
            <Date />
            <Menu />
        </Container>
    );
}