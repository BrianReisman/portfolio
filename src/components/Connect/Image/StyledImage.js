import styled from "styled-components";

const StyledImage = styled.div`
  /* border: 1px solid tomato; */

  background-color: ${(props) => props.theme.color.purple};
  display: flex;
  justify-content: center;
  border-radius: 1000px;
  width: min(366.95px);

  img {
    width: min(346.95px);
    background-color: ${(props) => props.theme.color.white};
    border-radius: 200px; //makes full circle
    padding: 10px; //TODO: determines border
    margin: 10px; //TODO: determines border
  }
`;
export default StyledImage;
