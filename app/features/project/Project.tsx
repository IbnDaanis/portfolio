"use client";

import { Expo } from "gsap";
import { gsap, ScrollTrigger } from "gsap/all";
import hoverEffect from "hover-effect";
import { MutableRefObject, useEffect, useRef } from "react";
import styled from "styled-components";
import { GithubIcon } from "../../assets";
import { Show } from "../../components/Show";
import { IProject } from "../../data/projects";
import { theme } from "../../styles/globalStyle";
import { Arrow } from "../work/Arrow";
import { ProjectImage } from "./ProjectImage";

interface Props {
  project: IProject;
}

export const Project = ({
  project: {
    title,
    description1,
    description2,
    list1,
    list2,
    repo,
    website,
    image1,
    image2
  }
}: Props): JSX.Element => {
  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector(`.${title}`),
      intensity1: 0.1,
      intensity2: 0.1,
      angle2: Math.PI / 2,
      imagesRatio: 0.625,
      easing: "power3.out",
      speedIn: 0.8,
      speedOut: 0.8,
      image1,
      image2,
      displacementImage: `/images/distort-${
        Math.floor(Math.random() * 2) + 1
      }.jpg`
    });
  }, [image1, image2, title]);

  const imageCover1 = useRef() as MutableRefObject<HTMLDivElement>;
  const imageCover2 = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const titleAnimation = (element: HTMLDivElement) => {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%"
        }
      });
      tl.to(element, {
        duration: 1,
        y: "-100%",
        ease: Expo.easeInOut
      });
    };

    titleAnimation(imageCover1.current);
    titleAnimation(imageCover2.current);
  }, []);

  return (
    <Container className="project">
      <Details>
        <DetailsContainer>
          <DetailsTitle>{title}</DetailsTitle>
          <DetailsDescription>{description1}</DetailsDescription>
          <DetailsDescription>{description2}</DetailsDescription>
          <DetailsFeatures>Tech Stack and Features:</DetailsFeatures>
          <FeaturesContainer>
            <FeaturesList>
              {list1.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </FeaturesList>
            <FeaturesList>
              {list2.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </FeaturesList>
          </FeaturesContainer>
          <Github href={repo} rel="noreferrer" target="_blank">
            <span>Link to Repo:</span>
            <GithubIcon />
          </Github>
        </DetailsContainer>
        <Arrow />
      </Details>
      <ImageContainer className={`project-image-${title}`}>
        <ImageCanvas>
          <Show
            when={!!website}
            fallback={
              <CanvasContainer
                className={`canvas-container ${title}`}
              ></CanvasContainer>
            }
          >
            <ImageLink href={website} target="_blank" rel="noreferrer">
              <CanvasContainer
                className={`canvas-container ${title}`}
              ></CanvasContainer>
            </ImageLink>
          </Show>
        </ImageCanvas>
      </ImageContainer>
      <MobileImage>
        <ImageCover>
          <Show
            when={!!website}
            fallback={
              <ProjectImage
                image1={image1}
                image2={image2}
                imageCover1={imageCover1}
                imageCover2={imageCover2}
              />
            }
          >
            <ImageLink href={website} target="_blank" rel="noreferrer">
              <ProjectImage
                image1={image1}
                image2={image2}
                imageCover1={imageCover1}
                imageCover2={imageCover2}
              />
            </ImageLink>
          </Show>
        </ImageCover>
      </MobileImage>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  margin-bottom: 2rem;

  @media (max-width: 1200px) {
    border-bottom: 1px solid #252525;
    padding-bottom: 2rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
`;

const DetailsContainer = styled.div`
  width: 70%;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const DetailsTitle = styled.h3`
  font-size: clamp(2rem, calc(40px + 100 * (80vw - 220px) / 1600), 6rem);
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${theme.$lightPink};
`;

const DetailsDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 800px;
  width: 95%;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    line-height: 1.3;
  }
`;

const DetailsFeatures = styled.h4`
  font-size: 1.8rem;
  color: ${theme.$lightPink};
  font-weight: 300;
  margin-bottom: 0.75rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const FeaturesContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    justify-content: space-between;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;

const FeaturesList = styled.ul`
  margin-right: 4.5rem;

  &:nth-child(2) {
    margin-right: 0;
  }

  @media (max-width: 530px) {
    margin-right: 20px;
  }

  li {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${theme.$offWhite};

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }
  }
`;

const Github = styled.a`
  display: inline-flex;
  align-items: center;
  fill: $light-pink;

  span {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    font-weight: 300;
    color: $light-pink;
    transition: 0.4s ease-in-out 0.2s;

    @media (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  svg {
    transform: scale(1.1);
    transition: 0.4s ease-in-out;
  }

  &:hover {
    span {
      color: $text-white;
    }
    svg {
      transform: scale(1.3);
    }
  }
`;

const ImageContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: calc(((1240px * 0.7) / 16) * 10);

  @media (max-width: 1462px) {
    height: calc((85vw / 16) * 10 * 0.7);
  }

  @media (max-width: 1200px) {
    order: 2;
  }

  &-large {
    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 950px) {
    justify-content: center;
    height: calc((85vw / 16) * 10);
  }
`;

const ImageCanvas = styled.div`
  width: 70%;
  height: 100%;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const ImageLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MobileImage = styled.div`
  display: none;

  @media (max-width: 600px) {
    position: relative;
    display: block;
    height: calc((85vw / 16) * 20 + 10px);
  }
`;

const ImageCover = styled.div`
  width: 100%;
  height: 100%;
`;
