import {useSelector} from 'react-redux';
function Coins(){
    const coins = useSelector((state)=>state.counter.count)
    const color = useSelector((state)=>state.theme.color)
    return(
        <div>
            <span className="value text-col" style={{color:color}}>Coins : {coins}</span>
        </div>
    );
}
export default Coins;