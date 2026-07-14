import { ProgressBar } from './ProgressBar'

const goalsList = [
    {name: 'MacBook Pro', goal: 150000, amount: 91500},
    {name: 'New car', goal: 150000, amount: 95000},
    {name: 'New house', goal: 150000, amount: 300000},
]

export const WidgetMSavingGoals = () => {
    const formatted = (num: number) => {
        return num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
    })};

    return (
        <div className="flex flex-col gap 4.75 px-6.25 py-3 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <h1 className='text-[24px] text-text-primary-light'>Saving goals</h1>
            {goalsList.map((item) => (
                <div>
                    <div className='w-full flex flex-row justify-between'>
                        <p className='text-[13px] text-text-primary-light'>{item.name}</p>
                        <p className='text-[13px] text-brand'>${formatted(item.goal)}</p>
                    </div>
                    <ProgressBar bgColor='bg-brand-light' color='bg-brand' goal={item.goal} amount={item.amount} />
                </div>
            ))}
        </div>
    );
};