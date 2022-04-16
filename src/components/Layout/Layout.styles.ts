import styled, { css } from 'styled-components';

import { sharedValues } from 'utils/sharedValues';
import { underline, s1 } from 'utils/sharedStyled';
import { media } from 'utils/media';

interface ReadyWrapperProps {
  isReady: boolean;
}

export const ReadyWrapper = styled.div<ReadyWrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  background-color: ${sharedValues.colors.trueWhite};

  ${props =>
    props.isReady &&
    css`
      opacity: 0;
      user-select: none;
      pointer-events: none;
    `}
`;

export const AppBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: white;
`;

export const BackWrapper = styled.h1`
  position: fixed;
  z-index: 20;
  top: 10px;
  left: 20px;
  mix-blend-mode: difference;
  color: white;
  ${s1};

  ${media.tablet} {
    top: 20px;
    left: 30px;
  }
`;

export const BackBtn = styled.button`
  display: inline-block;
  cursor: pointer;
  position: relative;
  ${underline};
  margin-left: 5px;
`;
