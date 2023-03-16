import { useState, useEffect } from "react";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerPosition from "./MarkerPosition";

const Map = () => {
  const [address, setAddress] = useState();

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${API_KEY}&ipAddress`
        );
        const data = await res.json();
        setAddress(data);
      };

      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  return (
    <div>
      {address && (
        <>
          <MapContainer
            center={[address?.location.lat, address?.location.lng]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100vh", width: "100vw" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerPosition address={address} />
          </MapContainer>
        </>
      )}
    </div>
  );
};

export default Map;
