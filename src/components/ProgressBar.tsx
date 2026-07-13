interface ProgressBarProps {
    percentage: number;
    bgColor: string;
    color: string;
}

export const ProgressBar = ({percentage, bgColor, color}: ProgressBarProps) => {
    return (
        <div className={`w-full bg-[${bgColor}] rounded-full h-4.5 overflow-hidden`}>
            <div className={`flex flex-col items-center h-full bg-[${color}] transition-all duration-500 ease-out`}
                style={{width: `${percentage}%`}}>
                <span>{percentage}%</span>
            </div>
        </div>
    )
}