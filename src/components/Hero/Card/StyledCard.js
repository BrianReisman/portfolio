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
  //!flex container
  display: flex;
  /* flex-direction: column; */

  p {
    color: ${(props) => props.theme.color.white};
  }
  img {
    /* //!the png is cropped, not radius needed */
    border: 2px solid red;

    width: 100%;
    padding: 10px; //TODO: 
    /* margin: auto; */
  }
  .card {
    /* border: 4px dotted lightblue; */
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 32px;
    height: 600px;
    /* //TODO not vw, but maybe width of app? */
    width: min(440px, 40vw);
    background-color: ${(props) => props.theme.color.purple};
  }
  .photoBorder {
    border: 2px solid red;
    align-self: center;
    border-radius: 32px;
    width: min(382.2px, 40vw);
    height: min(382.2px, 40vw);
    /* height: 365px; */
    background-color: ${(props) => props.theme.color.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .photoBorder,
  .text {
    /* border: 3px solid rosybrown; */
    /* flex: 1; */ //this doesn't work because the main axis is vertical and
  }
  .line {
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.color.orange};
    margin: 10px 0;
  }
  .text {
    /* height: 146px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
`;
export default StyledCard;
