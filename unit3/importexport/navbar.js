function navbar(){ 
     return `<div id="home">
   <a href="/importexport/index.html" class="a1">Home</a>
    </div>
    <div id="searchbar">
   
       <input type="text" value="" placeholder="Search for recipe" id="search1">

<button id="searchbutton" onclick="search123()">Search</button>  
</div>
<div id="getrecipe">
<a href="/importexport/rofday.html" class="a1">Get Recipe of day</a>
</div>

<div id="latest">
<a class="a1" href="/importexport/latestrecipe.html">Latest Recipe</a>`;
}
export default navbar;