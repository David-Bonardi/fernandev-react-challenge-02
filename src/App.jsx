import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - Desabilite o botão de Login equanto você está executando o login.
// todo - Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.

export default function LoginForm() {
  const [error, setError] = useState('')
  const [activeButton, setActiveButton] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


const handleEmail = (e) => {
  const email = e.target.value
  setEmail(email)
  if(email.length > 0 && password.length >= 6){
    setActiveButton(true)
  } else{
    setActiveButton(false)
  }
}

const handlePassword = (e) => {
  const password = e.target.value
  setPassword(password)

  if(email.length > 0 && password.length >= 6){
    setActiveButton(true)
  }else{
    setActiveButton(false)
  }
}

async function treatError() {
  setError(''); // Clear previous error
  setActiveButton(false)
  
  try {
    await login({ email, password });
    alert('Login successful!');
    setActiveButton(true)
  } catch (err) {
    setError('Login failed. Please try again.');
    setActiveButton(true)
  }
}



  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {error ? (
          <div className='errorMessage'>{error}</div>
        ): <></>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input onChange={handleEmail} id={'email'} type={'email'} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input onChange={handlePassword}  id={'password'} type={'password'} />
        </div>
          <div className='button'>
          <button onClick={treatError} disabled={!activeButton}>Login</button>
        </div>
      </div>
    </div>
  );
}
