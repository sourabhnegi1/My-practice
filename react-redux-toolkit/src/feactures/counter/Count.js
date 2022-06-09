import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/count.css'
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,incrementByAmount} from './CountSlice'

function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return(
        <div className="container pt-100" >
            <button className="btn1" onClick={()=>{dispatch(increment())}}>+</button>
            <span className="value text-col">Count : {count}</span>
            <button className="btn1" onClick={()=>{dispatch(incrementByAmount(10))}}>incrementByAmount(10)</button>
            <button className="btn1" onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
    );
}
export default Counter;
