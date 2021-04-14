import styled from "styled-components";

const StyledText = styled.div`
  /* border: 2px solid tomato;
  *{
  border: 2px solid black;
  } */

  flex: 1; //balances out styledCard's flex property
  h1 {
    /* "pick whichever fontsize is smaller. Pick the smallest possible of options" */
    font-size: min(${(props) => props.theme.size.h1}, 12vw);
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

  #placeholder p {
    margin-top: 20px;
    /* border: 1px solid blue; */
    * {
    }
    text-align: left;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletV}) {
    h1 {
      /* font-size: ${(props) => props.theme.size.h1768}; */
      font-size: 9.5rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    margin: 0 30px;
    h1 {
      font-size: 8rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobileS}) {
    h1 {
      font-size: 6rem;
    }
  }
`;

export default StyledText;
