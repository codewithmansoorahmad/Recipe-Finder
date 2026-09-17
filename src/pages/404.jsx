import { ArrowBigLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import "../css/404.css"

export default function PageNotFound(){
    const navigate=useNavigate()
    return<div  className="page-not-found">
    <button onClick={()=>navigate("/")}><ArrowBigLeft/></button>
    <h1>404</h1>
    <h1>PAGE NOT FOUND</h1>
    </div>
}