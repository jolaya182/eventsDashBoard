import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import Pagination from "./components/Pagination";
import {pages} from "./build/pages.scss"

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class Application extends React.Component {

//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       lng: 5,
//       lat: 34,
//       zoom: 1.5
//     };
//   }
// componentWillMount(){
//   console.log("Application componentWillMount this.mapContainer", this.mapContainer);
// }
//   componentDidMount() {
//     const { lng, lat, zoom } = this.state;
// console.log("Application componentDidMount this.mapContainer", this.mapContainer);
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom
//     });

//     map.on('move', () => {
//       const { lng, lat } = map.getCenter();

//       this.setState({
//         lng: lng.toFixed(4),
//         lat: lat.toFixed(4),
//         zoom: map.getZoom().toFixed(2)
//       });
//     });
//   }

  render() {
    // const { lng, lat, zoom } = this.state;

    return (
      <div>
      <Pagination/>
        {/* <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" /> */}
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));
