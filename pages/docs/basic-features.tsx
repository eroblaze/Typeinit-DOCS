import React, { useEffect } from "react";

import Prism from "prismjs";

import DocsLayout from "../../components/DocsLayout";

const BasicFeatures = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <DocsLayout title="Basic Features">
      <section className="basic-features">
        <h1 className="h1 docs__title">Basic Features</h1>
        <h2 className="h3 docs__subtitle" id="configuration-basics">
          Configuration Basics
        </h2>
        <div className="d-grid">
          {/* prettier-ignore */}
          <pre className="scrollbar display__box__rect language-javascript rm-margin-top">
                <code className="language-javascript">
                 {`new Typeinit(selector: string | HTMLElement, optionsObj?: OptionsInterface | undefined): Typeinit`}
                </code>
              </pre>
        </div>
        <p className="mb-10">The Typeinit constructor accepts two arguments:</p>
        <ul>
          <li>
            <code>selector</code>
            <span>
              : The target element where text will be typed. This can be a DOM node or a CSS
              selector (class, ID, etc.). For example, all of the examples below will work.
            </span>

            <div className="d-grid">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit('#element', {...});
new Typeinit('.element', {...});
new Typeinit(document.querySelector('h2'), {...});
new Typeinit('[data-attribute="element"]', {...});`}
                </code>
              </pre>
            </div>

            <p className="warning">
              <span className="warning__title">Note</span>
              If a selector that applies to several elements on the page is used, only the first
              element found will be targeted
            </p>
          </li>
          <li>
            <code>optionsObj</code>
            <span>: An object that customizes the behavior of the instance.</span>
          </li>
        </ul>

        <h2 className="h3 docs__subtitle" id="configuration-options">
          Configuration Options
        </h2>
        <p>
          You can customize an instance by passing an object with any of the following properties as
          the second argument to the Typeinit's constructor
        </p>
        <div className="d-grid">
          {/* prettier-ignore */}
          <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit(".element", {
  // optionsObj go here!
}).play();`}
                </code>
              </pre>
        </div>

        <div className="overflow-auto">
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
                  <code>typingSpeed: 100</code>
                </td>
                <td>
                  <code>number</code> Typing speed in milliseconds.
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <code>deletingSpeed: 40</code>
                </td>
                <td>
                  <code>number</code> Deleting speed in milliseconds.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>startDelay: 0</code>
                </td>
                <td>
                  <code>number</code> Time before typing starts in milliseconds.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>deleteDelay: 300</code>
                </td>
                <td>
                  <code>number</code> Time before deleting in milliseconds.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>pause: 1000</code>
                </td>
                <td>
                  <code>number</code> The amount of time in milliseconds to pause.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>repeat: 0</code>
                </td>
                <td>
                  <code>number|"infinite"</code> The number of times the animation should be
                  repeated.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>repeatEase: false</code>
                </td>
                <td>
                  <code>boolean</code> If set to <code>true</code>, applies an effect before
                  repeating.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>repeatSpeed: 0</code>
                </td>
                <td>
                  <code>number</code> The speed in milliseconds it takes to delete all characters in
                  the element before repeating.
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <code>repeatDelay: 750</code>
                </td>
                <td>
                  <code>number</code> Time before each repeat starts in milliseconds.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>caret: true</code>
                </td>
                <td>
                  <code>boolean</code> Determines if a caret should be shown.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>caretColor: "currentcolor"</code>
                </td>
                <td>
                  <code>string</code> Styles the color of the caret.
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <code>caretWidth: 1</code>
                </td>
                <td>
                  <code>number</code> Styles the width of the caret. It is measured in{" "}
                  <code>px</code> unit.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>waitUntilVisible: false</code>
                </td>
                <td>
                  <code>boolean</code> If set to <code>true</code>, the animation will start only
                  when the element is within the viewport.
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <code>visibleOptions: "center bottom"</code>
                </td>
                <td>
                  <code>string</code> Configures when the element becomes visible. Possible values
                  are: <code>"top top"</code> | <code>"top center"</code> |{" "}
                  <code>"top bottom"</code> | <code>"center top"</code> |{" "}
                  <code>"center center"</code> | <code>"center bottom"</code> |{" "}
                  <code>"bottom top"</code>| <code>"bottom center"</code> |{" "}
                  <code>"bottom bottom"</code>. The first value is relative to the element while the
                  second is relative to the viewport. By default, the element becomes visible when
                  the center of the element touches the bottom of the viewport.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="h3 docs__subtitle" id="hard-coded-in-html">
          Hard-Coded in HTML
        </h2>
        <p>
          You can hard-code the text you wish to animate in your target element by including it in
          the element. This is extremely useful for those looking to optimize SEO.
        </p>
        <div className="d-grid">
          {/* prettier-ignore */}
          <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<div class="element">This text will be typed on page load.</div>`}
                </code>
              </pre>
        </div>

        <p className="warning">
          <span className="warning__title">Note</span>
          This approach may cause a flash of text before the instance is started. This is because
          the text will already be rendered on the page before Typeinit has a chance to parse it for
          the animation.
        </p>

        <h2 className="h3 docs__subtitle" id="callback-methods">
          Callback Methods
        </h2>
        <p>
          There are methods in the optionsObj which will fire at particular points in the execution
          of the animation.
        </p>

        <div className="d-grid">
          {/* prettier-ignore */}
          <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`new Typeinit(".element", {
  /**
   * Before it begins typing
   */
  onStart: () => {},

  /**
   * All typing is complete
   * NOTE: If "reset" is set to "infinite", this will never fire.
   */
  onEnd: () => {},

  /**
   * After reset
   */
  onReset: () => {},

  /**
   * After each character is typed
   */
  onCharTyped: () => {},

  /**
   * After each character is deleted
   */
  onCharDeleted: () => {},
});`}
                </code>
              </pre>
        </div>
      </section>
    </DocsLayout>
  );
};

export default BasicFeatures;
