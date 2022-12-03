import { useRef, useEffect } from "react";
import gsap from "gsap";

let clicked = false;

const Header = () => {
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuTlRef = useRef<gsap.core.Timeline>();

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
        menuTlRef.current?.timeScale(2).play();
        clicked = true;
        break;
      default:
        menuTlRef.current?.reverse();
        clicked = false;
    }
  };

  return (
    <>
      <header>
        <nav className="container header">
          <p className="header__logo" aria-label="Logo">
            typeinit<span></span>
          </p>
          <ul role="list" className="header__nav" id="header__nav">
            <li>
              <a href="javascript:;">Github</a>
            </li>
            <li>
              <a href="javascript:;">Docs</a>
            </li>
            <li>
              <a href="javascript:;">Playground</a>
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
