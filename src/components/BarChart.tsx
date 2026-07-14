import { callback, color } from 'chart.js/helpers';
import { Bar } from 'react-chartjs-2';

interface BarChatProps {
    labels: string[];
    incomeValues: number[];
    expenseValues: number[];
}

export const BarChart = ({labels, incomeValues, expenseValues}: BarChatProps) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'income',
                data: incomeValues,
                backgroundColor: '#FFD000',
                borderRadius: 8,
                barThickness: 9,
            },
            {
                label: 'expense',
                data: expenseValues,
                backgroundColor: '#987700',
                borderRadius: 8,
                barThickness: 9,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false }
        },
        scales: {
            x: { grid: { display: false},
                ticks: {
                    color: '#747474',
                    font: {
                        family: 'Hammersmith One',
                        size: 12,
                    }
                }
            },
            y: { 
                beginAtZero: true,
                ticks: {
                    color: '#747474',
                    font: {
                        family: 'Hammersmith One',
                        size: 12,
                    },
                    callback: function(value: any) {
                        return '$' + value;
                    }
                }    
            }
        }
    };

    return <Bar data={data} options={options} />
}