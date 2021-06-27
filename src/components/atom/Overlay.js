import styled from 'styled-components';

const StyledOverlay = styled.div`
  background-color: #11111160;
  display: ${(props) => {
    return props.showDropDown ? 'absolute' : 'none';
  }};
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Overlay = ({ showDropDown, setShowDropDown }) => (
  <StyledOverlay
    showDropDown={showDropDown}
    onClick={() => {
      setShowDropDown(!showDropDown);
    }}
  />
);
