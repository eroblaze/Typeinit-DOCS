import { MouseEvent, useEffect, useRef } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Prism from "prismjs";
import gsap from "gsap";
import { Fade } from "react-awesome-reveal";

import Typeinit from "typeinit";

const colors = [
  "red",
  "purple",
  "yellow",
  "brown",
  "pink",
  "blue",
  "green",
  "magenta",
  "orange",
  "lime",
];

const Body = () => {
  const firstDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const secondDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const thirdDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const gsapTl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const getRandomColor = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  };

  const handleRunBtn = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    whichToDisplay: number
  ) => {
    const target = e.target as HTMLButtonElement;
    const { textContent } = target;

    if (textContent === "Run") {
      if (whichToDisplay === 1) {
        const theClass = "display__box__result__one";
        const myDiv = document.createElement("div");
        myDiv.classList.add("display__box__result", theClass);

        document.querySelector(".display__container__one")?.appendChild(myDiv);

        gsap.to(`.${theClass}`, {
          duration: 0.5,
          y: 0,
          opacity: 1,
        });
        target.textContent = "Restart";

        firstDisplayTypeinitRef.current = new Typeinit(`.${theClass}`, {
          startDelay: 300,
          caretColor: "var(--primary)",
        }).type("Hello World!");
        firstDisplayTypeinitRef.current.play();
      } else if (whichToDisplay === 2) {
        const theClass = "display__box__result__two";

        const myDiv = document.createElement("div");
        myDiv.classList.add("display__box__result", theClass);

        const firstDiv = document.createElement("div");

        myDiv.appendChild(firstDiv);

        document.querySelector(".display__container__two")?.appendChild(myDiv);

        gsap.to(`.${theClass}`, {
          duration: 0.5,
          y: 0,
          opacity: 1,
        });
        target.textContent = "Restart";

        secondDisplayTypeinitRef.current = new Typeinit(`.${theClass}>div`, {
          startDelay: 300,
          caretColor: "var(--secondary)",

          onCharTyped: () => {
            gsap.set(`.${theClass}`, {
              // duration: 1,
              borderColor: getRandomColor,
            });
          },
        }).type("I can work with GSAP 💪");
        secondDisplayTypeinitRef.current.play();
      } else if (whichToDisplay === 3) {
        const theClass = "display__box__result__three";
        const myDiv = document.createElement("div");
        myDiv.classList.add("display__box__result", theClass);
        myDiv.textContent = "Foo Bar Baz";

        document
          .querySelector(".display__container__three")
          ?.appendChild(myDiv);

        gsap.to(`.${theClass}`, {
          duration: 0.5,
          y: 0,
          opacity: 1,
        });
        target.textContent = "Restart";

        thirdDisplayTypeinitRef.current = new Typeinit(`.${theClass}`, {
          startDelay: 300,
          caretColor: "var(--primary)",
        });
        thirdDisplayTypeinitRef.current.play();
      }
    } else if (textContent === "Restart") {
      if (whichToDisplay === 1) {
        if (firstDisplayTypeinitRef.current)
          firstDisplayTypeinitRef.current.restart();
      } else if (whichToDisplay === 2) {
        if (secondDisplayTypeinitRef.current)
          secondDisplayTypeinitRef.current.restart();
      } else if (whichToDisplay === 3) {
        if (thirdDisplayTypeinitRef.current) {
          thirdDisplayTypeinitRef.current.restart();
        }
      }
    }
  };

  return (
    <div className="body">
      <main className="container">
        <Head>
          <title>Typeinit</title>
        </Head>

        <section className="hero">
          <p className="h1 hero__background" aria-hidden="true">
            typeinit
          </p>
          <h1 className="h2 hero__text">
            An Intuitive <br />
            Javascript <br className="br-on-md" />
            Typing <br />
            Animation Library.
          </h1>
          <div className="hero__btns">
            <Link href="/docs/getting-started">
              <button className="btn btn--primary">view docs</button>
            </Link>
            <Link href="https://github.com/eroblaze/typeinit" target="_blank">
              <button className="btn btn--gradient">github</button>
            </Link>
          </div>
        </section>

        <section className="main__section">
          <section className="cards" aria-details="#why-typeinit">
            <p className="sr-only" id="why-typeinit">
              Why Typeinit?
            </p>

            <Fade direction="up" triggerOnce={true}>
              <div className="cards__card">
                <div className="cards__title">
                  <Image
                    src="/icons/easy-to-use.svg"
                    width={23}
                    height={23}
                    alt="Easy to use"
                  />
                  <p className="h4">Easy to use</p>
                </div>
                <p className="cards__text">
                  Offers an intuitive and chainable API for ease of use.
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <div className="cards__card">
                <div className="cards__title">
                  <Image
                    src="/icons/flexible.svg"
                    width={23}
                    height={23}
                    alt="Flexible"
                  />
                  <p className="h4">Flexible</p>
                </div>
                <p className="cards__text">
                  Customize and adjust the default settings as you wish.
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce={true}>
              <div className="cards__card">
                <div className="cards__title">
                  <Image
                    src="/icons/seo-friendly.svg"
                    width={23}
                    height={23}
                    alt="SEO-friendly"
                  />
                  <p className="h4">SEO-friendly</p>
                </div>
                <p className="cards__text">
                  Define strings to type directly in the HTML.
                </p>
              </div>
            </Fade>
          </section>

          <section className="display" aria-details="#display">
            <p className="sr-only" id="display">
              Most popular features of Typeinit
            </p>

            <div className="display__div">
              <Fade direction="left" triggerOnce={true}>
                <p className="h3 display__text">
                  Create an animation <br />
                  with just three lines of <br />
                  code
                </p>
              </Fade>

              <Fade direction="right" triggerOnce={true}>
                <div className="display__box">
                  <div className="display__container__one">
                    {/* prettier-ignore */}
                    <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit(".element")
  .type("Hello World!")
  .play()`}
                </code>
              </pre>
                  </div>

                  <button
                    className="btn btn--secondary"
                    onClick={(e) => handleRunBtn(e, 1)}
                  >
                    Run
                  </button>
                </div>
              </Fade>
            </div>

            <div className="display__div">
              <Fade direction="right" triggerOnce={true}>
                <p className="h3 display__text">
                  Combine with your <br />
                  favourite JavaScript <br />
                  animation library
                </p>
              </Fade>

              <Fade direction="left" triggerOnce={true}>
                <div className="display__box">
                  <div className="display__container__two">
                    {/* prettier-ignore */}
                    <pre className="scrollbar display__box__rect language-javascript display__box__rect--secondary">
                <code className="language-javascript">
                 {`new Typeinit(".element", {
      onCharTyped: () => {
          gsap.set(".parentEl", {borderColor: getRandomColor})
      }})
  .type("I can work with GSAP 💪")
  .play()`}
                </code>
              </pre>
                  </div>

                  <button
                    className="btn btn--secondary"
                    onClick={(e) => handleRunBtn(e, 2)}
                  >
                    Run
                  </button>
                </div>
              </Fade>
            </div>

            <div className="display__div">
              <Fade direction="left" triggerOnce={true}>
                <p className="h3 display__text">
                  Define the strings to <br />
                  type directly in your <br />
                  html
                </p>
              </Fade>
              <Fade direction="right" triggerOnce={true}>
                <div className="display__box">
                  <div className="display__container__three">
                    {/* prettier-ignore */}
                    <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<!-- html -->
<div id="element">Foo Bar Baz</div>

<!-- js -->
<script>
  new Typeinit("#element")
    .play()
</script>`}
                </code>
              </pre>
                  </div>

                  <button
                    className="btn btn--secondary"
                    onClick={(e) => handleRunBtn(e, 3)}
                  >
                    Run
                  </button>
                </div>
              </Fade>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Body;
