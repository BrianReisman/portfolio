import styled from 'styled-components';

const StyledTools = styled.div`
  background-color: ${(props) => props.theme.color.background};
  box-shadow: -9px 15px 40px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
margin: 20px 0;

  padding: 30px;
  max-width: 400px; //! hardcoded badness


`;
export default StyledTools;
