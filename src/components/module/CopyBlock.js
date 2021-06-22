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
`;

const url = 'https://iwantedbrian.com/api/resume';

const onClickCopy = () => navigator.clipboard.writeText(url);

const CopyBlock = (props) => {
  return (
    <Module>
      <ModuleII>
        <CopyableCode url={url} />
        <CopyIcon onClickCopy={onClickCopy} url={url} />
      </ModuleII>
      <Asdf>
        If you're more JSON inclined, feel free to <code>get</code> my resume here.
      </Asdf>
      <Asdf>
        Are you a Postman guy or gal? Insomnia? Plain ol' terminal? Feel free to <code>get</code>{' '}
        my resume here.
      </Asdf>
    </Module>
  );
};

export default CopyBlock;
