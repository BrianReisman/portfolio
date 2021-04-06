import styled from "styled-components";

const StyledText = styled.div`
  /* border: 2px solid tomato; */

  flex: 1 1 50%; //I think this only matters when there are sibling flex items.

width: 100%;










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
