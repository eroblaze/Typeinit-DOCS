import React, { useEffect } from "react";

import Prism from "prismjs";

import DocsLayout from "../../components/DocsLayout";

const InstanceMethods = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <DocsLayout title="Instance Methods">
      <section className="instance-methods">
        <h1 className="h1 docs__title">Instance Methods</h1>

        <div className="instance-methods-introduction">
          <p>
            These methods are the <i>bread and butter</i> of the animation. They all return the
            instance with the exception of <code>.reset()</code>, <code>.restart()</code> and{" "}
            <code>.play()</code> which kicks off the typing animation
          </p>
          <p className="warning rm-margin-bottom mt-24">
            <span className="warning__title">Note</span>
            These methods must be called before the <code>.play()</code> method is invoked.
          </p>
          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`// This will work
new Typeinit(".element", {
    repeat: 2
})
    .type("typing animation like ...")
    .pause(2000)
    .newLine(3)
    .type("no other")
    .play();
    
// This will not work
new Typeinit(".element", {
    typingSpeed: 40
})
    .play()
    .type("Oops...")
    .pause(2000)
    .newLine(3)
    .type("error");`}
                 
                </code>
              </pre>
          </div>
        </div>

        <div className="instance-method-type">
          <h2 className="h3 docs__subtitle" id="type">
            .type()
          </h2>
          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.type(text: string): Typeinit`}
                </code>
              </pre>
          </div>
          <p>Types the string that's passed.</p>
        </div>

        <div className="instance-method-delete">
          <h2 className="h3 docs__subtitle" id="delete">
            .delete()
          </h2>
          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.delete(numToDel?: number | undefined, deleteOptions?: DeleteOptionsInterface | undefined): Typeinit`}
                </code>
              </pre>
          </div>
          <p>
            Deletes <code>numToDel</code> characters or words.
          </p>
          <p>It accepts two optional arguments:</p>
          <ul className="mt-10">
            <li className="mb-10">
              <code>numToDel</code>
              <span>: The number of characters or words to delete. Defaults to 1.</span>
            </li>
            <li className="mb-10">
              <code>deleteOptions</code>
              <span>: An object containing quick options on how the deleting should go about.</span>

              <div className="overflow-auto mt-24">
                <table>
                  <thead>
                    <tr>
                      <th>Option & Default value</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <code>delay: deleteDelay</code>
                      </td>
                      <td>
                        <code>number</code> The number (in milliseconds) to wait before deleting.
                        Defaults to <code>deleteDelay</code> in <code>optionsObj</code> passed to
                        Typeinit's constructor.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {" "}
                        <code>mode: "char"</code>
                      </td>
                      <td>
                        <code>"char" | "c" | "word" | "w"</code> Sets the mode by which Typeinit
                        should delete.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <code>speed: deletingSpeed</code>
                      </td>
                      <td>
                        <code>number</code> Sets the speed of the deletion. Defaults to{" "}
                        <code>deletingSpeed</code> in <code>optionsObj</code> passed to Typeinit's
                        constructor.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit(".element")
    .type("Hello World!")
    .delete(2, {
        delay: ...
        mode: ...
        speed: ...
    })
    .play()`}
                </code>
              </pre>
          </div>
        </div>

        <div className="instance-method-deleteAll">
          <h2 className="h3 docs__subtitle" id="deleteAll">
            .deleteAll()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.deleteAll(ease?: boolean | undefined, deleteAllOptions?: DeleteAllOptionsInterface | undefined): Typeinit`}
                </code>
              </pre>
          </div>

          <p>Deletes all the characters in the target element.</p>

          <p>It accepts two optional arguments:</p>
          <ul className="mt-10">
            <li className="mb-10">
              <code>ease</code>
              <span>
                : If set to <code>true</code>, an effect will be applied while deleting. Defaults to{" "}
                <code>false</code>.
              </span>
            </li>
            <li className="mb-10">
              <code>deleteAllOptions</code>
              <span>: An object containing quick options on how the deleting should go about.</span>

              <div className="overflow-auto mt-24">
                <table>
                  <thead>
                    <tr>
                      <th>Option & Default value</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <code>delay: deleteDelay</code>
                      </td>
                      <td>
                        <code>number</code> The number (in milliseconds) to wait before deleting.
                        Defaults to <code>deleteDelay</code> in <code>optionsObj</code> passed to
                        Typeinit's constructor.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        <code>speed: deletingSpeed</code>
                      </td>
                      <td>
                        <code>number</code> Sets the speed of the deletion. Defaults to{" "}
                        <code>deletingSpeed</code> in <code>optionsObj</code> passed to Typeinit's
                        constructor.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit(".element")
    .type("Hello World!")
    .deleteAll(true, {
        delay: ...
        speed: ...
    })
    .play()`}
                </code>
              </pre>
          </div>
        </div>

        <div className="instance-method-pause">
          <h2 className="h3 docs__subtitle" id="pause">
            .pause()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.pause(ms?: number | undefined): Typeinit`}
                </code>
              </pre>
          </div>

          <p>
            Pauses the animation for the <code>ms</code>(in milliseconds) passed. Defaults to{" "}
            <code>pause</code> in <code>optionsObj</code> passed to Typeinit's constructor.
          </p>
        </div>

        <div className="instance-method-newLine">
          <h2 className="h3 docs__subtitle" id="newLine">
            .newLine()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.newLine(numOfLines?: number | undefined): Typeinit`}
                </code>
              </pre>
          </div>

          <p>Adds a new line to the element.</p>
        </div>

        <div className="instance-method-reset">
          <h2 className="h3 docs__subtitle" id="reset">
            .reset()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.reset(): void`}
                </code>
              </pre>
          </div>

          <p>Resets the Target element and destroys the Typeinit instance.</p>
        </div>

        <div className="instance-method-restart">
          <h2 className="h3 docs__subtitle" id="restart">
            .restart()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.restart(): void`}
                </code>
              </pre>
          </div>

          <p>Restarts the typing animation.</p>
        </div>

        <div className="instance-method-play">
          <h2 className="h3 docs__subtitle" id="play">
            .play()
          </h2>

          <div className="d-grid">
            {/* prettier-ignore */}
            <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`.play(): void`}
                </code>
              </pre>
          </div>

          <p>Kicks off the animation.</p>
        </div>
      </section>
    </DocsLayout>
  );
};

export default InstanceMethods;
