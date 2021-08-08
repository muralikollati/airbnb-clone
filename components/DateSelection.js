import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';

export function DateSelection({UsersIcon, setSearchInput, router, searchInput}) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [nofGuests, setNofGuests] = useState(1)

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
     const handleSelect = (ranges) =>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
      }
    const searchRooms =()=> {
        router.push({
            pathname:'/search',
            query:{
                location : searchInput,
                startDate : startDate.toISOString(),
                endDate:endDate.toISOString(),
                nofGuests
            }
        })
      setSearchInput("")
    }
   return(
       <div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5E61"]}
                onChange={handleSelect}
            />
            <div className="flex  items-center border-b pb-2">
                <h1 className="text-2xl flex-grow font-semibold" >
                    Number of Guest
                </h1>
                <UsersIcon className="h-5" />
                <input value={nofGuests}
                       onChange={(e)=>setNofGuests(e.target.value)}
                       min={1}
                       type="number"
                       className="w-12 pl-3 text-2xl font-semibold
                       text-red-400 outline-none cursor-pointer"  
                       />
            </div>
            <div className="flex justify-around pt-4">
                <h1 onClick={()=>setSearchInput("")}
                    className="cursor-pointer hover:bg-gray-200
                    px-4 py-2 rounded-lg transition transform 
                    duration-300 easy-out text-gray-400
                    ">Cancel</h1>
                <h1 onClick={searchRooms}
                    className="text-red-400
                    cursor-pointer hover:bg-gray-200
                    px-4 py-2 rounded-lg transition transform 
                    duration-300 easy-out">
                    Search</h1>
            </div>
       </div>
   ) 
}