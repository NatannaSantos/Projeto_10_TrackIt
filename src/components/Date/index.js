import { Container } from "./style";
import TodayHabit from "../TodayHabit";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";


export default function Date() {
    const[habitToday, setHabitToday]=useState ([]);
    const [concluded, setConcluded] = useState(false);
    const {user}=useContext(UserContext);

    const config={
        headers: {
          "Authorization": `Bearer ${user.token} `
        }
      }

    useEffect (()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config);
        promise.then(response=>{            
            setHabitToday(response.data);
        });
    },[concluded]);

    if(!habitToday){
        return "carregando...";
    }    

    return (
        <Container>            
                <h1>Segunda, 17/05</h1>
                <p>Nenhum hábito concluído ainda</p>            
          {habitToday.map(habito=> <TodayHabit setConcluded={setConcluded} concluded={concluded} {...habito}/>)}
        </Container>
    );
}