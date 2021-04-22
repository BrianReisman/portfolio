import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%; //centering magic
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 200ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  width: 500px;
  max-width: 80%;

  :active {
  transform: translate(-50%, -50%) scale(1);
  }
  .modal-header {
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid black;
  }

  .modal-header .title {
    font-size: ${(props) => props.theme.size.h4};
    font-weight: bold;
  }
  .modal-header .close-button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: ${(props) => props.theme.size.h4};
    font-weight: bold;
  }
`;
export default StyledModal;
