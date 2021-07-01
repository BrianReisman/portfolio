import styled from 'styled-components';

export const NavRoot = styled.nav`
  /* border: 1px solid blue; */

  position: relative; //for absolute placement of menu dropdown to respect parent.
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 2rem;

  .dropdown:hover{
    text-decoration: underline;
  }

  @media (max-width: 600px){
    display: none;
  }
`;

export const Button = styled.button`
  padding: 5px 16px;
  font-size: 24px;
  font-weight: 500;
  color: ${(props) => props.theme.color.orange};
  /* outline: none; */
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;

  .downArrow {
    /* border: 1px solid red;
    color: #aaa;
    height: 100%;
    position: relative;
    width: 50%; */
    height: 16px;
    width: 16px;
    padding: 0.5rem;
  }



  /* border: 1px solid blue; */
`;
