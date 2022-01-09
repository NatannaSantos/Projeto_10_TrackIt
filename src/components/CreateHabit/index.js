import { Container, Input, Week, SaveBox, CancelButton, SaveButton } from "./style";
import DayButton from "../DayButton";
import { useState } from "react";

export default function CreateHabit() {

  const[habit,setHabit]=useState('');
    
    const weekDay=[
        {
            "id" : 0 ,
            "day" : "D"
          } ,
          {
            "id" : 1 ,
            "day" : "S"
          } ,
          {
            "id" : 2 ,
            "day" : "T"
          } ,
          {
            "id" : 3 ,
            "day" : "Q"
          } ,
          
          {
            "id" : 4 ,
            "day" : "Q"
          } ,
          {
            "id" : 5 ,
            "day" : "S"
          } ,
          {
            "id" : 6 ,
            "day" : "S"
          }
    ]
    
            
    return (
        <Container>
            <Input value={habit} onChange={(e)=>setHabit(e.target.value)} placeholder="nome do hábito"></Input>
            <Week >
            {weekDay.map(dia=> <DayButton {...dia} />)}                    
            </Week>
            <SaveBox>
                <CancelButton> Cancelar </CancelButton>
                <SaveButton> Salvar </SaveButton>
            </SaveBox>
        </Container>

    );
}