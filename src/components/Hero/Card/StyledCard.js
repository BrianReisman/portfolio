import styled from "styled-components";

const StyledCard = styled.div`
  /* background-color: antiquewhite; */
  /*//*added padding to parent position: relative; */
  /*//*^^ top: 50px; */
  display: flex;
  flex: 1;
  align-self: center;
  justify-self: center;

  p {
    color: ${(props) => props.theme.color.white};
    font-size: ${(props) => props.theme.size.small};
  }
  img{
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
    background-color: ${props => props.theme.color.orange};
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
