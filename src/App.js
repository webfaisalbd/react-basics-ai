import Card from "./components/Card";

import Data from './data.json';
// console.log(Data[0]);

function App() {

    // let items = [];
    // for(let i=0; i<Data.length;i++){
    //     items.push(<Card title={Data[i].title} desc={Data[i].desc} />)
    // }

    // let items = [];
    // items = Data.map((item) => <Card title={item.title} desc={item.desc} />)

    return (
        <div className="rowCard">
           {
            Data.map((item, index) => <Card key={index} title={item.title} desc={item.desc} /> )
           }
        </div>
    );
}

export default App;