import MainLogo from "../MainLogo";
import { Input } from "../Input";
import { Container, StyledLink } from "./style";
import { Button } from "../Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";



export default function LoginPage({setToken}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const [loading,setLoading] = useState(false);
    const [isDisable, setIsDisable]= useState(false);

    function handleLogin(e){
        e.preventDefault();
        
        setLoading(true);
        setIsDisable(true);
        
        const promise=axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',{
            email,
            password
        });
        
        promise.then(response=>{
            setToken(response.data.token)
            navigate('/hoje')
        });
        promise.catch(error=> {
            alert(error.response.data.message) 
            setLoading(false)
            setIsDisable(false)
            setEmail('')
            setPassword('')
        });
    } 
    

    return (
        <Container>
            <MainLogo />
            <form onSubmit={handleLogin}>
                <Input type="email" disabled={isDisable} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                <Input type="password" disabled={isDisable} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="senha" />
                <Button type="submit" disabled={isDisable}>{loading?  <Loading /> : "Entrar"}</Button>
            </form>
            

            <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </Container>
    );
}