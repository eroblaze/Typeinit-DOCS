import React, { useEffect } from "react";
import Link from "next/link";

import Prism from "prismjs";

import DocsLayout from "../../components/DocsLayout";
import { LINKS } from "../../components/SideNav";

const GettingStarted = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <DocsLayout title="Getting Started">
      <section className="getting-started">
        <h1 className="h1 docs__title">Getting Started</h1>
        <p>Welcome to the Typeinit documentation!</p>
        <h2 className="h3 docs__subtitle">Installation</h2>
        <p className="mb-10">You can get the code through one of the following means:</p>
        <ul>
          <li>
            <span className="mb-10">
              via{" "}
              <Link
                href="https://unpkg.com/typeinit"
                target="_blank"
                className="cl-primary"
                style={{ textDecoration: "underline" }}
              >
                CDN
              </Link>{" "}
              - include the source on your page.
            </span>
            <div className="d-grid">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<script src="https://cdn.jsdelivr.net/npm/typeinit@1.3.2/dist/index.umd.js"></script>`}
                </code>
              </pre>
            </div>
          </li>
          <li className="mb-10">
            via{" "}
            <Link
              href="https://npmjs.com/package/typeinit"
              target="_blank"
              className="cl-primary"
              style={{ textDecoration: "underline" }}
            >
              NPM / YARN
            </Link>{" "}
            - install with <code>npm install typeinit</code> or <code>yarn add typeinit</code>.
          </li>
        </ul>

        <h2 className="h3 docs__subtitle">Setup</h2>

        <ul>
          <li>
            <span className="h4 docs__ultra__subtitle rm-margin-top">Create a Target Element</span>
            <p>
              You can target an element by tag name, class, ID, or any other CSS selector. For
              instance, if you want to target an element with a <code>.element</code> class attached
              to it:
            </p>
            <div className="d-grid">
              {/* prettier-ignore */}
              <pre className="scrollbar display__box__rect language-html">
                <code className="language-html">
                 {`<div class="element"></div>`}
                </code>
              </pre>
            </div>
            <p>
              If you want a fallback for users without Javascript enabled, or for SEO reasons, you
              can put the text directly into this element, (
              <Link
                href={`/docs/${LINKS.basicFeatures}#${LINKS.hardCodedInHtml}`}
                className="cl-primary"
                style={{ textDecoration: "underline" }}
              >
                More info
              </Link>
              ).
            </p>
          </li>
          <li
            className="h4 docs__ultra__subtitle"
            style={{ display: "list-item" }}
            aria-details="#load-script-content"
          >
            Load the script on your page
          </li>
        </ul>
        <div id="load-script-content">
          <p className="medium">javascript (ES6+)</p>
          <p className="medium">After NPM installation</p>
          <div className="d-grid">
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
          <div className="d-grid">
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
    <script src="https://cdn.jsdelivr.net/npm/typeinit@1.3.2/dist/index.umd.js"></script>
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
        </div>
      </section>
    </DocsLayout>
  );
};

export default GettingStarted;
