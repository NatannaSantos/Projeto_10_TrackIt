import { useState } from "react";
import { Container } from "./style";



export default function DayButton({ id, day, selectDay, isDisable}) {
    const [selected, setSelected] = useState(false);
      


    function selection(id) {

        { selected === false ? setSelected(true) : setSelected(!selected) }
        if (selected === false) {
            selectDay.push(id);
        }else {
            let index=-1;
            index=selectDay.indexOf(id);
            if(index!==-1){
                selectDay.splice(index,1);
            }
        }
       
        console.log(selectDay);

    }


    return (
        <Container disabled={isDisable} selected={selected} onClick={() => selection(id)} >{day}</Container>
    );

}