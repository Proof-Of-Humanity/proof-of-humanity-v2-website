import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  statusText: string;
  statusColor: 'purple' | 'blue' | 'green';
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
    purple: {
      text: 'text-purple-500',
      dot: 'bg-purple-500',
      border: 'border-purple-300',
      buttonBg: 'bg-purple-500',
    },
    blue: {
      text: 'text-blue-500',
      dot: 'bg-blue-500',
      border: 'border-blue-300',
      buttonBg: 'bg-blue-500',
    },
    green: {
      text: 'text-green-500',
      dot: 'bg-green-500',
      border: 'border-green-300',
      buttonBg: 'bg-green-500',
    },
  };

  const selectedColor = colorVariants[statusColor];

  return (
    <div className= {`flex flex-col items-center ${className}`}>
      {/* Main card container with overall shadow, border, and rounding */}
      <div className={`flex flex-col items-center justify-center w-42 shadow-md h-44 text-center ${selectedColor.border}`}>
        {/* Top colored border strip */}
        <div className={`h-0.5 ${selectedColor.dot} w-full`}></div>
        {/* Card content area (below top border) */}
        <div className="p-2 text-center w-full flex flex-col items-center">
          <div className={`${selectedColor.text} text-xs font-semibold flex items-center justify-center`}>
            {statusText} <span className={`ml-1 w-2 h-2 ${selectedColor.dot} rounded-full`}></span>
          </div>
          <Image src={profileImageUrl} alt={profileName} width={77} height={77} className="mt-4" />
          <p className="font-semibold mt-2 text-xs">{profileName}</p>
          <div className="flex items-center mt-1 text-xs text-gray-500">
            <Image src={addressIconUrl} alt="Address icon" width={8} height={8} className='' />
            <span className="w-full flex text-xs">{address}</span>
          </div>
        </div>
      </div>
      {/* Button below the card */}
      <div className={`mt-3 ${selectedColor.buttonBg} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
        {buttonText}
      </div>
    </div>
  );
};

export default ProfileCard;