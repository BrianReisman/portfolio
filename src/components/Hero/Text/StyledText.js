import styled from "styled-components";

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 100px;
  width: 50%;
  /* border: 1px solid tomato; */

  h1 {
    //size in StyledApp.js
    margin-bottom: 20px; 
  }
  a,
  span {
    font-size: inherit;
  }

  .punctuation {
    color: ${(props) => props.theme.color.orange};
  }
  .company {
    color: ${(props) => props.theme.color.purple};
    font-weight: 700;
  }
`;

export default StyledText;
