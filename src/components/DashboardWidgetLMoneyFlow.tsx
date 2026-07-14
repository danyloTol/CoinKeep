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
        <div className="flex flex-col px-6.25 w-full outline-1 outline-text-secondary-light rounded-[30px]">
            <div></div>
            <div>
                <BarChart labels={labels} values={values} />
            </div>
        </div>
    )
}