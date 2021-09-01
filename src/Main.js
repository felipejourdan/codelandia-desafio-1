import React from 'react';

const Main = () => {
  function handleClick(e) {
    e.target.classList.toggle('active');
  }

  return (
    <>
      <main>
        <section>
          <article>
            <div className="articleTop">
              <span>02 de jul, 2021</span>
              <div className="heart" onClick={handleClick}></div>
            </div>
            <div>
              <h3>Agora é oficial: o Windows 11 está vindo</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
              </p>
            </div>
          </article>
          <article>
            <div className="articleTop">
              <span>01 de jul, 2021</span>
              <div className="heart" onClick={handleClick}></div>
            </div>
            <div>
              <h3>Tim Berners-Lee vai leiloar código-fonte da web</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                Praesent et auctor justo. Vestibulum nisl orci, lacinia
                venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl
                dui, cursus a lectus et, interdum ullamcorper libero.
              </p>
            </div>
          </article>
          <article>
            <div className="articleTop">
              <span>30 de jun, 2021</span>
              <div className="heart" onClick={handleClick}></div>
            </div>
            <div>
              <h3>Tem Firefox novo no pedaço e você vai querer migrar</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum auctor est.
              </p>
            </div>
          </article>
          <article>
            <div className="articleTop">
              <span>30 de jun, 2021</span>
              <div className="heart" onClick={handleClick}></div>
            </div>
            <div>
              <h3>John McAfee, criador do antivírus McAfee, morre</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis
                lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
                Praesent et auctor justo. Vestibulum nisl orci, lacinia
                venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl
                dui, cursus a lectus et, interdum ullamcorper libero.
              </p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Main;
