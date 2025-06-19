import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-primaryBackground w-full">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageContainer;
