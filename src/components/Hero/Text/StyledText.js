import styled from "styled-components";

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 100px;

  /* border: 1px solid tomato; */
  height: 200vh;

  h1 {
    font-size: ${(props) => props.theme.size.h1};
    margin-bottom: 20px; 
  }
  p {
    font-size: ${(props) => props.theme.size.small};
  }
  a,
  span {
    font-size: inherit;
  }
  a {
    text-decoration: none;
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
