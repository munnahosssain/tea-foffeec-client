import "../../../App.css";
import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Grid container className="bannerStyle">
      <Grid item xs={6} style={{ padding: "3rem" }}>
        <Typography variant="" className="banner bannerHeader">
          Would you like a Cup of Delicious Coffee?
        </Typography>
        <Typography variant="h6" className="banner bannerDesc">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </Typography>
        <Link to="">
          <Button variant="contained" color="success">
            Learn More
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Banner;
