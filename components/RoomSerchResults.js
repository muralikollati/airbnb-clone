import Image from "next/dist/client/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

export default function RoomSerchResults({result}) {
    return(
        <div className="flex  p-5 md:p-10 space-x-6 cursor-pointer
             hover:shadow-xl transistion duration-300  hover:border-t">
              <div className="relative w-40 h-42 md:w-80 md:h-60 flex-shrink-0 
                   hover:scale-105 transistion duration-300 ease-out hover:opacity-70">        
                    <Image src={result.img} 
                    layout="fill"
                    className="rounded-xl"
                    objectFit="cover"
                    />
              </div>
              <div className="flex flex-col flex-grow ">
                    <div className="flex-grow">
                        <div className="flex">
                            <p className="text-xs md:text-sm text-gray-500 flex-grow">{result.location}</p>  
                            <HeartIcon className="h-4 md:h-6 cursor-pointer"/>
                        </div>
                        <h1 className="font-semibold text-sm md:text-lg ">{result.title}</h1>
                        <p className="text-xs md:text-sm text-gray-500 pb-5">{result.description}</p>
                    </div>
                    <div className="flex items-center">
                        <StarIcon className="h-4 md:h-6 text-red-500 cursor-pointer"/>
                        <p className="text-xs md:text-lg flex-grow">{result.star}</p>
                        <div>
                            <p className="text-xs md:text-lg font-semibold ">{result.price}</p>
                            <p className="text-xs md:text-lg font-extralight ">{result.total}</p>
                        </div>
                    </div>  
                        
                    
              </div>
              
        </div>
        
    )
    
}