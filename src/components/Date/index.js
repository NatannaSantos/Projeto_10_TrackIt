import { Container, Habit, Text,Button } from "./style";
import Check from "../../assets/check.png"

export default function Date() {
    return (
        <Container>            
                <h1>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>            
            <Habit>
                <Text> 
                <h1> Ler 1 capítulo de livro </h1>
                <p> Sequência atual: 3 dias </p>
                <p>Seu recorde: 5 dias </p>
                </Text>  
                <Button>
                    <img src={Check} />
                </Button>              
            </Habit>
        </Container>
    );
}