import styled from "styled-components";

const StyledCard = styled.div`
  /* background-color: antiquewhite; */
  /* border: 3px dotted red; */

  /*//*added padding to parent position: relative; */
  /*//*^^ top: 50px; */
  display: flex;
  /* //*took this off, otherwise filled background beyond card flex: 1; */
  align-self: center;
  justify-self: center;
  box-shadow: -20px 10px 46px rgba(0, 0, 0, 0.2);
  border-radius: 32px;

  p {
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.size.small};
  }
  img {
    border-radius: 32px;
  }

  .container {
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
