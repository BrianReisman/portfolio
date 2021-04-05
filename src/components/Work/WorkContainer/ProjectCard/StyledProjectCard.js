import styled from "styled-components";

const StyledProjectCard = styled.div`
  background-color: ${(props) => props.theme.color.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 35vh;

  border: 1px solid tomato;
  box-sizing: border-box;

  h3 {
    margin-right: 25px; //for space between title + dates
    text-align: center;
  }
  img{
    width: 10%;
    height: auto;
  }

  .projectCardTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    border: 1px dotted blueviolet;
  }
  .projectCardMain{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
  }
`;
export default StyledProjectCard;
