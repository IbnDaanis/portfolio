import Image from "next/image";
import { RefObject } from "react";

interface Props {
  image1: string;
  image2: string;
  imageCover1: RefObject<HTMLDivElement | null>;
  imageCover2: RefObject<HTMLDivElement | null>;
}

/** Images for the Projects */
export const ProjectImage = ({
  image1,
  image2,
  imageCover1,
  imageCover2
}: Props) => {
  return (
    <>
      <div>
        <Image
          src={image1}
          alt="Screenshot of the project"
          width={window.innerWidth * 0.85}
          height={((window.innerWidth * 0.85) / 16) * 10}
        />
        <div ref={imageCover1}></div>
      </div>
      <div>
        <Image
          src={image2}
          alt="Screenshot of the project"
          width={window.innerWidth * 0.85}
          height={((window.innerWidth * 0.85) / 16) * 10}
        />
        <div ref={imageCover2}></div>
      </div>
    </>
  );
};
