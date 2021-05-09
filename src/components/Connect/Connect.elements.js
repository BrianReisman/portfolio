import styled from "styled-components";

export const ConnectRoot = styled.div`
  /* border: 2px solid black; */

  padding: 0px 15px 70px 100px; //TODO: use on all section

  @media (max-width: ${(props) => props.theme.breakpoints.mid}) {
    padding-left: 15px;
  }
`;

export const ConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
