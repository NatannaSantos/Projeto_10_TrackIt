import axios from "axios";
import { useContext, useState } from "react";
import Check from "../../assets/check.png";
import UserContext from "../../contexts/UserContext";
import { Container, Text, Button } from "./style";

export default function TodayHabit({name,currentSequence,highestSequence,id,setConcluded,concluded}){ 
    const [complet, setComplet]=useState(false); 
    const {user}= useContext(UserContext);
    
    const config = {
        headers: {
          "Authorization": `Bearer ${user.token} `
        }
      }

    function handleComplet(id){
        { complet === false ? setComplet(true) : setComplet(!complet) }
        if(complet === false){
            const promise= axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,{},config);
            promise.then(response=>{
                console.log(response.data)
                setConcluded(!concluded)
            });
            promise.catch(error=> alert(error.response.data.message));
        } else{
            const promise=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,{},config);
            promise.then(response=> {
                console.log(response.data)
                setConcluded(!concluded)
            });
            promise.catch(error=>console.log(error.response.data));
        }
    }
    return (
        <Container>
         <Text> 
                <h1> {name} </h1>
                <p> Sequência atual: {currentSequence} dias </p>
                <p>Seu recorde: {highestSequence} dias </p>
                </Text>  
                <Button selected={complet} onClick={()=>handleComplet(id)}>
                    <img src={Check} />
                </Button>     
        </Container>
    );
}