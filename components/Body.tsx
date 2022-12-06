import Image from "next/image";
import Prism from "prismjs";
import Typeinit from "typeinit";
import gsap from "gsap";
import { MouseEvent, useEffect, useRef } from "react";

const Body = () => {
  const firstDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const secondDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const thirdDisplayTypeinitRef = useRef<Typeinit | null>(null);
  const gsapTl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleRunBtn = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    whichToDisplay: number
  ) => {
    const { target } = e;
    const { textContent } = target;
    console.log("hey", textContent);

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
        target.textContent = "Reset";

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
        const secondDiv = document.createElement("div");

        myDiv.appendChild(firstDiv);
        myDiv.appendChild(secondDiv);

        document.querySelector(".display__container__two")?.appendChild(myDiv);

        gsap.to(`.${theClass}`, {
          duration: 0.5,
          y: 0,
          opacity: 1,
        });
        target.textContent = "Reset";

        secondDisplayTypeinitRef.current = new Typeinit(
          `.${theClass}>div:first-of-type`,
          {
            startDelay: 300,
            caretColor: "var(--secondary)",
            typingSpeed: 200,
            // onStart: () => {
            //   gsapTl.current = gsap
            //     .timeline({ repeat: -1, yoyo: true })
            //     .to(`.${theClass}>div:first-of-type`, { duration: 1, scale: 2 })
            //     .to(`.${theClass}>div:first-of-type`, {
            //       duration: 1,
            //       scale: 0.5,
            //     })
            //     .play();
            // },
            onCharTyped: () => {
              const howManySpans = document.querySelector(
                `.${theClass}>div:first-of-type`
              )?.childElementCount!;
              gsap.to(`.${theClass}>div:last-of-type`, {
                duration: 1,
                x: "+=10",
              });
              // gsap.to(
              //   `.${theClass}>div:first-of-type>span:nth-child(${
              //     howManySpans - 1
              //   })`,
              //   { duration: 1, color: "red" }
              // );
            },
          }
        ).type("Hello World!");
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
        target.textContent = "Reset";

        thirdDisplayTypeinitRef.current = new Typeinit(`.${theClass}`, {
          startDelay: 300,
          caretColor: "var(--primary)",
        });
        thirdDisplayTypeinitRef.current.play();
      }
    } else if (textContent === "Reset") {
      if (whichToDisplay === 1) {
        if (firstDisplayTypeinitRef.current)
          firstDisplayTypeinitRef.current.reset();
      } else if (whichToDisplay === 2) {
        if (secondDisplayTypeinitRef.current)
          secondDisplayTypeinitRef.current.reset();
      } else if (whichToDisplay === 3) {
        if (thirdDisplayTypeinitRef.current) {
          thirdDisplayTypeinitRef.current.reset();
        }
      }
    }
  };

  return (
    <main className="container body">
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
          <button className="btn btn--primary">view docs</button>
          <button className="btn btn--gradient">github</button>
        </div>
      </section>

      <section className="main__section">
        <section className="cards" aria-details="#why-typeinit">
          <p className="sr-only" id="why-typeinit">
            Why Typeinit?
          </p>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              iusto.
            </p>
          </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sed,
              quod repellat ad beatae eum possimus vero! Necessitatibus, cumque
              doloribus?
            </p>
          </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              iusto.
            </p>
          </div>
        </section>
        <section className="display" aria-details="#display">
          <p className="sr-only" id="display">
            Most popular features of Typeinit
          </p>

          <div className="display__div">
            <p className="h3 display__text">
              Create an animation <br />
              with just three lines of <br />
              code
            </p>
            <div className="display__box">
              <div className="display__container__one">
                {/* prettier-ignore */}
                <pre className="display__box__rect language-javascript">
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
          </div>
          <div className="display__div">
            <p className="h3 display__text">
              Combine with your <br />
              favourite JavaScript <br />
              animation library
            </p>
            <div className="display__box">
              <div className="display__container__two">
                {/* prettier-ignore */}
                <pre className="display__box__rect language-javascript display__box__rect--secondary">
                <code className="language-javascript">
                 {`new Typeinit(".element", {
      onStart: () => {
          gsap.to(".another", {duration: 2, x: 45})
      }})
  .type("Yayy")
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
          </div>
          <div className="display__div">
            <p className="h3 display__text">
              Define the strings to <br />
              type directly in your <br />
              html
            </p>
            <div className="display__box">
              <div className="display__container__three">
                {/* prettier-ignore */}
                <pre className="display__box__rect language-javascript">
                <code className="language-javascript">
                 {`// html
<div id="element">Foo Bar Baz</div>

// js
new Typeinit("#element")
  .play()`}
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
          </div>
        </section>
      </section>
    </main>
  );
};

export default Body;
