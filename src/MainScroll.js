import React from 'react';
import sr from './ScrollReveal';
import Heart from './Heart';

export class RevealMe extends React.Component {
  componentDidMount = () => {
    const config = {
      origin: 'right',
      duration: 1000,
      delay: 150,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config2 = {
      origin: 'right',
      duration: 1000,
      delay: 250,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config3 = {
      origin: 'right',
      duration: 1000,
      delay: 350,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config4 = {
      origin: 'right',
      duration: 1000,
      delay: 450,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    const config5 = {
      origin: 'right',
      duration: 1000,
      delay: 450,
      distance: '500px',
      scale: 1,
      easing: 'ease',
    };

    sr.reveal(this.refs.box1, config);
    sr.reveal(this.refs.box2, config2);
    sr.reveal(this.refs.box3, config3);
    sr.reveal(this.refs.box4, config4);
    sr.reveal(this.refs.box5, config5);
  };

  render() {
    return (
      <main className="flex justify-center">
        <div className="container main">
          <section className="testimonial" id="testimonials">
            <div className="row" ref="box1">
              <article className="container-post">
                <span className="flex justify-between">
                  <p className="date">25 de agosto de 2021</p>
                  <Heart />
                </span>
                <span className="">
                  <h3 className="title">Node.js</h3>
                  <p className="description">
                    Node.js é um software de código aberto, multiplataforma,
                    baseado no interpretador V8 do Google e que permite a
                    execução de códigos JavaScript fora de um navegador web.
                  </p>
                </span>
              </article>
            </div>
          </section>
          <section className="testimonial" id="testimonials">
            <div className="row" ref="box2">
              <article className="container-post">
                <span className="flex justify-between">
                  <p className="date">25 de agosto de 2021</p>
                  <Heart />
                </span>
                <span className="">
                  <h3 className="title">JavaScript</h3>
                  <p className="description">
                    JavaScript é uma linguagem de programação interpretada
                    estruturada, de script em alto nível com tipagem dinâmica
                    fraca e multiparadigma. Juntamente com HTML e CSS, o
                    JavaScript é uma das três principais tecnologias da World
                    Wide Web.
                  </p>
                </span>
              </article>
            </div>
          </section>
          <section className="testimonial" id="testimonials">
            <div className="row" ref="box3">
              <article className="container-post">
                <span className="flex justify-between">
                  <p className="date">25 de agosto de 2021</p>
                  <Heart />
                </span>
                <span className="">
                  <h3 className="title">React</h3>
                  <p className="description">
                    O React é uma biblioteca JavaScript de código aberto com
                    foco em criar interfaces de usuário em páginas web. É
                    mantido pelo Facebook, Instagram, outras empresas e uma
                    comunidade de desenvolvedores individuais. É utilizado nos
                    sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek,
                    HelloSign, Walmart e outros.
                  </p>
                </span>
              </article>
            </div>
          </section>
          <section className="testimonial" id="testimonials">
            <div className="row" ref="box4">
              <article className="container-post">
                <span className="flex justify-between">
                  <p className="date">25 de agosto de 2021</p>
                  <Heart />
                </span>
                <span className="">
                  <h3 className="title">TypeScript</h3>
                  <p className="description">
                    TypeScript é uma linguagem de programação de código aberto
                    desenvolvida pela Microsoft. É um superconjunto sintático
                    estrito de JavaScript e adiciona tipagem estática opcional à
                    linguagem.
                  </p>
                </span>
              </article>
            </div>
          </section>
          <section className="testimonial" id="testimonials">
            <div className="row" ref="box5">
              <article className="container-post">
                <span className="flex justify-between">
                  <p className="date">25 de agosto de 2021</p>
                  <Heart />
                </span>
                <span className="">
                  <h3 className="title">CoffeeScript</h3>
                  <p className="description">
                    CoffeeScript é uma linguagem de programação que transcompila
                    para JavaScript. A linguagem adiciona elementos de sintaxe
                    inspirados no Ruby, Python e Haskell para aprimorar a
                    leitura e concisão do JavaScript, adicionando
                    características sofisticadas como compreensão de lista e
                    Casamento de padrões.
                  </p>
                </span>
              </article>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default RevealMe;
