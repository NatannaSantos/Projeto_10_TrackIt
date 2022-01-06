import TrackIt from "../../assets/TrackIt.png";
import { Container, ProfilePicture } from "./style";

export default function Top(){
    return(
        <Container>
        <img src={TrackIt} alt="TrackIt"/>
        <ProfilePicture></ProfilePicture>
        </Container>
    );
}