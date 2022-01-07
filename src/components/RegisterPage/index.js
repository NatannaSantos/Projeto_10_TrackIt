import MainLogo from "../MainLogo";
import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
import { StyledLink } from "./style";
import { useState } from "react";
import axios from "axios";


export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage]= useState('');

    function handleRegister(e){
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',{
            email,
            password,
            name,
            image
        });

        promise.then(response=>console.log(response));
        promise.catch(error=>alert(error.response.data.message));
    }
    



    return (
        <Container>
            <MainLogo />
            <form onSubmit={handleRegister}>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />
                <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="senha" />
                <Input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="nome" />
                <Input type="text" value={image} onChange={(e)=> setImage(e.target.value)}  placeholder="foto" />
                <Button type="submit">Cadastrar</Button>
            </form>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink> 
        </Container>

    );
}