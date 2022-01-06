import Top from "../Top";
import { Container } from "./style";
import MyHabit from "../MyHabit";
import TextCreatingHabit from "../TextCreatingHabit";
import Menu from "../Menu";

export default function HabitPage() {
    return (
        <Container>
            <Top />
            <MyHabit />
            <TextCreatingHabit />
            <Menu />
        </Container>

    );
}