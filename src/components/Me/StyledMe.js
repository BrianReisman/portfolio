import styled from "styled-components";

const StyledMe = styled.div`
  /* border: 1px solid black; */

  background-color: ${(props) => props.theme.color.background};
  padding: 0px 15px 70px 100px; //TODO: use on all section

  div {
    /* border: 1px solid black; */
    display: flex;
    justify-content: center;
    padding: 20px 40px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    padding-left: 15px;
  }
`;
export default StyledMe;
