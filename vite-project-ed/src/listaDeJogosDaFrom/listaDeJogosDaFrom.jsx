import { useState } from "react"


export function ListaDeJogosDaFrom(){
    const jogos = [
        { id: 1, name: 'Demon Souls' },
        { id: 2, name: 'Dark Souls' },
        { id: 3, name: 'BloodBourne' },
    ]

    const [ListaDeJogosDaFrom, setJogos] = useState(jogos);
    const [novoJogo, setNovoJogo] = useState('');



    function adicionarJogos(){
        if (novoJogo.trim() !== ''){
            const EntradaNovoJogo = {
                id: ListaDeJogosDaFrom.length + 1,
                name: novoJogo,
            };
            setJogos([...ListaDeJogosDaFrom, EntradaNovoJogo]);
            setNovoJogo('');
        }
    }

    return(
        <>
            <h1> Minha lista de jogos da From Software </h1>
            <h1> </h1>
            <div>
                <ul>
                    {ListaDeJogosDaFrom.map((jogo)=>(
                        <li key={jogo.id}>{jogo.name}</li>
                    ))}
                </ul>

            <input 
            type="text" 
            value={novoJogo}
            onChange={(j)=> setNovoJogo(j.target.value)}
            placeholder="Adicionar novo jogo"
            />

            <br />
            <br />
            <button onClick={adicionarJogos}>Adicionar</button>

            </div>
        </>
    )
}