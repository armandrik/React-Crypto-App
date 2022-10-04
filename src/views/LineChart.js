import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const LineChart = ({ info }) => {

    const price24H = info.market_data ? info.market_data.price_change_percentage_24h : null;
    const price7D = info.market_data ? info.market_data.price_change_percentage_7d : null;
    const price14D = info.market_data ? info.market_data.price_change_percentage_14d : null;
    const price30D = info.market_data ? info.market_data.price_change_percentage_30d : null;
    const price60D = info.market_data ? info.market_data.price_change_percentage_60d : null;
    const price200D = info.market_data ? info.market_data.price_change_percentage_200d : null;
    const price1Y = info.market_data ? info.market_data.price_change_percentage_1y : null;

    return (
        <div className='line-chart-container'>
            <Line width={400} height={300} options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js',
                    },
                },
            }} data={{
                labels : ['24h', '7d', '14d', '30d', '60d', '200d', '1y'],
                datasets: [
                    {
                        label: 'price change Chart',
                        data: [price24H, price7D, price14D,price30D, price60D, price200D, price1Y],
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                        fill: false,
                        tension: 0.1
                    }
                ],
            }} />
        </div>
    )
}
