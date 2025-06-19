import Image from 'next/image';
import sharePohCardData from '../../data/sharePohCard.json';

const SharePohCard = () => {
  return (
    <div className="flex justify-center py-12 bg-secondaryBackground"> 
      <div className="
        bg-primaryBackground rounded-lg shadow-sm border border-defaultBorder p-6 
        flex flex-col items-center gap-y-6 text-center             
        md:flex-row md:justify-between md:items-center md:text-left md:gap-x-6 
        w-full max-w-md                                          
        md:max-w-2xl                                             
        lg:max-w-4xl                                             
        xl:w-[1182px] 2xl:w-[1400px] xl:h-[206px] xl:max-w-none xl:flex-row xl:justify-between xl:items-center 
      ">
        <div className="
          flex flex-col items-center                               
          md:flex-row md:items-center                              
        ">
          <div className="
            bg-white rounded-full p-2 
            flex items-center justify-center 
            w-20 h-20                                           
            mb-4                                                 
            md:mb-0 md:mr-6                                     
            xl:w-[140px] xl:h-[140px]                            
          ">
            <Image 
              src={sharePohCardData.icon.logo.src}
              alt={sharePohCardData.icon.logo.alt}
              width={100}  
              height={100} 
              className="
                w-16 h-16                                           
                xl:w-[100px] xl:h-[100px]                            
              "
            />
          </div>
          <p className="
            font-light text-primaryText                         
            text-lg                                               
            lg:text-2xl                                            
          ">
            {sharePohCardData.title}
          </p>
        </div>

        <button 
          className="
            flex items-center justify-center                         
            px-6 py-2 text-base lg:text-lg text-white rounded-sm             
            w-full                                                 
            md:w-auto    
            md:mr-9                                         
            primary-gradient-bg
          "
        >
          {sharePohCardData.buttonText}
          <Image 
            src={sharePohCardData.icon.share.src} 
            alt={sharePohCardData.icon.share.alt} 
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
