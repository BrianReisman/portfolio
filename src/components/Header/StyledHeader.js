import styled from "styled-components";

const StyledHeader = styled.header`
  /* border: 1px solid black; */
  
  /* position: relative; //*allows logo to be positioned absolutely. Was for when logo was in header */
  
  /* padding-left: 100px; */
  padding-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    /* border: 1px solid black; */
    
    justify-content: flex-end;
    padding-right: 30px;
    padding-left: 15px;
  }
`;
export default StyledHeader;
