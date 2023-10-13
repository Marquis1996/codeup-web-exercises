(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

    console.log('Adding "The Sun" to the beginning of the planets array.');
    let addTheSun = planets.unshift("TheSun")
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
   // console.log(planets);

    let addplutoend = planets.push("Pluto")
    console.log(planets)

   // console.log('Removing "The Sun" from the beginning of the planets array.');
   // console.log(planets);

    let removesun = planets.shift()
    console.log(planets)

    //console.log('Removing "Pluto" from the end of the planets array.');
   // console.log(planets);

    planets.pop()
    console.log(planets)

   // console.log('Finding and logging the index of "Earth" in the planets array.');

   const earthindex = planets.indexOf("Earth")
    console.log(earthindex)


   // console.log("Reversing the order of the planets array.");
   // console.log(planets);

    let reversethepl = planets.reverse();
    console.log(reversethepl);


   // console.log("Sorting the planets array.");
   // console.log(planets);

    let sorttheplan = planets.sort();
    console.log(sorttheplan);

})();



(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
let plane = planetsString.split("|")
     console.log(plane);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    let jointheplan = plane.join("<br>");
   console.log(jointheplan)


     /*
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

})();