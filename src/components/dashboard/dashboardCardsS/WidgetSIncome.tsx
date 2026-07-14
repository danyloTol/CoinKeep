interface WidgetProps {
    thisMonthValue: number;
    lastMonthValue: number;
}

const WidgetSIncome = ({thisMonthValue, lastMonthValue}: WidgetProps) => {
    const formatted = thisMonthValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const [integer, decimal] = formatted.split('.');

    const changePercent = Math.round((thisMonthValue - lastMonthValue) / lastMonthValue * 100) / 10

    return (
        <div className="flex flex-col gap-4 py-2 px-6.25 outline-1 outline-text-secondary-light rounded-[30px] overflow-hidden">
            <div>
                <h3 className="text-[14px]">Income</h3>
            </div>
            <div>
                <h2 className="text-text-primary-light text-[24px]">${integer}.<span className="text-text-secondary-light">{decimal}</span></h2>
            </div>
            <div className="flex flex-row items-center justify-between">
                {(changePercent >= 0) ? 
                    <p className="w-max px-1.25 py-0.75 rounded-full bg-bg-success text-text-success text-[11px] whitespace-nowrap">↑ {changePercent}%</p> :
                    <p className="w-max px-1.25 py-0.75 rounded-full bg-bg-danger text-text-danger text-[11px] whitespace-nowrap">↓ {changePercent}%</p>}
                <p className="text-[10px] text-text-secondary-light whitespace-nowrap">vs last month</p>
            </div>
        </div>
    )
}

export default WidgetSIncome