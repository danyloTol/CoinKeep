import { DoughnutChart } from './Doughnut';

const LegendListClassName = "flex flex-row gap-0.5 items-center";

export const WidgetMBudget = () => {
    return (
        <div className="grid grid-cols-[1fr_1fr] px-6.25 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <div className='flex flex-col gap-4'>
                <h1 className='text-[24px] pt-3.75'>Budget</h1>
                <ul>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#FFD000] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#4C4C4C] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#818181] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#FFEFB3] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#584501] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                    <li className={LegendListClassName}>
                        <div className='w-2 h-2 bg-[#987700] rounded-full' />
                        <p className='text-[12px] text-text-primary-light'>Cafe & Restaurants</p>
                    </li>
                </ul>
            </div>
                <div className='flex flex-col justify-center items-end py-10'>
                    <div className='w-32.5 h-32.5'>
                    <DoughnutChart amount="12,500" label="Total for month" />
                </div>
            </div>
        </div>
    );
};