import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import "../build/pages.css"

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

export default class MapComp extends React.Component {

  constructor(props: Props) {
    super(props);
    console.log("props",props)
    const v = props.venue;
    const z = props.venue.zoom?props.venue.zoom: 13.5; 
    this.state = {
      p:v,
      lng:v.lon,
      lat:v.lat,
      zoom: z
    };
  }
  componentWillMount(){
    console.log("MapComp this.componentWillMount this.state",  this.state)
   
    // let v = props.venue;
    // this.setState({lng: v.lon, lat:v.lat , zoom:v.zoom3   });
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    console.log("MapComp componentDidMount this.mapContainer" , this.mapContainer);  
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom:zoom
    });
    map.on('move', () => {
      const { lng, lat } = map.getCenter();
      
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
    map.fitBounds();
  }
  componentDidUpdate(){
    const {lng , lat, zoom, p} = this.state;
    console.log("componentDidUpdate this.state ", this.state  );
  }
  componentWillUpdate(){
    const {lng , lat, zoom, p} = this.state;
    console.log("componentDidUpdate this.state ", this.state  );
  }


  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div className="simpleStatic">

        <div  className="bg-darken75 color-white  round-full txt-s txt-bold simpleStatic">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="canvas mapboxgl-canvas" />
      </div>
    );
  }
}


