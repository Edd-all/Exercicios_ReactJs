import { useEffect, useState } from "react"

export function Relogio (){

    const [hora, setHora] = useState(new Date());

    useEffect(()=>{
        const horaAtual = setInterval(()=> setHora(new Date()), 300);
        return ()=> horaAtual;
    })
    
    return (
        <div>
            {hora.toLocaleDateString()}
            <br></br>
            {hora.toLocaleTimeString()}
        </div>
    )
}


