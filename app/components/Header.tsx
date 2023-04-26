"use client";

import gsap from "gsap";
import { MouseEvent, useEffect } from "react";
import styled from "styled-components";
import { useScroll } from "../hooks/useScroll";
import { theme } from "../styles/globalStyle";

/** Nav links on the top left of the website. */
export const Header = () => {
  const positionY = useScroll();

  function handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const element = document.querySelector(`#${target.dataset.id}`);

    if (element) {
      window.scrollTo(0, element.getBoundingClientRect().top + positionY);
    }
  }

  useEffect(() => {
    const handleComplete = () => {
      document.body.style.overflow = "unset";
    };
    const tl = gsap.timeline({ onComplete: handleComplete });

    tl.to(".navbar-list-item", {
      delay: 6.5,
      duration: 0.8,
      ease: "power3.out",
      opacity: 1,
      stagger: { each: 0.4 }
    });
  }, []);

  return (
    <HeaderContainer>
      <Navbar>
        <LinksList>
          <LinksItem onClick={handleClick} data-id="about">
            About
          </LinksItem>
          <LinksItem onClick={handleClick} data-id="projects">
            Projects
          </LinksItem>
          <LinksItem onClick={handleClick} data-id="contact">
            Contact
          </LinksItem>
          <LinksItem>
            <a
              href="https://github.com/IbnDaanis"
              target="blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </LinksItem>
        </LinksList>
      </Navbar>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 1%;
  left: 1%;
  z-index: 99;

  @media (max-width: 600px) {
    top: 0px;
    left: 0px;
  }
`;

const Navbar = styled.nav`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: 0.4s ease-in-out;

  @media (hover: hover) {
    @media (max-width: 1480px) {
      &:hover {
        background: ${theme.$darkBlack};
        opacity: 0.9;
      }
    }
  }

  @media (max-width: 600px) {
    padding: 0.3rem;
  }
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const LinksItem = styled.li`
  margin-bottom: 4px;
  font-size: 1.4rem;
  color: ${theme.$lightPink};
  transition: 0.2s ease-in-out, opacity 0.8s ease-in-out;
  opacity: 0;

  @media (hover: hover) {
    &:hover {
      color: ${theme.$textWhite};
    }
  }

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
