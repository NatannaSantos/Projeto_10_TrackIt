import { useContext } from "react";
import TrackIt from "../../assets/TrackIt.png";
import UserContext from "../../contexts/UserContext";
import { Container, ProfilePicture } from "./style";

export default function Top(){
    const {user}= useContext(UserContext);

    return(
        <Container>
        <img src={TrackIt} alt="TrackIt"/>
        <ProfilePicture src={user.image} />        
        </Container>
    );
}