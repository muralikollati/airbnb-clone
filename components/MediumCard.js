import Image from "next/image"

export function MediumCard({img, title}) {
    return(
        <div className="hover:scale-105 transition transform duration-300
              ease-out">
            <div className="relative h-80 w-80 ">
                <Image 
                src ={img} 
                layout="fill"
                className="rounded-lg"
                />
            </div>
            <h1 className="text-2xl mt-2">{title}</h1>
        </div>
          
    )
}