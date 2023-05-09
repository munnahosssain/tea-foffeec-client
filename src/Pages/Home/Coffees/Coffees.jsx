import React from "react";
import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import CoffeeCart from "../CoffeeCart/CoffeeCart";

const Coffees = ({ coffees }) => {
  const { name, chef, supplier, taste, category, details, photo } = coffees;

  return (
    <Grid className="coffees-bg">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={4}>
          <Container>
            {coffees.map(coffee => (
              <CoffeeCart key={coffee._id} coffee={coffee} />
            ))}
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Coffees;
