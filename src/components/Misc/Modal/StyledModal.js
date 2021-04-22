import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 50%; //centering magic
  left: 50%;
  transform: translate(-50%, -50%) scale(1); //!
  transition: 50ms ease-in-out;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 10;
  background-color: ${(props) => props.theme.color.white};
  width: 500px;
  max-width: 80%;
  display: flex;///
  flex-direction: column;///
  nav {
    /* border: 3px solid blue; */
    margin: 15px;
    display: flex;
    flex-direction: column;
    button,
    a {
      margin: 15px 0;
      font-size: ${(props) => props.theme.size.small};
    }
  }
  .active {
    transform: translate(-50%, -50%) scale(1);
  }
    /* border: 3px solid blue; */
  .modal-header {
    /* border: 3px solid blue; */
    padding: 10px 15px 0 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border-bottom: 1px solid black; */
  }

  .modal-header .close-button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-size: ${(props) => props.theme.size.h4};
    font-weight: bold;
  }
  .icons{
    border: 2px solid pink;
  }
`;
export default StyledModal;
