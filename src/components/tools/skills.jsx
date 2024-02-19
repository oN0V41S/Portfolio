export default function Skills() {
  const frontEnd = [
    {
      title: "Next",
      desc: "Desenvolvimento de Aplicações com a Biblioteca Next utilizando os principais recursos da biblioteca e outros pacotes.",
      img: "https://img.icons8.com/color/48/nextjs.png",
    },
    {
      title: "React",
      desc: "Familiaridade com a biblioteca criando aplicações com NodeJS, React-Hooks, react-router e outras bibliotecas utilizadas.",
      img: "https://img.icons8.com/ultraviolet/40/react--v1.png",
    },
    {
      title: "SassCSS",
      desc: "Criação de estilos com a biblioteca do SassCSS que possibilita a utilização de novos recursos para o CSS comum.",
      img: "https://img.icons8.com/color/48/sass.png",
    },
    {
      title: "Linguagens de Marcação",
      desc: "Conhecimento em Linguagens de Marcação HTML5, CSS3, e Markdown e outros.",
      img: "https://img.icons8.com/glyph-neue/64/source-code.png",
    },
  ];

  const backEnd = [
    {
      title: "Flask",
      desc: "Criação de APIRest.",
      img: "https://img.icons8.com/ios/50/flask.png",
    },
    {
      title: "Spring",
      desc: "Spring Boot, Spring initilzr, API Rest, JPAs.",
      img: "https://img.icons8.com/color/48/spring-logo.png",
    },
    {
      title: "SQL",
      desc: "Gerenciar e Manipular banco de dados Relacionais, com as principais instruções SQL",
      img: "https://img.icons8.com/ios-filled/50/000000/database.png",
    },
  ];

  const linguagens = [
    {
      title: "JavaScript",
      desc: "Familiaridade com a linguagem, Fetch APIs, DOM.",
      img: "https://img.icons8.com/color/48/javascript.png",
    },
    {
      title: "TypeScript",
      desc: "Familiaridade com a linguagem,conhecimento em conceito de tipagem e POO.",
      img: "https://img.icons8.com/color/48/typescript.png",
    },
    {
      title: "Python",
      desc: "Familiaridade com a linguagem, Estrutura de POO.",
      img: "https://img.icons8.com/color/48/python.png",
    },
    {
      title: "Java",
      desc: "Familiaridade com a linguagem, Estrutura de POO.",
      img: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
    },
    {
      title: "Kotlin",
      desc: "Familiaridade com a linguagem, Estrutura de POO.",
      img: "https://img.icons8.com/color/48/kotlin.png",
    },
  ];

  const devTools = [
    {
      title: "Git e Github",
      desc: "Familiaridade com git, e Gerenciamento de Repositórios com Github.",
      img: "https://img.icons8.com/color/48/git.png",
    },
    {
      title: "Docker",
      desc: "Capacidades de criar imagens e conteiners do docker, e instância-lós.",
      img: "https://img.icons8.com/fluency/48/docker.png",
    },
    {
      title: "Postman",
      desc: "Testes de solicitações HTTP e outros recursos da ferramenta.",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png",
    },
  ];

  return (
    <section className="skills">
      <h1 className="title-page">Habilidades</h1>
      <div className="skill-list">
        <SkillArea id="FrontEnd" name="Front-End">
          {frontEnd.map((skill) => (
            <ItemSkill title={skill.title} desc={skill.desc} img={skill.img} />
          ))}
        </SkillArea>
        <SkillArea id="BackEnd" name="Back-End">
          {backEnd.map((skill) => (
            <ItemSkill
            title={skill.title}
            desc={skill.desc}
            img={skill.img}
            />
          ))}
        </SkillArea>
        <SkillArea id="Languages" name="Linguagens de Programação">
          {linguagens.map((skill) => (
            <ItemSkill
            title={skill.title}
            desc={skill.desc}
            img={skill.img}
            />
          ))}
        </SkillArea>
        <SkillArea id="DevTools" name="Ferramentas de Desenvolvimento">
          {devTools.map((skill) => (
            <ItemSkill
            title={skill.title}
            desc={skill.desc}
            img={skill.img}
            />
          ))}
        </SkillArea>
      </div>
    </section>
  );
}

function SkillArea({ id, name, children }) {
  return (
    <div id={id} className="skill-area">
      <h2>{name}</h2>
      {children}
    </div>
  );
}

function ItemSkill({ title, img, desc }) {
  return (
    <div className="skill">
      <div>
        <img alt="skillImg" src={img} />
        <h1>{title}</h1>
      </div>
      <p>{desc}</p>
    </div>
  );
}
