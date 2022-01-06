import MainLogo from "../MainLogo";
import { Input } from "../Input";
import { Container,StyledLink } from "./style";
import { Button } from "../Button";


export default function LoginPage() {
    return (
        <Container>
        <MainLogo />
         <form>
         <Input type = "email" placeholder="email"/>
         <Input type = "password" placeholder="senha"/>
         <Button type="submit">Entrar</Button>
         </form>    
         <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>    
        </Container>   
    );
}