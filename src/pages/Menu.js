import React, { useState } from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = ({ menuData }) => {
  console.log(menuData);
  return (
    <Layout>
      {menuData.map((menu, index) => (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          key={index}
        >
          <Typography variant="h5" gutterBottom component={"div"}>
            {menu.name}
          </Typography>
          <br />
          {menu.items.map((item, index) => (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={index}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      ))}
    </Layout>
  );
};

export default Menu;
