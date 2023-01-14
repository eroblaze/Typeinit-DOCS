import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/router";
import { LINKS } from "./SideNav";

let clicked = false;

const Header = () => {
  const router = useRouter();
  const { asPath } = router;

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuTlRef = useRef<gsap.core.Timeline>();
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    menuTlRef.current = gsap
      .timeline({ paused: true })
      .to(
        [
          hamburgerRef.current?.querySelector("span:first-child"),
          hamburgerRef.current?.querySelector("span:last-child"),
        ],
        {
          width: 10,
        }
      )
      .to(hamburgerRef.current, { rotate: 45 })
      .to(
        [
          hamburgerRef.current?.querySelector("span:first-child"),
          hamburgerRef.current?.querySelector("span:last-child"),
        ],
        {
          height: 7,
          width: 2,
        }
      );
  }, []);

  const handleMenuClicked = () => {
    switch (clicked) {
      case false:
        menuTlRef.current?.timeScale(8).play();
        if (menuRef.current) {
          menuRef.current.classList.remove("slide-out");
          menuRef.current.classList.add("slide-in");
        }
        clicked = true;
        break;
      default:
        menuTlRef.current?.reverse();
        if (menuRef.current) {
          menuRef.current.classList.remove("slide-in");
          menuRef.current.classList.add("slide-out");
        }
        clicked = false;
    }
  };

  return (
    <>
      <header>
        <nav className="container header">
          <p className="header__logo" aria-label="Logo">
            <Link href="/">
              typeinit<span></span>
            </Link>
          </p>
          <ul
            ref={menuRef}
            role="list"
            className="header__nav"
            id="header__nav"
          >
            <li>
              <Link href="https://github.com/eroblaze/typeinit" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link
                href={`/docs/${LINKS.gettingStarted}`}
                className={asPath.startsWith("/docs") ? "active-nav-link" : ""}
              >
                Docs
              </Link>
            </li>
            <li>
              <Link
                href={`/${LINKS.playground}`}
                className={
                  asPath.startsWith("/playground") ? "active-nav-link" : ""
                }
              >
                Playground
              </Link>
            </li>
          </ul>

          <button
            className="hamburger"
            aria-label="Menu toggle"
            aria-controls="header__nav"
            onClick={handleMenuClicked}
            ref={hamburgerRef}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
