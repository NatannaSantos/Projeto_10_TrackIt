import { Container, Schedule, Week } from "./style";
import Days from "../Days";
import Trash from "../../assets/lixeira.png"
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";


export default function ListHabit({ name, days, weekDay, active,id, setRender, render }) {
    const {user} = useContext(UserContext);
    
    const config = {
        headers: {
          "Authorization": `Bearer ${user.token} `
        }
      }
    function handleTrash(id){
        const confirmDelete = window.confirm("Quer realmente deletar o hábito?");
        if(confirmDelete){
            const promise=axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,config);
            promise.then(response=>{
                setRender(!render);
            });
        }        
    }
    
    return (
        <Container>
            <Schedule>
                <p>{name}</p>
                <Week>
                    {weekDay.map(dia => <Days name={name} days={days} weekDay={weekDay} active={active}{...dia} />)}
                </Week>
            </Schedule>
            <img onClick={()=> handleTrash(id)}  src={Trash}></img>
        </Container>
    );
}