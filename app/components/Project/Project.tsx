"use client";
import { Expo } from "gsap";
import { gsap, ScrollTrigger } from "gsap/all";
import hoverEffect from "hover-effect";
import { MutableRefObject, useEffect, useRef } from "react";
import { Arrow } from "../";
import { GithubIcon } from "../../assets";
import { IProject } from "../../data/projects";
import { Show } from "../Show";
import "./Project.scss";
import { ProjectImage } from "./ProjectImage";

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
}: {
  project: IProject;
}): JSX.Element => {
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
    <article className="project">
      <div className="project-details">
        <div className="project-details-container">
          <h3 className="project-details-title">{title}</h3>
          <p className="project-details-description">{description1}</p>
          <p className="project-details-description">{description2}</p>
          <h4 className="project-details-features">Tech Stack and Features:</h4>
          <div className="project-details-features-lists">
            <ul className="list">
              {list1.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
            <ul className="list">
              {list2.map(item => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <p className="github">
            <a href={repo} rel="noreferrer" target="_blank">
              <span>Link to Repo:</span>
              <GithubIcon />
            </a>
          </p>
        </div>
        <Arrow />
      </div>
      <div
        className={`project-image project-image-large project-image-${title}`}
      >
        <div className="image-canvas">
          <Show
            when={!!website}
            fallback={<div className={`canvas-container ${title}`}></div>}
          >
            <a href={website} target="_blank" rel="noreferrer">
              <div className={`canvas-container ${title}`}></div>
            </a>
          </Show>
        </div>
      </div>
      <div className={`project-image project-image-mobile`}>
        <div className="project-image-cover">
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
            <a href={website} target="_blank" rel="noreferrer">
              <ProjectImage
                image1={image1}
                image2={image2}
                imageCover1={imageCover1}
                imageCover2={imageCover2}
              />
            </a>
          </Show>
        </div>
      </div>
    </article>
  );
};
