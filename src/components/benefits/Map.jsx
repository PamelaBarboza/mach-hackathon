import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/grommet-icons/close";
import status from "../../img/status.png";
import GoogleMapReact from "google-map-react";
import "./map.css";
import Pin from "./Pin";

const Map = (props) => {
  return (
    <Fragment>
      <div className="container-map">
        <img src={status} alt="img-status" />
        <Icon icon={closeIcon} onClick={props.close} />
        <div className="map-title">
          <h3>Encuentra tus descuentos cercanos</h3>
        </div>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCZjjtDiV4gKhY2ITn09Xmk-RHRJ-ehC60",
            }}
            defaultCenter={{ lng: -70.64827, lat: -33.45694 }}
            defaultZoom={11}
          >
            <Pin lat={-33.516778} lng={-70.602608} text={"Movistar"} />
            <Pin lat={-33.518598} lng={-70.600051} text={"House Bar"} />
            <Pin lat={-33.4131} lng={-70.608524} text={"Cabify"} />
            <Pin lat={-33.331557} lng={-70.701661} text={"Lippi"} />
            <Pin lat={-33.442307} lng={-70.630272} text={"Haka Honu"} />
            <Pin lat={-33.431727} lng={-70.619762} text={"Rappi"} />
            <Pin lat={-33.422761} lng={-70.611786} text={"Dunkin' Donuts"} />
            <Pin lat={-33.503926} lng={-70.652996} text={"Dunkin' Donuts"} />
          </GoogleMapReact>
        </div>
      </div>
    </Fragment>
  );
};

export default Map;
