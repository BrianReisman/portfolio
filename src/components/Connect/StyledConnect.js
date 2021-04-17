import styled from "styled-components";

const StyledConnect = styled.div`
  /* border: 2px solid black; */

  padding: 0px 15px 70px 100px; //TODO: use on all section

  .connectContainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    padding-left: 15px;
  }
`;
export default StyledConnect;
