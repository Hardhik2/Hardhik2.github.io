console.log("BasicMap.js loaded");
// CPCC Coordinates: 35.2176665 N,80.831473 W ->35.2176665,-80.831473
let map= L.map("map",{
  center:[35.2176665,-80.831473],
  zoom:16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
L.marker([35.2176665,-80.831473],{
  title:"Hello From CPCC!!"
}).bindPopup(`
<center>
<h2>Hello From CPCC!!</h2>
<hr>
<a href="https://www.cpcc.edu">Click Here to visit CPCC's Website</a><br>
<iframe width="280" height="160" src="https://www.youtube.com/embed/wCyHWiYPiXU?si=YoXIW0tH59LCdBnu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<hr>
<p>[URL:https://www.youtube.com/@centralpiedmontcommunityco39/videos]</p>
</center>
`)
  .addTo(map);
