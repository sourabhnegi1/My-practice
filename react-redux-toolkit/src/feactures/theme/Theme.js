import {useState} from "react"
import {useDispatch} from "react-redux"
import {themetextcolor} from './ThemeSlice'
function Theme(){
    const [color,SetColor] = useState("white");
    const dispatch = useDispatch()
    return(
        <div>
            <input className="textbox" type="text" onChange={(e)=>SetColor(e.target.value)}/>
            <button className="" onClick={()=>{dispatch(themetextcolor(color))}}>change</button>
        </div>
    );
}
export default Theme;