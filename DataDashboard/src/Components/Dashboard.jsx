import React from 'react';
import { useState } from 'react';


const Dashboard = ({arr, date, filter} ) => { 

    // const [location, setLocation] = useState('New York');

    // function handleLocationChange(event) {
    //     setLocation(event.target.value);
    //   }

    return (
     <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Event</th>
      <th>Avg Price</th>
      <th>Link</th>
    </tr>
  </thead>
  
  {filter === "Filter(i.e concert, comedy)" ? arr.map((viewing, index) => {
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
      <tr key={index}>
        <td>{date = new Date(viewing.datetime_local).toLocaleDateString()}</td>
        <td className={textColor}>{viewing.type.toUpperCase()}</td>
        <td>{viewing.stats.average_price ? `$${viewing.stats.average_price}` : 'N/A'}</td>
        <td><button><a href={viewing.url}>Buy!</a></button></td>
      </tr>
    );
  }) 
  
  : 

  
<tbody> 
  {arr.filter(viewing => viewing.type === filter.toLowerCase()).map((viewing, index) => {

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
        <tr key={index}>
          <td>{date = new Date(viewing.datetime_local).toLocaleDateString()}</td>
          <td className={textColor}>{viewing.type.toUpperCase()}</td>
          <td>{viewing.stats.average_price ? `$${viewing.stats.average_price}` : 'N/A'}</td>
          <td><button><a href={viewing.url}>Buy!</a></button></td>
        </tr>
    );
 })}
 </tbody>

  
  }


</table>
    )
}

export default Dashboard