import { Container, Input, Week, SaveBox, CancelButton, SaveButton } from "./style";
import DayButton from "../DayButton";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import Loading from "../Loading";

export default function CreateHabit({deActivate, weekDay, setRender, render}) {

  const [habit, setHabit] = useState('');
  const [loading, setLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);  
  const { user } = useContext(UserContext);
  const desative = deActivate; 

  
  const selectDay = [];

  const config = {
    headers: {
      "Authorization": `Bearer ${user.token} `
    }
  }

  function handleHabit(e) {
    e.preventDefault();

    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", { name: habit, days: selectDay }, config)
    promise.then(response => {
      console.log(response.data)
      setRender(!render);
      setIsDisable(true);
      setLoading(true);
      setHabit('');   
      desative();
      }); 
      
    
  promise.catch(error => {
    alert(error.response.data.message);
    setIsDisable(false);
    setLoading(false);    
  });

}


return (
  
    <Container>
      <Input disabled={isDisable} value={habit} onChange={(e) => setHabit(e.target.value)} placeholder="nome do hábito"></Input>
      <Week >
        {weekDay.map(dia => <DayButton isDisable={isDisable} type="text" selectDay={selectDay} {...dia} />)}
      </Week>
      <form onSubmit={handleHabit}>
      <SaveBox>
        <CancelButton onClick={desative}> Cancelar </CancelButton>
        <SaveButton type="submit" disabled={isDisable}> {loading ? <Loading /> : "Salvar"} </SaveButton>
      </SaveBox>
      </form>
    </Container>
  
);
}