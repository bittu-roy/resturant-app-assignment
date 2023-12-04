import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = ({ aboutData }) => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">{aboutData.name}:</Typography>
        <p>{aboutData.ambiance.description}</p>
        <br />
        <br />

        <div><b>Location:</b> 
          <div>{aboutData.location.address}.</div>
          </div>
        <br />
        <br />
        <iframe
          title="Google Map"
          src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3024.236767517269!2d${aboutData.location.longitude}!3d${aboutData.location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sin!4v1701667814071!5m2!1sen!2sin`}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
        <br />
        <br/>
        <div>
          <h4>About Our Chef</h4>
          <div><b>"{aboutData.chef.name}"</b></div>
          <div>{aboutData.chef.bio}</div>
          <div><b>Signature Dish:  </b> {aboutData.chef.signature_dish}</div>
        </div>
      </Box>
    </Layout>
  );
};

export default About;
