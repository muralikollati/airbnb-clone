import { useState } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';    
import getCenter from 'geolib/es/getCenter';
import Image from 'next/image'

export default function Map({roomSerchResults}) {
      const [selectedLoction, setSelectedLocation] =useState({})
      const cordinates = roomSerchResults.map(result=>({
        latitude:result.lat,
        longitude:result.long
      }))
      const center = getCenter(cordinates)
      const [viewport, setViewport] = useState({
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10
      });
    return(
        <ReactMapGL 
            mapStyle="mapbox://styles/muraliii/cks3hf7mt3psw17qwsglm47rn"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            width="100%"
            height="100%"
            onViewportChange={(newViewPort)=>setViewport(newViewPort)}
        >
        {
        roomSerchResults.map((result)=>(
            <div key={result.long}>
                <Marker 
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                >
                    <p onMouseOver={()=>setSelectedLocation(result)}
                        className="cursor-pointer text-2xl animate-bounce">
                        📌 
                    </p>
                </Marker>
                    {
                      ( selectedLoction.long === result.long )?(
                        <Popup
                            onClose={()=>setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={result.lat}
                            longitude={result.long}
                            captureScroll={true}
                        >
                            <div className="z-50 w-40 h-40">
                                <Image src={result.img} 
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                                <p className="absolute text-white bg-black bg-opacity-60
                                    text-xs font-extralight rounded-md p-1 text-center
                                    ml-10  mr-1" 
                                >{selectedLoction.title}
                                </p>
                            </div>
                        </Popup>
                      ):( false )
                    }
            </div>
        )) 
        }
        </ReactMapGL>
    )
}