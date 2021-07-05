import styled from 'styled-components';

export const ResumeLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e1e4e8;
  font-size: 14px;
  font-weight: 600;
  color: #24292e;

  svg {
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
  :hover {
    background-color: #f6f8fa;
  }
`;

export const Root = styled.div`
  z-index: 10;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  margin: 5px;

  display: ${(props) => (props.showDropDown ? 'flex' : 'none')};
  flex-direction: column;
  width: 360px;
  p{ //? figure out how to get this in Text styled component.
    font-size: 12px;
  }
  > * {
    padding: 16px;
  }
  :before,
  :after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0px;
  }
  :before {
    border: 8px solid #00000000;
    border-bottom: 8px solid #e1e4e8;
    /* border-bottom: 8px solid teal; */
    z-index: 1;
    left: 330px;
    top: -15px;
  }
  /* ///!!! caution for breakpoints !!!// */
  :after {
    border: 8px solid #00000000;
    border-bottom: 8px solid white;
    /* border-bottom: 8px solid red; */
    z-index: 2;
    left: 330px;
    top: -13px;
  }
`;

export const CopyBar = styled.div`
  /* border: 1px solid #aaa; */

  position: relative;
  display: flex;
  width: 100%;
`;

export const Text = styled.p`
  box-sizing: border-box;
  width: 100%;
  line-height: 1.2;
  /* font-size: 12px; */
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji;
  margin-top: 6px;
  color: #586069;
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: inherit;
    background-color: #87837826;
    color: #eb5757;
    border-radius: 3px;
    padding: 0.2em 0.4em;
  }
`;

export const APISection = styled.div`
  svg {
    height: 16px;
    width: 16px;
    margin-right: 16px;
  }
`;

export const JSONHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 16px 0;
  font-size: 14px;
  font-weight: 600;

  /* border: 1px solid gold; */
`;

export const CopiedMessage = styled.div`
  /* display: ${({ clicked }) => (clicked ? 'inherit' : 'none')}; */
  opacity: ${({ clicked }) => (clicked ? 1 : 0)};
  font-size: 11px;
  position: absolute;
  right: -6px;
  top: -33px;
  border: 1px solid black;
  padding: 6px;
  border-radius: 8px;
  background-color: black;
  color: white;
  transition: 0.25s ease-in;
  :before,
  :after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 0px;
  }
  :before {
    border: 6px solid #00000000;
    border-top: 6px solid black;
    z-index: 3;
    left: 18px;
    top: 23px;
  }
  /* :after {
  border: 8px solid #00000000;
  border-top: 8px solid white;
  z-index: 4;
  left: 23px;
  top: 23px;
} */
`;
