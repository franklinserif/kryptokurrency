import React from 'react';
import HeadingPropsType from './Heading.type';
import { StyledHeading } from './heading.styled';

const Heading: React.FC<HeadingPropsType> = (props: HeadingPropsType): JSX.Element => {
  const { headingLevel, dark, children } = props;
  const Title = headingLevel;
  return (
    <StyledHeading dark={dark}>
      <Title>{children}</Title>
    </StyledHeading>
  );
};

export default Heading;
