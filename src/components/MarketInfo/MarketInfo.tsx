import React from 'react';
import MarketInfoPropsType from './MarketInfo.type';
import { StyledMarkInfo } from './marketinfo.styled';
import Heading from '../Heading/Heading';

const MarketInfo: React.FC<MarketInfoPropsType> = (props: MarketInfoPropsType): JSX.Element => {
  const { title, dark, data } = props;
  return (
    <StyledMarkInfo dark={dark}>
      <Heading headingLevel="h2" dark={dark}>
        title
      </Heading>
      <span className="data-info">{data}</span>
    </StyledMarkInfo>
  );
};

export default MarketInfo;
