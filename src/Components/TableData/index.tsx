
export default function TableData(){
    return(
        <div>
    <table className="table-auto text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl
      bg-backsecondary w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto" >
         <caption className="caption-top bg-backsecondary p-4 fontWeight-bold">Top Performing support Agent</caption>
    <thead className="p-7">
      <tr >
        <th className="p-3">Agent</th>
        <th className="p-3">Total Calls</th>
        <th className="p-3">Answered Calls</th>
        <th className="p-3">Resolved</th>
      </tr>
    </thead>
    <tbody className="p-5 text-center">
      <tr >
        <td  className="p-5">Alex </td>
        <td  className="p-5">90</td>
        <td  className="p-5">90</td>
        <td  className="p-5">80</td>
      </tr>
      <tr className="p-7">
        <td  className="p-5">Bob</td>
        <td  className="p-5">90</td>
        <td  className="p-5">40</td>
        <td  className="p-5">80</td>
      </tr>
      <tr>
        <td  className="p-5">Cindy </td>
        <td  className="p-5">90</td>
        <td  className="p-5">70</td>
        <td  className="p-5">80</td>
      </tr>
      <tr>
        <td  className="p-5">Dana </td>
        <td  className="p-5">20</td>
        <td  className="p-5">60</td>
        <td  className="p-5">80</td>
      </tr>
      <tr className="p-7">
        <td  className="p-5">Eric </td>
        <td  className="p-5">90</td>
        <td  className="p-5">50</td>
        <td  className="p-5">80</td>
      </tr>
    </tbody>
  </table>
  </div>
  );
}