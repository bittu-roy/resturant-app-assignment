import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = ({ contactData }) => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Our Resturant</Typography>
        <p>
        Have a question, suggestion, or just want to say hello? We're here to assist you. Feel free to reach out to us using the contact form below. <p>Your feedback is valuable to us, and we appreciate the opportunity to serve you better.</p>
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div>Website: {contactData.website}</div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a href={contactData.social_media.facebook}>
                    Facebook: {contactData.social_media.facebook}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a href={contactData.social_media.instagram}>
                    Instagram: {contactData.social_media.instagram}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <a href={contactData.social_media.facebook}>
                    Twitter: {contactData.social_media.twitter}
                  </a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
