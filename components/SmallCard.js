import Image from  "next/image"
export function SmallCard({img, distance, location}) {

    return(
        <div className="flex items-center m-2 mt-5 space-x-4 
         cursor-pointer rounded-lg hover:bg-gray-100 hover:scale-105
         transition transform duration-200 ease-out">
            {/* left */}
            <div className="relative h-16 w-16">
            <Image src={img}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
            />
            </div>
            
            {/* right */}
            <div>
                <p>{location}</p>
                <p className="text-gray-500">{distance}</p>
            </div>
        </div>
    )
    
}