import { Icon } from '../../Icon'

interface WidgetProps {
    thisMonthValue?: number;
    lastMonthValue?: number;
}

const WidgetMTotalBalance = ({ thisMonthValue, lastMonthValue }: WidgetProps) => {
    const formatted = (thisMonthValue !== undefined) ? thisMonthValue.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }) : "";

    const [integer, decimal] = formatted.split('.');

    const changePercent = (thisMonthValue !== undefined && lastMonthValue !== undefined) && Math.round((thisMonthValue - lastMonthValue) / lastMonthValue * 100);

    return (
        <div className="flex flex-col gap-4 py-2 px-6.25 outline-1 outline-text-secondary-light rounded-[30px] overflow-hidden">
            <div className="flex flex-col gap-2">
                <h1 className='text-[24px] text-text-primary-light'>Total balance</h1>
                <h1 className="text-[28px]"><span>${integer}</span><span className="text-text-secondary-light">.{decimal}</span></h1>
            </div>
            <div>
                {(typeof changePercent === 'number' && Number.isFinite(changePercent)) && (changePercent > 0) ? <Icon name='arrow_upward_alt' /> : <Icon name='arrow_upward_alt' className='rotate-180' />}
            </div>
        </div>
    )
}

export default WidgetMTotalBalance;