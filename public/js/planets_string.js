(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?
    planetsString = planetsArray.join('<br>');
    console.log(planetsString);
    document.getElementById('planets').innerHTML = planetsString;
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    var planetsStringList = planetsArray.join('</li><li>');
    planetsStringList = planetsStringList.split(',');
    planetsStringList.unshift('<ul><li>');
    planetsStringList.push('</li></ul>');
    planetsStringList = planetsStringList.join('');

    console.log(planetsStringList);
    document.getElementById('planetsList').innerHTML = planetsStringList;
})();
