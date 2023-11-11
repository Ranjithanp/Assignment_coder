import Cards from "@/Components/Cards";
import Header from "@/Components/Header";
import DonutWrapper from "@/Components/DonutWrapper";
import BarChartWrapper from "@/Components/BarChartWrapper";
import StackChartWrapper from "@/Components/StackChartWrapper"; 
import TableData from "@/Components/TableData";



 export default function MainPage(){
    return(
        <div className="p-2">
        <div className="grid grid-cols-1 gap-6 w-full max-w-screen-xl p-2">
  <div><Header/></div>
  </div>
  <div className=" grid grid-cols-3 gap-2 w-full max-w-screen-xl p-2">
    <div className="w-full  h-full"><Cards name="Sign ups in last 7 days" value="2,130"/></div>
    <div className="w-full h-full"><Cards name="Revenue in last 7 days" value="$4,250"/></div>
    <div className="w-full h-full "><Cards name="Visitors in last 7 days" value="4,210 "/></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-screen-xl p-2 ">
   <div className=" bg-backsecondary"><DonutWrapper/></div>
  <div className=" bg-backsecondary"><BarChartWrapper/></div>
   <div className="bg-backsecondary"><StackChartWrapper/></div>
  <div className=" bg-backsecondary "><TableData/></div> 
  </div>
        </div>
    );
 }