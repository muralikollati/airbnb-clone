import About from "./About"
import { FooterList } from "./FooterList"

export function Footer() {
    return(
        <div className="grid grid-cols-2  lg:grid-cols-3
        xl:grid-cols-4 bg-gray-100 p-5 text-gray-500 pl-20">
           {
               footerData.map((data)=>(
                   <FooterList 
                        key={data.title}
                        title={data.title}
                        items={data.items}
                   />
                  
               ))
           }
        </div>
    )
    
}

const footerData=[
    {
      "title": "ABOUT",
      "items": [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnb Luxe"
      ]
    },
  {
      "title": "COMMUNITY",
      "items": [
        "Diversity & Belonging",
        "Accessibility",
        "Airbnb Associates",
        "Frontline Stays",
        "Guest Referrals",
        "Airbnb.org"
      ]
    },
    {
        "title": "HOST",
        "items": [
            "Host your home",
            "Host an Online Experience",
            "Host an Experience",
            "Responsible hosting",
            "Resource Centre",
            "Community Centre"
        ]
      },
      {
        "title": "HOST",
        "items": [
          "Our COVID-19 Response",
          "Help Centre",
          "Cancellation options",
          "Neighbourhood Support",
          "Trust & Safety"
        ]
      },
    
  ]
 