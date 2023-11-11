"use client"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,

} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
)
const data = {
  labels: ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','jul','Aug','Sept','Oct','Nov','Dec'],
  datasets: [{
    label: 'Task Completed',
   
    data: [12, 19, 3, 5, 2, 3,9,5,2,4,6,8],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
    
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
   
    ],
    borderWidth: 1
  }]
}
const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (context:any) => {
          const label = context.dataset.label || '';
          const value = context.parsed.y || 0;
          return `${label}: ${value}`;
        },
      },
    },
  },
}
export default function BarChart() {
  
 
    return (
      <div className=' w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto '>
        <h2 className='m-3'>Project Task Completed</h2>
        <Bar
          data={data}
          options={options}
      
        
        />
      </div>
    );
  }
