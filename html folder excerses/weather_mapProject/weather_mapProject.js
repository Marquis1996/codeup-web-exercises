import {createMap, getAddress, handleDragEnd, marker, popup} from "../../ApI/MapBoxAPI.js";



createMap("Map",[-98.4946,29.4252], 9,)
getAddress(29.4252,98.4946)

 marker
    .setLngLat(-98.4946,29.4252)
    .addTo(Map)
    .setPopup(popup);
handleDragEnd(e, Map)
marker.on("dragend", (e) => {
    handleDragEnd(e, Map);
});