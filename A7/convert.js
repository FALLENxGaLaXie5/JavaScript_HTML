// convert.js				Joshua Steward
// Functions for converting between English and Metric values
///////////////////////////////////////////////////////////////

function InchesToCentimeters(inches) 
// Assumes: inches is a distance, measured in inches 
// Returns: the corresponding distance in centimeters
{
  var cm;

  cm = inches * 2.54;
  return cm;
}

function CentimetersToInches(cm) 
// Assumes: cm is a distance, measured in centimeters 
// Returns: the corresponding distance in inches
{
  var inches;

  inches = cm / 2.54;
  return inches;
}


function PoundsToKilograms(lbs)
//Assumes: lbs is a weight, measured in pounds
//Returns: corresponding weight in kilograms
{
  var kilo; 
  
  kilo = lbs / 2.205;
  return kilo;
  }
  

function KilogramsToPounds(kilo)
//Assumes: kilo is a mass measured in kilograms
//Returns: corresponding mass in pounds
{
	var lbs;
	
	lbs= kilo * 2.205;
	return lbs;
}


function SquareFeetToSquareMeters(feet)
//Assumes: square feet is an area, measured in feet squared
//Returns: corresponding area in meters squared
{
	var meters;
	
	meters= feet / 10.764;
	return meters;
}


function SquareMetersToSquareFeet(meters)
//Assumes: meters is measured as an area squared
//Returns: corresponding area in feet squared
{
	var feet;
	
	feet= meters * 10.764;
	return feet;
}
	
  