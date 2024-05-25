import { Box, Container, Text, VStack, Flex, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Center of Stockholm
const stockholmPosition = [59.3293, 18.0686];

// Placeholder bike pump stations
const bikePumpStations = [
  { position: [59.33258, 18.0649], name: "Pump Station 1" },
  { position: [59.3275, 18.0675], name: "Pump Station 2" },
  { position: [59.3293, 18.0700], name: "Pump Station 3" },
];

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex
        as="nav"
        bg="blue.600"
        color="white"
        align="center"
        justify="center"
        p={4}
      >
        <Heading size="lg">Bike Pump Stations in Stockholm</Heading>
      </Flex>
      <Box height="calc(100vh - 64px)">
        <MapContainer
          center={stockholmPosition}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumpStations.map((station, index) => (
            <Marker
              key={index}
              position={station.position}
              icon={bikePumpIcon}
            >
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default Index;