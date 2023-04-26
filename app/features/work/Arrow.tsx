import styled from "styled-components";
import { ArrowIcon } from "../../assets";
import { theme } from "../../styles/globalStyle";

/** Arrow used in the works section. */
export const Arrow = () => {
  return (
    <ArrowContainer>
      <ArrowRing>
        <ArrowIcon />
      </ArrowRing>
    </ArrowContainer>
  );
};

const ArrowContainer = styled.div`
  width: 30%;
  position: relative;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const ArrowRing = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  height: 0;
  width: 100%;
  padding-top: 100%;
  transform: translateX(-50%);
  border-radius: 50%;
  border: 2px solid ${theme.$offWhite};
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${theme.$arrowColor};
    border: 2px solid ${theme.$arrowColor};

    .arrow {
      color: ${theme.$darkBlack};
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 130px;
    transform: translate(-50%, -50%);
    color: ${theme.$arrowColor};
    transition: 0.3s ease-in-out;
  }
`;
