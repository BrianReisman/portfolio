import styled from "styled-components";

const StyledText = styled.div`
  /* border: 2px solid tomato; */

  flex: 1; //balances out styledCard's flex property

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
