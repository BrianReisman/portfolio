import styled from "styled-components";

export const ConnectRoot = styled.div`
  /* border: 2px solid black; */

  padding: 25px 15px;

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
