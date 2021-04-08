import styled from "styled-components";

const StyledCard = styled.div`
  border: 4px dotted red;

  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 15px; //TODO: Eventually, so that when most compressed, still some space. */

  //entire card as flex item
  flex: 1;

  p {
    color: ${(props) => props.theme.color.white};
  }

  .card {
    /* margin: 0 auto; */ //*possible alt to flexbox in StyledCard?

    /* border: 4px dotted lightblue; */
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 32px;
    height: 600px; //*with a height of 600px, the top padding is 33
    /* padding: 33px; */
    /* height: max(600px, auto); */
    /* //TODO not vw, but maybe width of app? */
    /* //TODO do i want to make responsive the width of the container? Or the padding? */
    width: min(440px, 40vw);
    /* padding: 0 min(30px, 3vw); */
    background-color: ${(props) => props.theme.color.purple};
  }
  .photoBorder {
    border: 2px solid red;
    align-self: center;
    border-radius: 32px;
    width: min(382.2px, 40vw);
    height: min(382.2px, 40vw);
    /* height: 365px; */
    background-color: ${(props) => props.theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    /* //!the png is cropped, not radius needed */
    /* border: 2px solid red; */
    width: 100%; //*Keeps the border honest
    padding: 10px; //TODO:
    border-radius: 32px;
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
