import logo from "./logo.svg";
import "./App.css";
import Card from "./card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  var priceCard = [
    {
           
      name: "FREE",
      price: "0",
      feature: [
        {
          line: "Single User",
          boolean:true
        },
        {
          line: "5GB Storage",
          boolean:true
        },
        {
          line: "Unlimited Public Projects",
          boolean:true
        },
        {
          line: "Community Access",
          boolean:true
        },
        
        {
          line1: "Unlimited Private Projects",
          boolean:false
        },
        {
          line1: "Dedicated Phone Support",
          boolean:false
        },
        {
          line1: "Free Subdomain",
          boolean:false
        },
        {
          line1: "Monthly Status Reports",
          boolean:false
        }
      ]
    },
    {
      name: "PLUS",
      price: "9",
      feature: [
        {
          line: "5 Users",
          boolean:true
        },
        {
          line: "50GB Storage",
          boolean:true
        },
        {
          line: "Unlimited Public Projects",
          boolean:true
        },
        {
          line: "Community Access",
          boolean:true
        },
        {
          line: "Unlimited Private Projects",
          boolean:true
        },
        {
          line: "Dedicated Phone Support",
          boolean:true
        },
        {
          line: "Free Subdomain",
          boolean:true
        },
        
        {
          line1: "Monthly Status Reports",
          boolean:false
        }
      ]
    },
    {
      name: "PRO",
      price: "49",
      feature: [
        {
          line: "Unlimited Users",
          boolean:true
        },
        {
          line: "150GB Storage",
          boolean:true
        },
        {
          line: "Unlimited Public Projects",
          boolean:true
        },
        {
          line: "Community Access",
          boolean:true
        },
        {
          line: "Unlimited Private Projects",
          boolean:true
        },
        {
          line: "Dedicated Phone Support",
          boolean:true
        },
        {
          line: "Unlimited Free Subdomains",
          boolean:true
        },
        {
          line: "Monthly Status Reports",
          boolean:true
        },
      ],
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {priceCard.map((card) => {
            return <Card card={card}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;