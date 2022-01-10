import Top from "../Top";
import { Container } from "./style";
import MyHabit from "../MyHabit";
import TextCreatingHabit from "../TextCreatingHabit";
import Menu from "../Menu";
import CreateHabit from "../CreateHabit";
import { useContext, useEffect, useState } from "react";
import ListHabit from "../ListHabit";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function HabitPage() {
    const [active, setActive] = useState(false);
    const [save, setSave] = useState(false);
    const [myHabits, setMyHabits]=useState([]);
    const [render, setRender] =  useState(false);
    const {user}= useContext(UserContext);

    const weekDay = [
        {
          "id": 0,
          "day": "D"
        },
        {
          "id": 1,
          "day": "S"
        },
        {
          "id": 2,
          "day": "T"
        },
        {
          "id": 3,
          "day": "Q"
        },
    
        {
          "id": 4,
          "day": "Q"
        },
        {
          "id": 5,
          "day": "S"
        },
        {
          "id": 6,
          "day": "S"
        }
      ]

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config);
        promise.then(response=>{            
            setMyHabits(response.data);
        });
    },[render]);
    if(!myHabits){
        return "carregando...";
    }

    const config = {
        headers: {
          "Authorization": `Bearer ${user.token} `
        }
      }

    function activate() {
        setActive(true);
    }

    function deActivate(){
        setActive(false);
        setSave (true);
    }
    

    return (
        <Container>
            <Top />
            <MyHabit active={active} activate={activate} />
            {!active? <></>:<CreateHabit setRender={setRender} render={render} weekDay={weekDay} deActivate={deActivate} save={save} />}
            {myHabits.length===0 && !save? <TextCreatingHabit /> : myHabits.map(particularHabit=> <ListHabit setRender={setRender} render={render} active={active} weekDay={weekDay} {...particularHabit}/> )}
            <Menu />
        </Container>

       );

}