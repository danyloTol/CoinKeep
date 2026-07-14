import { Doughnut } from 'react-chartjs-2';

export interface ChartData {
    cat: string;
    color: string;
    value: number;
}

interface DoughnutChartProps {
    amount: number;
    label?: string;
    chartData: ChartData[];
}

export const DoughnutChart = ({amount, label, chartData}: DoughnutChartProps) => {
    const data = {
        labels: chartData.map((item) => item.cat),
        datasets: [
            {
                data: chartData.map((item) => item.value),
                backgroundColor: chartData.map((item) => item.color),
                borderWidth: 0,
                cutout: '85%',
            },
        ],
    };

    const formatted = amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const [integer, decimal] = formatted.split('.');
    
    return (
        <div className="relative w-full h-full">
            <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
      
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className='text-[10px] text-text-secondary-light'>{label}</span>
                <p className='text-[16px] text-text-primary-light'>
                    ${integer}.<span className='text-text-secondary-light'>{decimal}</span>
                    <span></span>
                </p>
            </div>
        </div>
    );
};