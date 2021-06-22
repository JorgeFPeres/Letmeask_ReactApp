import illustrationImg from '../assets/illustration.svg'
import logoImg from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import '../styles/global.scss'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export function NewRoom() {
  const { user } = useAuth()

  return (
    <div id='page-auth'>
      <aside>
        <img
          src={illustrationImg}
          alt='Ilustração simbolizando perguntas e respostas'
        />
        <div>
          <strong>Crie salas de Q&amp;A ao-vivo</strong>
        </div>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className='main-content'>
          <img src={logoImg} alt='Let me ask logo' />
          <h2>Criar uma nova sala</h2>
          <form>
            <input type='text' placeholder='Nome da sala' />
            <Button type='submit'>Criar sala</Button>
            <p>
              Quer entrar em uma sala existente? <Link to='/'>Clique aqui</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  )
}
