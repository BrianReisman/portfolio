import styled from "styled-components";

const StyledIcons = styled.div`
  /* border: 2px solid peru; */
  position: absolute;
  top: 0;
  right: 0;
  margin: 18px 30px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    display: none;
  }
`;
export default StyledIcons;
