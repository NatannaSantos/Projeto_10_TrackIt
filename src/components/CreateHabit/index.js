import { Container, Input, Week, DayButton, SaveBox, CancelButton, SaveButton } from "./style";

export default function CreateHabit() {
    return (
        <Container>
            <Input placeholder="nome do hábito"></Input>
            <Week>
                <DayButton> D </DayButton>
                <DayButton> S </DayButton>
                <DayButton> T </DayButton>
                <DayButton> Q </DayButton>
                <DayButton> Q </DayButton>
                <DayButton> S </DayButton>
                <DayButton> S </DayButton>
            </Week>
            <SaveBox>
                <CancelButton> Cancelar </CancelButton>
                <SaveButton> Salvar </SaveButton>

            </SaveBox>
            
        </Container>
    );
}