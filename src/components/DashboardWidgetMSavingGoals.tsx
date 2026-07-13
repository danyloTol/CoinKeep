import { ProgressBar } from './ProgressBar'

const bgProgressBar = 'bg-brand-light';
const progressBarClr = 'bg-brand';

export const WidgetMSavingGoals = () => {
    return (
        <div className="flex flex-col gap 4.75 px-6.25 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <h1 className='text-[24px] text-text-primary-light'>Saving goals</h1>
            <div>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-[13px] text-text-primary-light'>MacBook Pro</p>
                    <p className='text-[13px] text-brand'>$150,000</p>
                </div>
                <ProgressBar bgColor={bgProgressBar} color={progressBarClr} percentage={25} />
            </div>
            <div>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-[13px] text-text-primary-light'>New car</p>
                    <p className='text-[13px] text-brand'>$150,000</p>
                </div>
                <ProgressBar bgColor={bgProgressBar} color={progressBarClr} percentage={42} />
            </div>
            <div>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-[13px] text-text-primary-light'>New house</p>
                    <p className='text-[13px] text-brand'>$150,000</p>
                </div>
                <ProgressBar bgColor={bgProgressBar} color={progressBarClr} percentage={6} />
            </div>
        </div>
    );
};