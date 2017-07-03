import React, {Component} from 'react';

class GoogleMap extends Component {
  // this function excute after render()
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom:12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    // ref is the reference to real DOM html element
    return <div ref="map"/>
  }
}

export default GoogleMap;
