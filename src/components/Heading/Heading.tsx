import React from 'react';
import HeadingPropsType from './Heading.type';
import { StyledHeading } from './heading.styled';

const Heading: React.FC<HeadingPropsType> = (props: HeadingPropsType): JSX.Element => {
  const { headingLevel, children } = props;
  const Title = headingLevel;
  return (
    <StyledHeading>
      <Title>{children}</Title>
    </StyledHeading>
  );
};

export default Heading;
