import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement,incrementByAmount} from './CountSlice'

function Counter() {
    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    return(
        <div >
            <button className="btn btn-primary" onClick={()=>{dispatch(increment())}}>+</button>
            <span className="value text-col">Count : {count}</span>
            <button className="btn btn-danger" onClick={()=>{dispatch(incrementByAmount(10))}}>incrementByAmount(10)</button>
            <button className="btn btn-danger" onClick={()=>{dispatch(decrement())}}>-</button>
        </div>
    );
}
export default Counter;
