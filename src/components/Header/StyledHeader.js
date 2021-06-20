import styled from "styled-components";

const StyledHeader = styled.header`
  /* border: 1px solid black; */
  /* height: 10vh; */

  /* position: relative; //allows logo to be positioned absolutely. Was for when logo was in header */
  top: 0;
  background-color: ${(props) => props.theme.color.white};
  padding-top: 20px;
  padding-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media (min-width: 1440px) {
  }

  /* border: 1px solid black; */
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    /* border: 1px solid black; */
    position: sticky;
    top: -1px; //avoids top gap
    justify-content: flex-end;
    padding-right: 30px;
    nav,
    .icons {
      display: none;
    }
  }
`;
export default StyledHeader;
