import React from "react";

import Titles from "./Components/Titles";
import  Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY ="0f265fa8c8f3df6c8d823176452027e6";

class App extends React.Component{
  

  state ={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
getWeather = async (e) => {
  const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
  e.preventDefault();
const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
const data = await api_call.json();
if (city  && country ){

this.setState({
  temperature: data.main.temp,
  city: data.name,
  country: data.sys.country,
  humidity: data.main.humidity,
description: data.weather[0].description,
error:""
 });
  }else{
    this.setState({
  temperature:      undefined,
  city:         undefined,
  country:      undefined,
  humidity:     undefined,
description:    undefined,
error:"please enter the values"
  });
  }
}

  render(){
    return (
     
<div>

     <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Titles/>
               </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather ={this.getWeather}/>
                    <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error= {this.state.error}
                    />
                </div>
               </div>
             </div>
            </div>
          </div>
         </div>
    );
  }
};
export default App;