import { useState } from "react";
import { Container } from "./style";


export default function DayButton({id, day}){
    const [selected, setSelected] = useState(false);


    function selection(id) {
       
        {selected===false? setSelected(true): setSelected(!selected)}
        
       console.log (id);
        
               }

    return(
        <Container  selected={selected} onClick={()=>selection(id)} >{day}</Container>
        );
    
}