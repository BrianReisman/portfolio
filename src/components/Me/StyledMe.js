import styled from "styled-components";

const StyledMe = styled.div`
  /* border: 1px solid black; */

  background-color: ${(props) => props.theme.color.background};
  padding: 25px 15px; //TODO: use on all section

  div {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    padding: 20px 40px;
  }
  /* .aside{
    display: flex;
    *{
      border: 1px solid blue;
    }
    position: absolute;
    top: 2400px;
    left: 900px;
    transform-origin: 0 0;
    transform: rotate(35deg);
    img{
    transform-origin: 0 0;
    transform: rotate(-35deg);

    }
  } */

`;
export default StyledMe;
