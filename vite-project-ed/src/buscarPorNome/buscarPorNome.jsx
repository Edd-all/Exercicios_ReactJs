import { useState } from 'react';

const pessoas = [
    {id: 1,name: 'Vinicius'},
    {id: 2,name: 'Beatriz'},
    {id: 3,name: 'Matheus'},
    {id: 4,name: 'Juliana'},
    {id: 5,name: 'João Pedro'},
];


export function BuscarPorNome(){

    const[procurarPessoa,setProcurarPessoa] = useState('');

    const acharPessoa = (e) => {
        setProcurarPessoa(e.target.value);
    }

    const filtrarPessoa = pessoas.filter(pessoa => 
        pessoa.name.toLowerCase().includes(procurarPessoa.toLowerCase())
    );

    return(
        <>

            <h1>Lista Pessoas</h1>
            <input
                type="text"
                placeholder="Buscar por nome"
                value={procurarPessoa}
                onChange={acharPessoa}
            />
            <ul>
                {filtrarPessoa.map(user => (
                <li key={user.id}>
                    <h2>{user.name}</h2>               
                </li>
                ))}
            </ul>

        </>
    )
}