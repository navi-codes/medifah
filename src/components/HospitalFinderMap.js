import React, { Component } from 'react';
import icon from './icon.png';
import './App.css';
import './mapbox-gl.css';
import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const chords =[
{'lat':76.9558,'lan':11.0168,'tipcy':'Hospital 1'},
{'lat':76.8558,'lan':11.1168,'tipcy':'Hospital 2'},
{'lat':76.7558,'lan':11.2168,'tipcy':'Hospital 3'},
{'lat':76.6558,'lan':11.3168,'tipcy':'Hospital 4'},
{'lat':75.9558,'lan':10.0168,'tipcy':'Hospital 5'},
{'lat':76.8558,'lan':10.1168,'tipcy':'Hospital 6'},
{'lat':75.1558,'lan':11.2168,'tipcy':'Hospital 7'},
{'lat':78.6558,'lan':11.3168,'tipcy':'Hospital 8'}
];

class HospitalFinderMap extends Component {
  renderMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmF2YW5lZXRocmFqMTk5OCIsImEiOiJjanQ5cDUwMWUwMzFiNDRvMzIwaWdnZ3owIn0.ZOuwVUQYY7tKfN5-6yFCdw';
    var map = new mapboxgl.Map({
      container: 'root', // container id
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [76, 11], // starting position
      zoom: 10 // starting zoom
    });

    // Add geolocate control to the map.
    map.addControl(new mapboxgl.NavigationControl());
     // Add geolocate control to the map.
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));

    map.on('load', function() {
      map.addSource('geoJsonSource', {
        'type': 'geojson',
        'cluster': true,
        'clusterRadius': 50,
        'data': {
          'type': 'FeatureCollection',
          'features': getJsonFeatures()
          }
      });

      // map.addLayer({
      //   id: "clusters-layer",
      //   type: "circle",
      //   source: "geoJsonSource",
      //   filter: ["has", "point_count"],
      //   paint: {
      //     "circle-color": 'red',
      //     "circle-radius": 20
      //   }
      // });

      // map.addLayer({
      //   id: "cluster-count",
      //   type: "symbol",
      //   source: "geoJsonSource",
      //   filter: ["has", "point_count"],
      //   layout: {
      //     "text-field": "{point_count_abbreviated}",
      //     "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
      //     "text-size": 12
      //   }
      // });
      map.loadImage(icon, function(error, image) {
        if (error) throw error;
        map.addImage('icon', image);
        map.addLayer({
          'id': 'icon-layer',
          'type': 'symbol',
          source: 'geoJsonSource',
          'layout': {
            'icon-image': 'icon',
            'icon-size': 0.15
          }
        });
      });
    });


    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });


    map.on('mouseenter', 'icon-layer', function(e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';

      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
    });


    map.on('mouseleave', 'icon-layer', function() {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }
  //{this.renderMap()}

  render() {
    return (
      <div className="App">
      <header className="App-header">

      </header>
      {this.renderMap()}

      </div>

    );
  }
}

export default HospitalFinderMap;

function getJsonFeatures () {
  return chords.map(function(chord){
    return {
      'type': 'Feature',
      'properties': {
        'description': '<strong>'+chord.tipcy+'</strong>',
        'icon': 'theatre'
      },
      'geometry': {
        'type': 'Point',
        'coordinates': [chord.lat,chord.lan]
      }
    };
  });
}