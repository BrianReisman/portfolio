import styled from "styled-components";

const StyledHeader = styled.header`
  /* border: 1px solid black; */

  /* /* position: relative; /allows logo to be positioned absolutely. Was for when logo was in header */
  background-color: ${(props) => props.theme.color.white};
  padding-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* border: 1px solid black; */
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    /* border: 1px solid black; */
    position: sticky;
    top: 0;
    justify-content: flex-end;
    padding-right: 30px;
    padding-left: 15px;
  }
`;
export default StyledHeader;
