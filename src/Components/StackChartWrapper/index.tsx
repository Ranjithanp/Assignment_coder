import dynamic from 'next/dynamic';


 const DynamicStackChart = dynamic(() => import('../StackChart'), {ssr: false });

export default function StackChartWrapper() {
  return (
    <div>
    
    <DynamicStackChart/>
    
    </div>
  );
}