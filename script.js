const initialViewState = {
  latitude: 40.7,     // adjust slightly if needed
  longitude: -73.94,  // adjust slightly if needed
  zoom: 9,            // lower value = zoomed out
  bearing: 0,
  pitch: 0
};

let cdVisible = true;
let floodVisible = true;
let redlineVisible = true;

document.getElementById('toggle-flood').addEventListener('click', () => {
    floodLayerVisible = !floodLayerVisible;
    map.setLayoutProperty('flood-risk-layer', 'visibility', floodLayerVisible ? 'visible' : 'none');
    map.setLayoutProperty('flood-risk-outline', 'visibility', floodLayerVisible ? 'visible' : 'none');
  });
  
  document.getElementById('toggle-cdbg').addEventListener('click', () => {
    cdbgLayerVisible = !cdbgLayerVisible;
    map.setLayoutProperty('community-layer', 'visibility', cdbgLayerVisible ? 'visible' : 'none');
  });

  document.getElementById('toggle-redline').addEventListener('click', () => {
    redlineLayerVisible = !redlineLayerVisible;
    map.setLayoutProperty('redline-layer', 'visibility', redlineLayerVisible ? 'visible' : 'none');
  });
  
  
