import styled from "styled-components";

const StyledCard = styled.div`
  /* border: 2px dotted red; */

  justify-content: center;
  border-radius: 32px;
  /* display: flex; */


  flex: 1 1 50%;
  /* flex: 0 0 calc(50%-50px); */


  p {
    color: ${(props) => props.theme.color.white};
  }
  img {
    border-radius: 32px;
    flex-shrink: 1;
  }

  .container {
    border: 2px dotted red;
    box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 32px;
    height: 600px;
    width: 440px;
    background-color: ${(props) => props.theme.color.purple};
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
    width: 100px;
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
    /* border: 3px solid gold; */
  }
`;
export default StyledCard;
