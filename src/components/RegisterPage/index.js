import MainLogo from "../MainLogo";
import { Container } from "./style";
import { Input } from "../Input";
import { Button } from "../Button";
import { StyledLink } from "./style";

export default function RegisterPage() {
    return (
        <Container>
            <MainLogo />
            <form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="senha" />
                <Input type="text" placeholder="nome" />
                <Input type="text" name="file" placeholder="foto" />
                <Button type="submit">Cadastrar</Button>
            </form>
            <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink> 
        </Container>

    );
}