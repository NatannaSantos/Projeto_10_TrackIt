import { Container } from "./style";

export default function MyHabit({activate, active}){   

    
    return(
        <Container>
            <h1>Meus Hábitos</h1>
            <button onClick={activate}> + </button>
        </Container>
    );
}