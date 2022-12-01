import { useState, useEffect } from 'react'
import '/src/styles/style.css'
import '/src/styles/header.css'
import '/src/styles/inicio.css'
import '/src/styles/sobre.css'
import '/src/styles/projetos.css'
import '/src/styles/certificações.css'
import '/src/styles/linguagens.css'
import '/src/styles/maisinfo.css'
import '/src/styles/footer.css'


export function Home() {

  const [user, setUser] = useState({name: '', avatar: '' });

  function Sobre() {
      window.scrollTo(0,1200);
  }
  
  function Projetos() {
    window.scrollTo(0, 2450);
  }

  function Certificações() {
    window.scrollTo(0, 3750)
  }

  function Linguagens() {
    window.scrollTo(0, 5050)
  }

  function MaisInformações() {
    window.scrollTo(0, 6200)
  }

  function Contato() {
    window.scrollTo(0, 6420)
  }

  useEffect(() => {
    fetch('https://api.github.com/users/gustavoohpa')
    .then(response => response.json())
    .then(data => {
      setUser({
        login: data.login,
        avatar: data.avatar_url
      })
    })
  }, [])

  return (
    <div className='container'>
      <body>
        
      </body>
      <header>
        <nav>
          <button type='button' onClick={Sobre}>Sobre mim</button>
          <button type='button' onClick={Projetos}>Projetos</button>
          <button type='button' onClick={Certificações}>Certificações</button>
          <button type='button' onClick={Linguagens}>Linguagens de Programação</button>
          <button type='button' onClick={MaisInformações}>Mais informações</button>
          <button type='button' onClick={Contato}>Contato</button>
        </nav>
      </header>
      <main>
      <div className='Inicio'>
        <div>
          <p>
            Oi, eu sou
          </p>
          <h1>
            <strong>Gustavo Henrique</strong>
          </h1>
          <p>
            Desenvolvedor Front-end
          </p>
        </div>
        <img src={user.avatar} alt="Foto de Perfil" />
      </div>
        <div className='Sobre'>
          <h1>Sobre mim</h1>
          <div>
            <p>Meu nome é Gustavo, tenho 17 anos e me envolvi com o mundo da tecnologia pela primeira vez aos 12 anos quando conheci o Curso em Vídeo 
              e comecei a estudar a lógica de programação com scratch e visualg.
              Voltei a estudar linguagens de programação em 2021 mas só em 2022 que realmente entendi que eu queria fazer aquilo pelo resto da minha vida e 
              então decidi me dedicar a isso.
            </p>
          </div>
        </div>
        <div className='Projetos'>
          <h1>Projetos</h1>
          <div>
            <h1>Em Breve</h1>
          </div>
        </div>
        <div className='Certificações'>
          <h1>Certificações</h1>
          <p>Clique na imagem para a abrir em outra página e ver o certificado em tela cheia.</p>
          <div className='BarraDeRolagem'>
            <a href="/src/image/CertificadoFundamentar.jpg" target={'_blank'}><img src='src/image/CertificadoFundamentar.jpg' alt="Certificado Fundamentar Rocketseat" /></a>
            <a href="/src/image/CertificadoConectar.jpg" target={'_blank'}><img src='src/image/CertificadoConectar.jpg' alt="Certificado Conectar Rocketseat" /></a>
          
          </div>
        </div>
        <div className='Linguagens'>
          <h1 className='Title'>Linguagens de Programação</h1>

          <div className='Categorias'>
            <div className='TenhoExp'>
              <h2>Tenho experiência</h2>
                <div className='JS'>
                  <img src="src/image/js.png" alt="Javascript" />
                    <h3>Javascript</h3>
              </div>
              <div className='HTML'>
                  <img src="src/image/html.png" alt="HTML" />
                  <h3>HTML 5</h3>
              </div>
              <div className='CSS'>
                <img src="src/image/css.png" alt="CSS" />
                <h3>CSS 3</h3>
              </div>
                <div className='REACT'>
                  <img src="src/image/react.png" alt="React" />
                  <h3>React</h3>
                  </div>
            </div>

            <div className='EstouEst'>
              <h2>Estou estudando</h2>
              <div className='TS'>
                <img src="src/image/typescript.png" alt="Typescript" />
                <h3>Typescript</h3>
              </div>
              <div className='NODEJS'>
                <img src="src/image/nodejs.png" alt="Node JS" />
                <h3>Node JS</h3>
              </div>
              <div className='GIT'>
                <img src="src/image/git.png" alt="Git" />
                <h3>Git</h3>
              </div>
              <div className='SQL'>
                <img src="src/image/sql.png" alt="SQL" />
                <h3>SQL</h3>
              </div>
            </div>

            <div className='TenhoInt'>
              <h2>Tenho interesse</h2>
              <div className='CSHARP'>
                <img src="src/image/csharp.png" alt="C#" />
                <h3>C#</h3>
              </div>
              <div className='PYTHON'>
                <img src="src/image/python.jpg" alt="Python" />
                <h3>Python</h3>
              </div>
              <div className='JAVA'>
                <img src="src/image/java.jpg" alt="Java" />
                <h3>Java</h3>
              </div>
              <div className='PHP'>
                <img src="src/image/php.png" alt="PHP" />
                <h3>PHP</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='MaisInformações'>
          <h1>Mais Informações</h1>
          <p>Bom, isso é um pouco da minha trajetória até o momento. Estou saindo da escola e logo estarei entrando na faculdade de 
            Análise e Desenvolvimento de Sistemas. Caso queira entrar em contato comigo, é só me mandar mensagem por alguma dessas redes sociais 
            aí embaixo. Espero por você lá e agradeço por ter vindo até aqui.
          </p>
        </div>
      </main>
      <footer>
        <div className='footer'>
            <h1>Contato</h1>
          <nav>
            <a href="https://github.com/GustavooHPA" target='_blank' rel="noopener noreferrer">
              <div className='GitHub'>
                <img src="src/image/github.jpg" alt="Github" />
                <h2>GitHub</h2>
              </div>
            </a>
            <a href="https://www.instagram.com/gustavohpa_/" target='_blank' rel="noopener noreferrer">
                <div className='Instagram'>
                  <img src="src/image/instagram.png" alt="" />
                  <h2>Instagram</h2>
                </div>
            </a>
            <a href="mailto:gustavohp11.11.11@gmail.com" target='_blank' rel="noopener noreferrer">
              <div className='Email'>
                <img src="src/image/email.png" alt="E-mail" />
                <h2>E-mail</h2>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/gustavoohpa/" target='_blank' rel="noopener noreferrer">
              <div className='Linkedin'>
                <img src="src/image/linkedin.png" alt="Linkedin" />
                <h2>Linkedin</h2>
              </div>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Home
