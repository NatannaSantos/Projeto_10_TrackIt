import { Container, Today } from "./style";
import { StyledLink } from "./style";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Menu() {
    const percentage = 60;


    return (
        <Container>
            <StyledLink to="/habito">Hábitos </StyledLink>

            <Link to="/hoje">
                <Today>
                    <CircularProgressbar value={percentage} text={`Hoje`} background backgroundPadding={6} styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                    />

                </Today>
            </Link>

            <StyledLink to="/historico">Histórico</StyledLink>
        </Container >
    );
}