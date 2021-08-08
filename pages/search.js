import { format } from "date-fns";
import { useRouter } from "next/dist/client/router";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import RoomFilterButton from "../components/RoomFilterButton";
import RoomSerchResults from "../components/RoomSerchResults";

export default function Search({roomSerchResults}) {
const [roomFilterState, setRoomFilteState]= ([roomFilter]);
const router = useRouter();
const { location, startDate, endDate, nofGuests } = router.query;
const formatedStartDate = format(new Date(startDate), "dd MMM yy")
const formatedEndDate = format(new Date(endDate), "dd MMM yy")
const range = `${formatedStartDate} - ${formatedEndDate}`
    return(
        <div>
            <Header placeholder= {`${ location } | ${ formatedStartDate } - ${ formatedEndDate } | ${ nofGuests } `}/>
            <main>
                <section>
                    <p className="text-xs pt-10 pl-5">
                        300+ Stays  - { range } - for { nofGuests } guests
                    </p>
                    <h1 className="text-xl md:text-3xl font-semibold pl-5 pb-2"> Stays in {location} </h1>
                    <div className="hidden lg:inline-flex space-x-2 m-5">
                        {
                        roomFilterState?.map(filter=> <RoomFilterButton filter={filter}/>)  
                        }
                    </div>
                    {
                        roomSerchResults?.map(result=>(
                            <RoomSerchResults key={result.lat} result={result} />
                        ))
                    }
                </section>
                <section>
                   
                    
                </section>
            </main>
            <Footer />
        </div>
    )
}
const roomFilter= [
    "Cancellation flexibility",
    "Type of Place",
    "Price",
    "Rooms and Beds",
    "More Filter"
];

export async function getServerSideProps() {
    const roomSerchResults = await fetch('https://links.papareact.com/isz')
    .then((res) => res.json())

    return{
        props: {
            roomSerchResults
        }
    }
}

