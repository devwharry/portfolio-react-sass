import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },
];

function TechDescription({ tech }) {
  let paragraph;
  
  if (tech === "HTML5") {
    paragraph = <p>HTML5 é a última versão do HTML. Ele define um conjunto de regras para a codificação de páginas da web.</p>;
  } else if (tech === "CSS3") {
    paragraph = <p>CSS3 é a última evolução do padrão de estilo em cascata (CSS). Ele traz várias novas funcionalidades e aprimoramentos para o CSS.</p>;
  } else if (tech === "JavaScript") {
    paragraph = <p>JavaScript é uma linguagem de programação de alto nível, interpretada e de script comum. Ela é usada principalmente para criar páginas web dinâmicas.</p>;
  } else if (tech === "Node.js") {
    paragraph = <p>Node.js é um ambiente de tempo de execução JavaScript que permite executar JavaScript no lado do servidor. Ele é usado para criar aplicativos de rede escaláveis e rápidos.</p>;
  } else if (tech === "MySQL") {
    paragraph = <p>MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto. Ele utiliza SQL (Structured Query Language) para gerenciar dados em um banco de dados.</p>;
  } else if (tech === "React") {
    paragraph = <p>React é uma biblioteca JavaScript de código aberto usada para criar interfaces de usuário (UI) em páginas web. Ele é mantido pelo Facebook e por uma comunidade de desenvolvedores individuais e empresas.</p>;
  }
  return (
    <div className="technology-info">
      <h3>{tech}</h3>
      {paragraph}
    </div>
  );
}

const TechnologiaesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {
          technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <TechDescription tech={tech.name} />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default TechnologiaesContainer;