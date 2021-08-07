import Head from 'next/head'
import Banner from '../components/Banner'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { LargeCard } from '../components/LargeCard'
import { MediumCard } from '../components/MediumCard'
import { SmallCard } from '../components/SmallCard'

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
     {/* header */}
     <Header />
     {/* banner */}
     <Banner />

     <main className="max-w-7xl mx-auto px-8 sm:px-16">
       <section className=" pt-5">
         <h1 className="text-4xl font-semibold pb-5">
           Explore NearBy
         </h1>
         
         {/* pull some data from a server API end points */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
               xl:grid-cols-4">
              {
                exploreData?.map((data)=>(
                  <SmallCard 
                    key={data.img}
                    img={data.img}
                    distance={data.distance}
                    location={data.location}
                  />
                ))
              }
         </div>
       </section>
       
       <section className="pt-5">
         <h1 className="text-4xl font-semibold pb-5">
           Live Anywhere
         </h1>
         {/* pull some data from a server API end points */}
         <div className="flex space-x-4 overflow-scroll p-3
              scrollbar-hide">
           {
             cardsData?.map((data)=>(
               <MediumCard 
                  key={data.img}
                  img={data.img}
                  title={data.title}
               />
             ))
           }
         </div>
       </section>
       <section>
         <LargeCard img="https://links.papareact.com/4cj"
         title="The Greatest Outdoors"
         description="Wishlist curted by Airbnb"
         buttenText="Get Inspired"
         />
       </section>
     </main>

     <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then(
    (res) => res.json()
    )
  const cardsData =await fetch('https://links.papareact.com/zp1')
  .then(
    (res)=> res.json()
  )

return{
  props:{
    exploreData,
    cardsData
  }
}
}
