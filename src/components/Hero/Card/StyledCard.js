import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 4px dotted red; */

  /* width: 100%; */
  flex-grow: 1;
  flex-basis: 40%;

  /* padding: 0 15px; */
  justify-content: center;
  align-items: center;
  border-radius: 32px;

  //flex item
  flex: 1;
  /* flex-shrink: 1; */
  //flex container
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme.color.white};
  }
  img {
    border-radius: 32px;
  }

  .card {
    /* border: 4px dotted lightblue; */
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);

    //as flex item
    //as ruler, flex container
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 32px;
    height: 600px;
    min-width: 440px;
    background-color: ${(props) => props.theme.color.purple};
  }
  .photoBorder,
  .text {
    /* flex: 1; */ //this doesn't work because the main axis is vertical and
  }
  .photoBorder {
    align-self: center;
    border-radius: 32px;
    width: 382.2px;
    height: 365px;
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line {
    min-width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.color.orange};
    margin: 10px 0;
  }
  .text {
    height: 146px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
export default StyledCard;
