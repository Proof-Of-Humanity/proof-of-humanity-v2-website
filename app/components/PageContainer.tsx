import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageContainerProps {
  children: ReactNode;
  gradientButtonStyle?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({ children, gradientButtonStyle }) => {
  return (
    <div>
      <Header gradientButtonStyle={gradientButtonStyle} />
      {children}
      <Footer />
    </div>
  );
};

export default PageContainer;
