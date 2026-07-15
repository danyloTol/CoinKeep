import { DoughnutChart } from './DoughnutChart';

const budgetList = [
    {cat: 'Cafe & Restaurants', color: '#FFD000', value: 124},
    {cat: 'Transport', color: '#4C4C4C', value: 3356},
    {cat: 'Shopping', color: '#818181', value: 355},
    {cat: 'Games', color: '#FFEFB3', value: 3455},
    {cat: 'Bills', color: '#584501', value: 244},
    {cat: 'Gifts', color: '#987700', value: 1236},
]

const WidgetMBudget = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr] px-6.25 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <div className='flex flex-col gap-4'>
                <h1 className='text-[24px] pt-3.75'>Budget</h1>
                <ul>
                    {budgetList.map((item) => (
                        <li className="flex flex-row gap-0.5 items-center">
                            <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: item.color}} />
                            <p className='text-[12px] text-text-primary-light'>{item.cat}</p>
                        </li>
                    ))}
                </ul>
            </div>
                <div className='flex flex-col justify-center items-end py-10'>
                    <div className='w-32.5 h-32.5'>
                    <DoughnutChart amount={budgetList.reduce((sum, item) => sum + item.value, 0)} label="Total for month" chartData={budgetList} />
                </div>
            </div>
        </div>
    );
};

export default WidgetMBudget;