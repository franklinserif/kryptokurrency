import React from 'react';
import MarketInfoPropsType from './MarketInfo.type';
import { StyledMarkInfo } from './marketinfo.styled';

const MarketInfo: React.FC<MarketInfoPropsType> = (props: MarketInfoPropsType): JSX.Element => {
  const { title, data } = props;
  return (
    <StyledMarkInfo>
      <h2>{title}</h2>
      <span>{data}</span>
    </StyledMarkInfo>
  );
};

export default MarketInfo;
