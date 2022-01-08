import MainLogo from "../MainLogo";
import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
import { StyledLink } from "./style";
import { useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage]= useState('');
    const [isDisable, setIsDisable]= useState(false);
    const [loading,setLoading] = useState(false);
    const navigate=useNavigate();

    function handleRegister(e){
        e.preventDefault();

        setLoading(true);
        setIsDisable(true);

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email,
            password,
            name,
            image
        });

        promise.then(response=>{
            navigate('/');
            setIsDisable(false)  
            setLoading(false); 
            setEmail('');
            setPassword('');
            setName('');
            setImage('');   
        });
        promise.catch(error=>{
            alert(error.response.data.message)              
        });
    } 


    return (
        <Container>
            <MainLogo />
            <form onSubmit={handleRegister}>
                <Input type="email" disabled={isDisable} value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                <Input type="password" disabled={isDisable} value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="senha" />
                <Input type="text" disabled={isDisable} value={name} onChange={(e)=> setName(e.target.value)} placeholder="nome" />
                <Input type="text" disabled={isDisable}value={image} onChange={(e)=> setImage(e.target.value)}  placeholder="foto" />
                <Button type="submit" disabled={isDisable}>{loading?  <Loading /> : "Cadastrar"}</Button>
            </form>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink> 
        </Container>

    );
}