import styled from 'styled-components';

const StyledOverlay = styled.div`
  background-color: #11111160;
  display: ${({ displayOverlay }) => (displayOverlay ? 'absolute' : 'none')};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
`;

export const Overlay = ({ displayOverlay, closeAll }) => (
  <StyledOverlay displayOverlay={displayOverlay} onClick={closeAll} />
);
