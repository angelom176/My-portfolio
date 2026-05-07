import Image from "next/image";
import "./style.css";

const servicos = [
  {
    src: "/imagens/fluxoPotencia.jpeg",
    titulo: "Estudo de fluxo de potência",
    descricao: "Análise detalhada do fluxo de potência para otimizar a eficiência e a confiabilidade do sistema elétrico.",
  },
  {
    src: "/imagens/protecaoSeletividade.jpeg",
    titulo: "Estudo de proteção e seletividade",
    descricao: "Análise das características de proteção e seletividade para garantir a segurança e a confiabilidade do sistema elétrico.",  
  },
  {
    src: "/imagens/arcFlash.jpeg",
    titulo: "Análise de arc flash",
    descricao: "Análise detalhada das conseqüências de um arco elétrico para garantir a segurança dos operadores.",

  },
  {
    src: "/imagens/cabos.jpeg",
    titulo: "Dimensionamento de cabos",
    descricao: "Dimensionamento adequado dos cabos para garantir a eficiência e a segurança da instalação elétrica.",
  },
  {
    src: "/imagens/motores.jpeg",
    titulo: "Estudo de motores elétricos",
    descricao: "Análise detalhada do desempenho e da eficiência dos motores elétricos para otimizar o consumo de energia.",
  },
];

const esquerda = servicos.slice(0, 3);
const direita = servicos.slice(3, 6);

export default function Home() {
  return (
    <>

    
      <Image
        className="backgroundImage1"
        src="/imagens/Firefly.jpg"
        alt=""
        fill
        priority
      />

        <header className="header">
        <h1>Forge</h1>

        <ul>
          <li><a href="#contato">Contato</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#servicos">Serviços</a></li>
        </ul>

        <a href="#contato">
          <button type="button">SOLICITAR UM ORÇAMENTO</button>
        </a>
        </header>

        <section className="firstContainer">
        <p>
          ESTUDOS PARA O MELHOR<br /> DO SEU
          <strong> SISTEMA ELÉTRICO</strong>
        </p>
        <p className="description">Foco em soluções eficientes e seguras para sua infraestrutura elétrica.</p>

        <div className="lineButtons">
        
        <a href="#contato">
          <button className="buttonOne" type="button">Converse com um consultor</button>
        </a>
        <a href="#contato">
          <button className="buttonTwo" type="button">Solicite um Orçamento</button>
        </a>
        </div>
        </section>

        
    

      <div className="secondContainer">
        <h2>O QUE FAZEMOS?</h2>
        <p>
          lorem ipsum dolor sit amet, consectetur
           adipiscing elit. Sed do eiusmod tempor incididunt ut
           lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>

      <div className="thirdContainer">
        <div className="layoutCards">
          <div className="coluna">
            {esquerda.map((item) => (
              <div className="card" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.titulo}
                  width={400}
                  height={300}
                />

                <div className="cardText">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="coluna">
            {direita.map((item) => (
              <div className="card" key={item.src}>
                <Image
                  src={item.src}
                  alt={item.titulo}
                  width={400}
                  height={300}
                />

                <div className="cardText">
                  <h3>{item.titulo}</h3>
                  <p>{item.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      <div className="fourthContainer">
        <div className="line">
          <h2>POR QUE ESCOLHER A PROPOWER?</h2>
          <p>
            Contamos com engenheiros eletricistas com vasta experiência em
            análise de sistemas elétricos de baixa, média e alta tensão.
          </p>

          <h3>Precisão e Confiabilidade dos Resultados</h3>
          <p>
            Mais do que entregar um estudo técnico, entendemos a realidade da
            sua operação e adaptamos nossas soluções às suas necessidades
            específicas.
          </p>

          <h3>O Melhor Custo-Benefício para o Seu Projeto</h3>
          <p>
            Por sermos uma equipe enxuta e especializada, conseguimos oferecer
            preços mais competitivos sem abrir mão da excelência técnica.
          </p>
        </div>

        <Image
          className="raio"
          src="/imagens/raio.png"
          alt="Ícone de raio"
          width={200}
          height={200}
        />

        <Image
          className="backgroundImage2"
          src="/imagens/engenheiroEletrecista.jpg"
          alt=""
          fill
        />
      </div>

      <div className="layerStack"></div>

      <div className="projetos">
        <h4>A ESCOLHIDA DAQUELES QUE RECONHECEM</h4>
        <h1>A IMPORTÂNCIA DA ENGENHARIA ELÉTRICA</h1>

        <div className="projetosText">
          <div className="projeto"></div>
          <div className="projeto"></div>
          <div className="projeto"></div>
        </div>
      </div>

      <div id="contato" className="content">
        <h2>FALE CONOSCO</h2>
        <p>Entre em contato conosco para discutir suas necessidades.</p>

        <form>
          <label htmlFor="nome">Nome</label>
          <input id="nome" type="text" name="nome" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />

          <label htmlFor="telefone">Telefone</label>
          <input id="telefone" type="tel" name="telefone" />

          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows={4}></textarea>

          <button type="submit">ENVIAR</button>
        </form>
      </div>

      <footer>
        <Image
          className="backgroundFooter"
          src="/imagens/engenheiroEletrecista.jpg"
          alt=""
          fill
        />

        <Image
          src="/imagens/logo.png"
          alt="Logo da ProPower"
          width={200}
          height={100}
        />

        <div>contato@propower.com.br</div>
        <div>(11) 99999-9999</div>
        <div>Rua Exemplo, 123 - São Paulo, SP</div>
        <div>linkedin.com/in/propower</div>

        <p>© 2024 ProPower. Todos os direitos reservados.</p>
      </footer>
    </>
  );
}