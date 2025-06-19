interface ArrowProps {
  tailLength?: string;
}


const Arrow = ({ tailLength }: ArrowProps) => {
  const widthClass = tailLength || 'w-8';

  return (
    <div className="flex items-center">
      <div className={`h-[2px] bg-primaryText ${widthClass}`}></div>
      <div className="w-2 h-2 border-t-[2px] border-r-[2px] border-primaryText rotate-45 -ml-2"></div>
    </div>
  );
};

export default Arrow;