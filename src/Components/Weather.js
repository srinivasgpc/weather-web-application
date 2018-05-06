import React from "react";

const Weather =(props) => (

<div>
			{
				props.city && props.country && <p className="weather__key"> Location: 
				 <span>{props.city},{props.country}</span>
				</p>
			}
			{
				props.temperature && <p className="weather__key">Temperature: <span>{ props.temperature }</span>
				</p>
			}
			{
				props.humidity && <p className="weather__key">Humidity: <span>{props.humidity}</span></p>
			}
			{
				props.description && <p className="weather__key">Conditions: <span>{ props.description }</span></p>
			}
			{
				props.error && <p className="weather__error">{props.error}</p>
			}

			</div>
	);

export default Weather;