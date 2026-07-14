import { Bar } from 'react-chartjs-2';

interface BarChatProps {
    labels: string[];
    values: number[];
}

export const BarChart = ({labels, values}: BarChatProps) => {
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'expense',
                data: values,
                backgroundColor: '#3b82f6',
                borderRadius: 8,
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
        },
        scales: {
            x: { grid: { display: false} },
            y: { beginAtZero: true}
        }
    };

    return <Bar data={data} options={options} />
}