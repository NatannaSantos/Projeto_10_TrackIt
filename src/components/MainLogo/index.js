import Logo from "../../assets/logo.png";
import { Container } from "./style";

export default function MainLogo() {
    return (
        <Container>
            <img src={Logo} alt="TrackIt" />
        </Container>
    );
}