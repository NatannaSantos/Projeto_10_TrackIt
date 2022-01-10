import Top from "../Top";
import Menu from "../Menu";
import { Container } from "./style";
import { useContext, useEffect, useState } from "react";
import TextHistoric from "../TextHistoric";
import HistoricBox from "../HistoricBox";
import axios from "axios";
import UserContext from "../../contexts/UserContext";

export default function HistoricPage() {
    const [historic, setHistoric] = useState([]);
    const [nome, setNome] = useState('');
    const { user } = useContext(UserContext);    
    
    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", config);
        promise.then(response => {
            setHistoric(response.data)
            
            for(let i=0;i<response.data.length;i++){
                for(let j=0;j<response.data[i].habits.length;j++){
                    setNome(response.data[i].habits[j].name);
                                          
                 }   
                                        
             } 
                      
        });
    }, []);
     if (!historic) {
        return "carregando...";
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${user.token} `
        }
    }

    return (
        <Container>
            <Top />
            <h1>Histórico</h1>
            {historic.length === 0 ? <TextHistoric /> : historic.map(historico => <HistoricBox nome={nome} {...historico} />)}
            <Menu />
        </Container>

    );
}