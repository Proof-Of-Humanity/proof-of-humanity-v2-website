import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  statusText: string;
  statusColor: 'vouching' | 'verification' | 'challenged' | 'included' | 'rejected';
  profileImageUrl: string;
  profileName: string;
  address: string;
  addressIconUrl: string;
  buttonText: string;
  className: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  statusText,
  statusColor,
  profileImageUrl,
  profileName,
  address,
  addressIconUrl,
  buttonText,
  className
}) => {
  const colorVariants = {
    vouching: {
      text: 'text-statusVouching',
      dot: 'bg-statusVouching',
      border: 'border-statusVouching',
      buttonBg: 'bg-statusVouching',
    },
    verification: {
      text: 'text-statusVerification',
      dot: 'bg-statusVerification',
      border: 'border-statusVerification',
      buttonBg: 'bg-statusVerification',
    },
    challenged: { 
      text: 'text-statusChallenged',
      dot: 'bg-statusChallenged',
      border: 'border-statusChallenged',
      buttonBg: 'bg-statusChallenged',
    },
    included: {
      text: 'text-statusIncluded',
      dot: 'bg-statusIncluded',
      border: 'border-statusIncluded',
      buttonBg: 'bg-statusIncluded',
    },
    rejected: {
      text: 'text-statusRejected',
      dot: 'bg-statusRejected',
      border: 'border-statusRejected',
      buttonBg: 'bg-statusRejected',
    },
  };

  const selectedColor = colorVariants[statusColor];

  return (
    <div className= {`flex flex-col items-center ${className}`}>
      <div className={`bg-secondaryBackground flex flex-col items-center justify-center w-41 shadow-md h-44 text-center ${selectedColor.border}`}>
        <div className={`h-0.5 ${selectedColor.dot} w-full`}></div>
        <div className="p-2 text-center w-full flex flex-col items-center">
          <div className={`${selectedColor.text} text-xs font-semibold flex items-center justify-center`}>
            {statusText} <span className={`ml-1 w-2 h-2 ${selectedColor.dot} rounded-full`}></span>
          </div>
          <Image src={profileImageUrl} alt={profileName} width={77} height={77} className="mt-4" />
          <p className="font-semibold mt-2 text-xs">{profileName}</p>
          <div className="flex items-center justify-center mt-1 text-xs text-gray-500">
            <Image src={addressIconUrl} alt="Address icon" width={8} height={8} className='' />
            <span className="w-full flex text-xs">{address}</span>
          </div>
        </div>
      </div>
      <div className={`mt-3 ${selectedColor.buttonBg} text-white text-sm font-semibold px-4 py-1 rounded-full`}>
        {buttonText}
      </div>
    </div>
  );
};

export default ProfileCard;