import styled from 'styled-components';

const StyledBackendcard = styled.div`
  background-color: ${(props) => props.theme.color.background};
  box-shadow: -9px 15px 40px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;
export default StyledBackendcard;
