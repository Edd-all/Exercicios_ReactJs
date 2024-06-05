import { useState} from "react";


export function PaginaDeLogin(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        
        // Simulação de verificação de login
        if (email === 'user@example.com' && password === 'password') {
            console.log(email);
          alert('Login bem-sucedido! Bem vindo' + ' ' + email);
          
        } else {
          setErrorMessage('Email ou senha incorretos.');
        }
      };

    return(
        <>

        <div className="App">
            <header className="App-header">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Entrar</button>
                </form>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </header>
            </div>
        );
            
        </>
    )

}