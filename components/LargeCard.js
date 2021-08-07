import Image from 'next/image'

export function LargeCard({img, title, description, buttenText}) {

    return(
        <div className="py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300]px">
                <Image src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                />

                <div className="absolute top-32 left-12 space-y-4">
                    <h1 className="text-4xl w-64 font-semibold">{title}</h1>
                    <p>{description}</p>
                    <button className="text-white bg-black px-4 py-2 
                            rounded-lg text-sm">
                        {buttenText}
                    </button>
                </div>
            </div>
           
        </div>
    )
    
}