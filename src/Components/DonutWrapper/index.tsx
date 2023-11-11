import dynamic from 'next/dynamic';

const DynamicDonutChart = dynamic(() => import('../Donut'), {ssr: false });


export default function DonutWrapper() {
  return (
    <div>
    <DynamicDonutChart />
  
    
    </div>
  );
}