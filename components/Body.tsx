import Image from "next/image";
import Typeinit from "typeinit";
import gsap from "gsap";

const Body = () => {
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
              <div className="display__box__rect"></div>
              <button className="btn btn--secondary">Run</button>
            </div>
          </div>
          <div className="display__div">
            <p className="h3 display__text">
              Combine with your <br />
              favourite JavaScript <br />
              animation library
            </p>
            <div className="display__box">
              <div className="display__box__rect display__box__rect--secondary"></div>
              <button className="btn btn--secondary">Run</button>
            </div>
          </div>
          <div className="display__div">
            <p className="h3 display__text">
              Define the strings to <br />
              type directly in your <br />
              html
            </p>
            <div className="display__box">
              <div className="display__box__rect"></div>
              <button className="btn btn--secondary">Run</button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Body;
