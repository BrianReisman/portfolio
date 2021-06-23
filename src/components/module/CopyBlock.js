import React from 'react';
import styled from 'styled-components';

import CopyIcon from '../atom/CopyIcon';
import CopyableCode from '../atom/CopyableCode';

const Module = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid tomato;
  padding: 10px;
  width: min(60%, 600px);

  > * {
    /* border: 1px solid purple; */
  }
`;

const ModuleII = styled.div`
  display: flex;
`;

const Asdf = styled.p`
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif,
    Apple Color Emoji, Segoe UI Emoji;
  margin: 5px;
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

const url = 'https://vercel-api-ii.vercel.app/api/resume';

const onClickCopy = () => navigator.clipboard.writeText(url);

const CopyBlock = (props) => {
  return (
    <Module>
      <ModuleII>
        <CopyableCode url={url} />
        <CopyIcon onClickCopy={onClickCopy} url={url} />
      </ModuleII>
      <Asdf>
        If you're more JSON inclined, feel free to <code>get</code> my resume here. Postman guy?
        Insomnia gal? You know what to do.
        {/* //Plain ol' terminal? Dealer's choice. */}
      </Asdf>
    </Module>
  );
};

export default CopyBlock;
