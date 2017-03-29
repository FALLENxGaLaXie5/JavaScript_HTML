//weather.js						Joshua Steward
//Contains several formulas concering the weather.
//////////////////////////////////////////////////

function DewPoint(temp, humidity)
{
	var dewpoint;
	if (humidity >= 50){
	dewpoint = temp - ((100 - humidity)/2.778);
	}
	
	return dewpoint;
}

function WindChill(temp, wind)
{
	var windchill;
	if (temp >= 50){
	windchill = 35.74 + 0.6215 * temp + (0.4275 * temp - 35.75) * Math.pow(wind, 0.16);
	}
	if (wind <= 3) {
	windchill = temp;
	}
	return windchill;
}
