import Image from 'next/image';
import { SearchIcon,
         GlobeAltIcon,
         MenuIcon,
         UserCircleIcon,
         UsersIcon
         } from '@heroicons/react/solid'
import { useState } from 'react'
import { DateSelection } from './DateSelection';
import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/dist/client/router';

export default function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState("");
    const router = useRouter();
    
    return(
        <header className="sticky top-0 z-50 grid grid-cols-3
                            bg-white shadow-md p-5 md:px-10" >
                                
           {/* left */}
           <div className="relative flex items-center h-8 cursor-pointer my-auto"
                onClick={()=>router.push('/')}
                >
               <Image
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_Bélo.svg/2560px-Airbnb_Logo_Bélo.svg.png" 
                 layout="fill"
                 objectFit="contain"
                 objectPosition="left"
                />
           </div>

           {/* middle */}
           <div className="flex items-center md:border-2 rounded-full py-2 
                            md:shadow-sm">
               <input value={searchInput}
                      onChange={(e)=>setSearchInput(e.target.value)}
                      className="flex-grow outline-none pl-5 bg-transparent
                                 text-gray-600 text-sm" 
                      type="text" 
                      placeholder={placeholder || "Search a place"} 
                      />
               <SearchIcon 
                      className="hidden md:inline-flex h-8 bg-red-400
                      text-white rounded-full p-2 md:mx-2 cursor-pointer"
                      />
           </div>

           {/* right */}
           <div className="flex space-x-4 items-center justify-end text-gray-600">
               <p className="hidden md:inline-flex cursor-pointer">
                   Become a Host
                </p>
               <GlobeAltIcon className="h-8 cursor-pointer"/>
               <div className="flex border-2 rounded-full p-2 space-x-2
                               items-center">
                    <MenuIcon className="h-8 cursor-pointer"/>
                    <UserCircleIcon className="h-8 cursor-pointer"/>
               </div>
           </div>
           {
               searchInput && (<DateSelection 
                                    UsersIcon={UsersIcon} 
                                    setSearchInput={setSearchInput}
                                    router ={router}
                                    searchInput={searchInput}
                                    />)
           }

        </header>
    )
}
