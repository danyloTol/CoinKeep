import { BarChart } from './BarChart';

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
];

const values = [5000, 3240, 1000, 3000, 1200, 3400, 15000]

export const WidgetLMoneyFlow = () => {
    return (
        <div className="flex flex-col px-6.25 py-4 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <div className='flex flex-row justify-between'>
                <h1 className='text-[24px]'>Money flow</h1>
                <div className='flex flex-row gap-2.75'>
                    <div className='flex flex-row items-center'>
                        <div className='w-2 h-2 bg-[#FFD000] rounded-full' />
                        <p className='text-[14px] text-text-primary-light'>Income</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='w-2 h-2 bg-[#FFD000] rounded-full' />
                        <p className='text-[14px] text-text-primary-light'>Expense</p>
                    </div>
                </div>
            </div>
            <div>
                <BarChart labels={labels} values={values} />
            </div>
        </div>
    )
}