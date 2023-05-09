import React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CoffeeCart from "../CoffeeCart/CoffeeCart";

const Coffees = ({ coffees }) => {
  return (
    <div className="coffees-bg">
      <Container>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          {coffees.map(coffee => (
            <Grid item key={coffee._id} xs={4}>
              <CoffeeCart key={coffee._id} coffee={coffee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Coffees;
