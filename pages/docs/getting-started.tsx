import React, { useEffect } from "react";
import Prism from "prismjs";

import SideNav from "../../components/SideNav";

const GettingStarted = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <main className="container docs">
      <SideNav />
      <section className="getting-started">
        <h1 className="h1 docs__title">Getting Started</h1>
        <p>Welcome to the Typeinit documentation!</p>
        <h2 className="h3 docs__subtitle">Installation</h2>
        <p className="mb-10">
          You can get the code through one of the following means:
        </p>
        <ul>
          <li>
            <span className="mb-10">
              via CDN - include the source on your page
            </span>
            <div className="getting-started__first__li">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<script src="https://cdn.jsdelivr.net/npm/typeinit@1.2.7/dist/index.umd.js"></script>`}
                </code>
              </pre>
            </div>
          </li>
          <li className="mb-10">
            via NPM - install with <code>npm install typeinit</code>
          </li>

          <li className="mb-10">
            Clone the Repo - the source files are in the <code>/dist</code>{" "}
            directory
          </li>
        </ul>

        <h2 className="h3 docs__subtitle">Setup</h2>

        <ul>
          <li>
            <span className="h4 docs__ultra__subtitle rm-margin-top">
              Create a Target Element
            </span>
            <p>
              You'll be able to target an element by tag name, class, ID, or any
              other CSS selector. For instance, if you want to target an element
              with a <code>.element</code> class attached to it:
            </p>
            <div className="getting-started__first__li">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<div class="element"></div>`}
                </code>
              </pre>
            </div>
            <p>
              If you want a fallback for users without Javascript enabled, or
              for SEO reasons, you can put the text directly into this element.
            </p>
          </li>
          <li>
            <span className="h4 docs__ultra__subtitle">
              Load the script on your page
            </span>

            <p className="medium">javascript (ES6+)</p>
            <p className="medium">After NPM installation</p>
            <div className="getting-started__first__li">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-javascript">
                <code className="language-javascript">
                 {`import Typeinit from "typeinit";
                 
new Typeinit(".element")
    .type("Hello world!")
    .play();`}
                </code>
              </pre>
            </div>

            <p className="medium">javascript (ES5+)</p>
            <p className="medium">With CDN</p>
            <div className="getting-started__first__li">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Typeinit</title>
  </head>
  <body>
    <!-- The target element -->
    <div class="element"></div>

    <!-- Typeinit CDN -->
    <script src="https://cdn.jsdelivr.net/npm/typeinit@1.2.7/dist/index.umd.js"></script>
    <script>
      let typeinit = new Typeinit(".element");
      typeinit
        .type("Hello world!")
        .play();
    </script>
  </body>
</html>`}
                </code>
              </pre>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default GettingStarted;
