 
 export default function Cards(props:any){
    return(
        <>
         <div className="grid grid-cols-1 gap-4 bg-backsecondary p-2" style={{height:'10rem'}}>
  <div className="text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl ">{props.name}</div>
  <div className="sm:text-s md:text-m flex items-center justify-center fontWeight-bold" >
    {props.value}
  </div>
  </div>
        </>
    )
 }