import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loading(){
    return (
        <Loader type="ThreeDots" color="#FFFFFF" height={50} width={50}  />
    );
}