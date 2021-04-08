import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 4px dotted red; */

  /* display: flex;
  justify-content: center;
  align-items: center; */ //*possible alt to margin: 0 auto in .card

  /* padding: 0 15px; //TODO: Eventually, so that when most compressed, still some space. */

  //entire card as flex item
  flex: 1;

  .card {
    margin: 0 auto; //*possible alt to flexbox in StyledCard

    /* border: 4px dotted lightblue; */
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-radius: 32px;
    /* height: 600px; //*with a height of 600px, the top padding is 33 */
    padding: 33px 0;
    /* height: max(600px, auto); */
    /* //TODO not vw, but maybe width of app? */
    /* //TODO do i want to make responsive the width of the container? Or the padding? */
    width: min(440px, 40vw);
    /* padding: 0 min(30px, 3vw); */
    background-color: ${(props) => props.theme.color.purple};
  }

  img,
  .text {
    /* border: 2px solid red; */
    width: 80%; //*Keeps the border honest
  }
  img {
    /* //!the png is cropped, not radius needed */
    background-color: ${(props) =>
      props.theme.color
        .white}; //!I can give an image a background color??? What's the .photoBorder for then???!
    margin: 0 auto;
    padding: 10px; //TODO: determines is
    border-radius: 32px;
    margin-bottom: 50px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  }
  p {
    color: ${(props) => props.theme.color.white};
  }
  .line {
    width: 100px;
    height: 4px;
    background-color: ${(props) => props.theme.color.orange};
    margin: 10px 0;
  }
`;
export default StyledCard;
