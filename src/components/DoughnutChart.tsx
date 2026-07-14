import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    amount?: string;
    label?: string;
}

export const DoughnutChart = ({amount, label}: DoughnutChartProps) => {
    const data = {
        labels: ['expense', 'balance'],
        datasets: [
            {
                data: [20, 10, 20, 25, 10, 14],
                backgroundColor: ['#FFD000', '#4C4C4C', '#818181', '#FFEFB3', '#584501', '#987700'],
                borderWidth: 0,
                cutout: '85%',
            },
        ],
    };
    
    return (
        <div className="relative w-full h-full">
            <Doughnut data={data} options={{ plugins: { legend: { display: false } } }} />
      
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className='text-[10px] text-text-secondary-light'>{label}</span>
                <p className='text-[16px]'>
                    <span className='text-text-primary-light'>$</span>
                    <span className='text-text-primary-light'>5,950</span>
                    <span className='text-text-secondary-light'>.00</span>
                    <span></span>
                </p>
            </div>
        </div>
    );
};