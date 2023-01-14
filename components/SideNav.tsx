import React, { useRef } from "react";

import Link from "next/link";
import { useRouter } from "next/router";

export const LINKS = {
  playground: "playground",
  gettingStarted: "getting-started",
  basicFeatures: "basic-features",
  configurationBasics: "configuration-basics",
  configurationOptions: "configuration-options",
  hardCodedInHtml: "hard-coded-in-html",
  callbackMethods: "callback-methods",
  instanceMethods: "instance-methods",
  type: "type",
  delete: "delete",
  deleteAll: "deleteAll",
  pause: "pause",
  newLine: "newLine",
  reset: "reset",
  restart: "restart",
  play: "play",
};

const SideNav = () => {
  const router = useRouter();
  const { asPath, pathname } = router;

  let pathFragment = asPath.substring(pathname.length);
  pathFragment = pathFragment.length >= 1 ? pathFragment.slice(1) : "";

  const stickySidenavRef = useRef<HTMLElement>(null);
  const menuArrowRef: React.RefObject<SVGSVGElement> =
    useRef<SVGSVGElement>(null);

  const handleClick = () => {
    if (stickySidenavRef.current) {
      stickySidenavRef.current.classList.toggle("open");
    }
    if (menuArrowRef.current) {
      menuArrowRef.current.classList.toggle("rotate-arrow");
    }
  };

  return (
    <aside className="sticky__sidenav" ref={stickySidenavRef}>
      <div className="clickable sidenav__mobile__menu" onClick={handleClick}>
        <svg
          ref={menuArrowRef}
          width="12"
          height="8"
          aria-label="summary marker"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00005 7.475C5.86672 7.475 5.73772 7.45 5.61305 7.4C5.48772 7.35 5.38338 7.28334 5.30005 7.2L0.700048 2.6C0.516715 2.41667 0.425049 2.18334 0.425049 1.9C0.425049 1.61667 0.516715 1.38334 0.700048 1.2C0.883382 1.01667 1.11672 0.925003 1.40005 0.925003C1.68338 0.925003 1.91672 1.01667 2.10005 1.2L6.00005 5.1L9.90005 1.2C10.0834 1.01667 10.3167 0.925003 10.6 0.925003C10.8834 0.925003 11.1167 1.01667 11.3 1.2C11.4834 1.38334 11.575 1.61667 11.575 1.9C11.575 2.18334 11.4834 2.41667 11.3 2.6L6.70005 7.2C6.60005 7.3 6.49172 7.37067 6.37505 7.412C6.25838 7.454 6.13338 7.475 6.00005 7.475V7.475Z"
            fill="none"
          />
        </svg>
        <span>Menu</span>{" "}
      </div>

      <div className="scrollbar sidenav">
        <h4 className="h4 docs__title">Documentation</h4>

        <div className="sidenav__menu">
          <ul>
            <Link
              href={`/docs/${LINKS.gettingStarted}`}
              className={
                pathname === `/docs/${LINKS.gettingStarted}`
                  ? "active-sidebar-link"
                  : ""
              }
            >
              <li>
                <span className="sidenav__space">Getting Started</span>
              </li>
            </Link>
          </ul>
          <details open>
            <summary
              className={
                pathname === `/docs/${LINKS.basicFeatures}`
                  ? "clickable active-sidebar-link"
                  : "clickable"
              }
            >
              <svg
                width="12"
                height="8"
                aria-label="summary marker"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00005 7.475C5.86672 7.475 5.73772 7.45 5.61305 7.4C5.48772 7.35 5.38338 7.28334 5.30005 7.2L0.700048 2.6C0.516715 2.41667 0.425049 2.18334 0.425049 1.9C0.425049 1.61667 0.516715 1.38334 0.700048 1.2C0.883382 1.01667 1.11672 0.925003 1.40005 0.925003C1.68338 0.925003 1.91672 1.01667 2.10005 1.2L6.00005 5.1L9.90005 1.2C10.0834 1.01667 10.3167 0.925003 10.6 0.925003C10.8834 0.925003 11.1167 1.01667 11.3 1.2C11.4834 1.38334 11.575 1.61667 11.575 1.9C11.575 2.18334 11.4834 2.41667 11.3 2.6L6.70005 7.2C6.60005 7.3 6.49172 7.37067 6.37505 7.412C6.25838 7.454 6.13338 7.475 6.00005 7.475V7.475Z"
                  fill="none"
                />
              </svg>

              <span className="sidenav__space">Basic Features</span>
            </summary>
            <nav>
              <ul>
                <Link
                  href={`/docs/${LINKS.basicFeatures}#${LINKS.configurationBasics}`}
                  className={
                    pathFragment === `${LINKS.configurationBasics}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>Configuration basics</li>
                </Link>

                <Link
                  href={`/docs/${LINKS.basicFeatures}#${LINKS.configurationOptions}`}
                  className={
                    pathFragment === `${LINKS.configurationOptions}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>Configuration options</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.basicFeatures}#${LINKS.hardCodedInHtml}`}
                  className={
                    pathFragment === `${LINKS.hardCodedInHtml}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>Hard-coded in HTML</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.basicFeatures}#${LINKS.callbackMethods}`}
                  className={
                    pathFragment === `${LINKS.callbackMethods}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>Callback methods</li>
                </Link>
              </ul>
            </nav>
          </details>

          <details open>
            <summary
              className={
                pathname === `/docs/${LINKS.instanceMethods}`
                  ? "clickable active-sidebar-link"
                  : "clickable"
              }
            >
              <svg
                width="12"
                height="8"
                aria-label="summary marker"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00005 7.475C5.86672 7.475 5.73772 7.45 5.61305 7.4C5.48772 7.35 5.38338 7.28334 5.30005 7.2L0.700048 2.6C0.516715 2.41667 0.425049 2.18334 0.425049 1.9C0.425049 1.61667 0.516715 1.38334 0.700048 1.2C0.883382 1.01667 1.11672 0.925003 1.40005 0.925003C1.68338 0.925003 1.91672 1.01667 2.10005 1.2L6.00005 5.1L9.90005 1.2C10.0834 1.01667 10.3167 0.925003 10.6 0.925003C10.8834 0.925003 11.1167 1.01667 11.3 1.2C11.4834 1.38334 11.575 1.61667 11.575 1.9C11.575 2.18334 11.4834 2.41667 11.3 2.6L6.70005 7.2C6.60005 7.3 6.49172 7.37067 6.37505 7.412C6.25838 7.454 6.13338 7.475 6.00005 7.475V7.475Z"
                  fill="none"
                />
              </svg>

              <span className="sidenav__space">Instance Methods</span>
            </summary>
            <nav>
              <ul>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.type}`}
                  className={
                    pathFragment === `${LINKS.type}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.type()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.delete}`}
                  className={
                    pathFragment === `${LINKS.delete}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.delete()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.deleteAll}`}
                  className={
                    pathFragment === `${LINKS.deleteAll}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.deleteAll()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.pause}`}
                  className={
                    pathFragment === `${LINKS.pause}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.pause()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.newLine}`}
                  className={
                    pathFragment === `${LINKS.newLine}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.newLine()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.reset}`}
                  className={
                    pathFragment === `${LINKS.reset}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.reset()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.restart}`}
                  className={
                    pathFragment === `${LINKS.restart}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.restart()</li>
                </Link>
                <Link
                  href={`/docs/${LINKS.instanceMethods}#${LINKS.play}`}
                  className={
                    pathFragment === `${LINKS.play}`
                      ? "active-sidebar-link"
                      : ""
                  }
                >
                  <li>.play()</li>
                </Link>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
