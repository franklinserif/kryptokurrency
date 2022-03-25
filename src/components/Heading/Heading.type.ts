import { ReactNode } from 'react';

interface HeadingPropsType extends React.AllHTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default HeadingPropsType;
