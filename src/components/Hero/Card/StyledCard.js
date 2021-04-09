import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 4px dotted red; */

  /* display: flex;
  justify-content: center;
  align-items: center; */ //*possible alt to margin: 0 auto in .card

  padding: 0 15px;

  //entire card as flex item
  flex: 1;

  .card {
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    background-color: ${(props) => props.theme.color.purple};


    margin: 0 auto; //*possible alt to flexbox in StyledCard. This is the card's positioning not its contents.
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    /* border: 4px dotted lightblue; */
    /* height: 600px; //*with a height of 600px, the top padding is 33 */
    /* height: max(600px, auto); */
    padding: min(33px, 3vw) 0;
    /* padding: 0 min(30px, 3vw); */
    max-width: 440px;


    /* //TODO not vw, but maybe width of app? */
    /* //TODO do i want to make responsive the width of the container? Or the padding? */
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
    padding: 10px; //TODO: determines is white border
    border-radius: 32px; //rounds its own corners
    margin-bottom: min(33px, 3vw); //space between image and text. Needed if no flexbox on card
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
