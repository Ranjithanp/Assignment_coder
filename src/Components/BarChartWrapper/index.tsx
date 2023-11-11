import dynamic from 'next/dynamic';


 const DynamicBarChart = dynamic(() => import('../BarChart'), {ssr: false });
export default function BarChartWrapper() {
  return (
    <div>

    <DynamicBarChart/> 
    </div>
  );
}