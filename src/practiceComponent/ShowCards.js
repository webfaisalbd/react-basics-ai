import Data from '../data.json';
import ShowCard from './ShowCard';
console.log(Data);

function ShowCards() {
    
    return (
        <>
            {
                Data.map((item, index) => <ShowCard key={index} title={item.title} desc={item.desc}  /> )
            }
        </>
    );
}
export default ShowCards;