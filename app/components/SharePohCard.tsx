import React from 'react';
import Image from 'next/image';

interface SharePohCardProps {
  gradientButtonStyle?: string;
}

const SharePohCard: React.FC<SharePohCardProps> = ({ gradientButtonStyle }) => {
  return (
    <div className="flex justify-center py-12 bg-secondaryBackground"> 
      <div className="
        bg-primaryBackground rounded-lg shadow-sm border border-defaultBorder p-6 
        flex flex-col items-center gap-y-6 text-center             
        md:flex-row md:justify-between md:items-center md:text-left md:gap-x-6 
        w-full max-w-md                                          
        md:max-w-2xl                                             
        lg:max-w-4xl                                             
        xl:w-[1182px] xl:h-[206px] xl:max-w-none xl:flex-row xl:justify-between xl:items-center 
      ">
        <div className="
          flex flex-col items-center                               
          md:flex-row md:items-center                              
        ">
          <Image 
            src="/hero-illustration.png" 
            alt="Proof of Humanity illustration"
            width={100}  
            height={100} 
            className="
              w-20 h-20                                           
              mb-4                                                 
              md:mb-0 md:mr-6                                     
              xl:w-[100px] xl:h-[100px]                            
            "
          />
          <p className="
            font-light text-primaryText                         
            text-lg                                               
            md:text-xl                                            
          ">
            Share POH with the world!
          </p>
        </div>

        <button 
          className={`
            flex items-center justify-center                         
            px-6 py-2 text-base text-white rounded-sm             
            w-full                                                 
            md:w-auto                                             
            ${gradientButtonStyle}
          `}
        >
          Share
          <Image 
            src="/share-icon.svg" 
            alt="Share icon"
            width={16} 
            height={16} 
            className="ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default SharePohCard;
