interface ProgressBarProps {
    goal: number;
    amount: number;
    bgColor: string;
    color: string;
}

export const ProgressBar = ({goal, amount, bgColor, color}: ProgressBarProps) => {
    return (
        <div className={`w-full ${bgColor} rounded-full h-4.5 overflow-hidden`}>
            <div className={`flex flex-col min-w-7 items-center rounded-full h-full ${color} transition-all duration-500 ease-out`}
                style={{width: `${(amount / (goal / 100) > 100) ? 100 : amount / (goal / 100) }%`}}>
                    
                <span className="text-[13px] px-10">{Math.round((amount / (goal / 100) > 100) ? 100 :((amount / (goal / 100))*10) / 10)}%</span>
            </div>
        </div>
    )
}