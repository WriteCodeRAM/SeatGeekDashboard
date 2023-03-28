import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './Components/Card'
import { useEffect } from 'react'
import dashboardLogo from './icons8-dashboard-layout-24.png'
import Dashboard from './Components/Dashboard'




const Filter = ({location, handleLocationChange, handleSpotChange, filter, handleFilter, handleSpotFilter, handleResetFilter}) => {
  return (
    <form action="">

    <div className="search-data">
    <input type="text" value={filter} onChange={handleFilter}/>
    <button className='search-btn' onClick={handleSpotFilter}>Apply Filter</button>
    <button className='search-btn' onClick={handleResetFilter}>Reset Filter</button>
    </div>

    <div className="change-data">
    <input type="text" value={location} onChange={handleLocationChange}/>
    <button className='search-btn' onClick={handleSpotChange}>change</button>
    </div>
        
        </form>
  )
}



function App() {
  const [data, setData] = useState([])
  const [location ,setLocation] = useState('Miami')
  const [spot , setSpot] = useState('Miami')
  const [bool, setBool] = useState(false)
  const [filter, setFilter] = useState("Filter(i.e concert, comedy)")
  const [spotFilter, setSpotFilter] = useState("Filter(i.e concert, comedy)")
  // const [isModalOpen, setIsModalOpen] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.seatgeek.com/2/events', {
          params: {
            client_id: 'MzI2NDY5NjZ8MTY3OTc5Mzc4MC42NjQ3MTI',
            per_page: 51,
            'venue.city': `${spot}`,
          },
        });
        console.log(response.data.events);
        setData(response.data.events);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [spot]);

  

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleResetFilter(e){
e.preventDefault()
    setSpotFilter("Filter(i.e concert, comedy)")
  }
  function handleFilter(e){
    setFilter(e.target.value)
  }

  function handleSpotFilter(e){
    e.preventDefault()
    setSpotFilter(filter)
  }


  function handleSpotChange(e){
    e.preventDefault()
    setSpot(location)
  }

  


  return (
    <div className="App">
      <div className="sidebar">
        <h1 className='sidebar-h1'>{`${spot} events!`}</h1>
        <div className="sidebar-div"><h2 onClick={()=> setBool(false)}> 🏠 Home</h2></div>
        <div className="sidebar-div"><img src={dashboardLogo} alt="" /> <h2 onClick={()=> setBool(true)}> Dashboard</h2></div>

        {/* <div className="sidebar-div"><h2>🔎</h2> <input type="text" /> </div> */}
        <div className="sidebar-div"><h2>ℹ️ About</h2></div>
      </div>
      <div className="content">
        <div className={bool === false ? "card-container" : "container"}> 
         {bool === false ? data.map((viewing, index) => {
          let textColor = '';

          switch (viewing.type) {
            case 'tennis':
              textColor = 'green';
              break;
            case 'mma':
              textColor = 'red';
              break;
            case 'nba':
              textColor = 'orange';
              break;
            case 'mlb': 
            textColor = 'yellow'; 
            break; 
            case 'comedy': 
            textColor = 'purple'; 
            break; 
            case 'concert': 
            textColor = 'blue'; 
            break; 
            default:
              textColor = 'black';
          }
          
         
         return (
          <Card key={index} title={viewing.short_title.length > 40 ? viewing.short_title.slice(0 , 39) : viewing.short_title  }
           image={viewing.performers[0].image} 
           price={viewing.stats.average_price ? `$${viewing.stats.average_price}` : 'N/A'} 
           link={viewing.url} date={new Date(viewing.datetime_local).toLocaleDateString()} 
           type={viewing.type.toUpperCase()}
            textColor={textColor}
           />
         ) })

         : (
          <>
         <Filter location={location} handleLocationChange={handleLocationChange} handleSpotChange={handleSpotChange} filter={filter} handleFilter={handleFilter} handleSpotFilter={handleSpotFilter} handleResetFilter={handleResetFilter}/>
         <Dashboard arr={data} onChange={handleLocationChange} filter={spotFilter}/> 
         </>

         )
         }

        </div>
  
      </div>
    </div>
  );
  
}

export default App
