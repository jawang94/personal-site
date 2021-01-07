import React from 'react';
import styled from 'styled-components/macro';
import { smallFont } from './helpers';

const Wrapper: any = styled.div`
  ${smallFont};

  ${(props: any) => props.comments && 'margin-top: 16px'};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 2px;
  padding: 48px 0;
  background-color: ${(props) => props.theme.foreground};
  text-align: center;
  color: ${(props) => props.theme.mutedText};

  @media (max-width: 768px) {
    ${(props: any) => !props.comments && 'margin-top: -1px'};
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Empty = ({ comments }: any) => {
  const message = comments ? 'no comments' : "there's nothing here...";
  return <Wrapper comments={comments}>{message}</Wrapper>;
};

export default Empty;
