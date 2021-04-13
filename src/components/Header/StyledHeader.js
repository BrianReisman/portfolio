import styled from "styled-components";

const StyledHeader = styled.div`
  /* border: 1px solid black; */

  /* position: relative; //*allows logo to be positioned absolutely. Was for when logo was in header */
  padding-left: 100px;
  padding-top: 25px;
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    padding-left: 15px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobileM}) {
    display: none;
  }
`;
export default StyledHeader;
