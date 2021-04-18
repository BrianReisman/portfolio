import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 4px dotted red; */

  margin-left: 15px;
  flex: 1; //entire card as flex item against text.js

  .card {
    /* border: 4px dotted lightblue; */

    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    border-radius: 32px;
    background-color: ${(props) => props.theme.color.purple};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: max(30px);
    max-width: 440px;
    margin: 0 auto; //*possible alt to flexbox in StyledCard. This is the card's positioning not its contents.
  }

  img,
  .text {
    /* border: 2px solid red; */

    width: 100%; //*Keeps the border honest
  }
  img {
    background-color: ${(props) =>
      props.theme.color
        .white}; //!I can give an image a background color??? What's the .photoBorder for then???!
    padding: 10px; //TODO: determines is white border
    border-radius: 32px; //rounds its own corners
    margin-bottom: min(
      35px,
      3vw
    ); //space between image and text. Needed if no flexbox on card
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

  @media (max-width: ${(props) => props.theme.breakpoints.tabletV}) {
    margin-top: 25px; //space between text and card
    margin-left: 0px;
    .card {
      flex-direction: row;
      max-width: 540px;
    }
    img,
    .text {
      width: 50%; //*Keeps the border honest
    }
    .text {
      margin-left: 10px;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobileL}) {
    .card {
      flex-direction: column;

      padding: max(20px);
    }
    img,
    .text {
      width: 90%; //*Keeps the border honest
    }
  }
`;
export default StyledCard;
