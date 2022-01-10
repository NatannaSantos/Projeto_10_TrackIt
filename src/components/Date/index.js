import { Container } from "./style";
import TodayHabit from "../TodayHabit";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import dayjs from "dayjs";




export default function Date() {
    const[habitToday, setHabitToday]=useState ([]);
    const [concluded, setConcluded] = useState(false);
    const [date, setDate]=useState(null);
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
            setDate(dayjs().format('dddd, DD/MM/YYYY'));
        });
    },[concluded]);

    if(!habitToday){
        return "carregando...";
    }    
  
       
   
    return (
        <Container >            
                <h1>{date}</h1>                
                <p>Nenhum hábito concluído ainda</p>            
          {habitToday.map(habito=> <TodayHabit setConcluded={setConcluded} concluded={concluded} {...habito}/>)}
        </Container>
    );
}