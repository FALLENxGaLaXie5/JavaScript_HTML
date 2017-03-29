//formulas.js				Joshua Steward
//Contains distance function for calculating whether two circles intersect.
//////////////////////////////////////////////

function DistanceCalculator(xTWO, xONE, yTWO, yONE)
{
	var distance;
	distance= Math.sqrt(Math.pow((xTWO - xONE),(2))+Math.pow((yTWO-yONE),(2)));
	return distance;
	
}
