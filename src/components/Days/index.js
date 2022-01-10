import { Container } from "./style";

export default function Days({ id, day, weekDay, days }) {

    function background({ days,id }) {
        
        for (let i = 0; i < days.length; i++) {
           if(days[i]===id){
               return true;
           }
        }

        return false;
    

}

return (
    <Container background={background({ id, days })} days={days} weekDay={weekDay}>{day}</Container>
);

}