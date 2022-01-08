import Top from "../Top";
import { Container } from "./style";
import MyHabit from "../MyHabit";
import TextCreatingHabit from "../TextCreatingHabit";
import Menu from "../Menu";
import CreateHabit from "../CreateHabit";
import { useState } from "react";

export default function HabitPage() {
    const [active, setActive] = useState(false);

    function activate() {
        setActive(true);
    }

    return (
        <Container>
            <Top />
            <MyHabit active={active} activate={activate} />
            {!active? <></>:<CreateHabit/>}
            <TextCreatingHabit />
            <Menu />
        </Container>

       );

}