interface ArrowProps {
  stemLength?: string; // e.g., 'w-8', 'w-12'
}

const Arrow: React.FC<ArrowProps> = ({ stemLength = 'w-8' }) => {
    return (
        <div className="flex items-center">
        <div className={`h-1 bg-gray-700 ${stemLength}`}></div> 
        <div className="w-0 h-0
                  border-y-[7px] border-y-transparent
                  border-l-[10px] border-l-gray-700
                  ">
        </div>
      </div>
    )
}

export default Arrow;