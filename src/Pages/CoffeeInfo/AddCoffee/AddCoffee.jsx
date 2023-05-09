import React from "react";
import swal from "sweetalert";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";

const AddCoffee = () => {
  const handleAddCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        swal({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
      });
  };

  return (
    <Container style={{ marginTop: "10rem" }}>
      <Grid className="addCoffee">
        <Typography variant="" className="bannerHeader">
          Add New Coffee
        </Typography>{" "}
        <br />
        <Typography variant="" className="bannerDesc">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </Typography>
      </Grid>
      <Box
        onSubmit={handleAddCoffee}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "70ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            name="name"
            label="Enter Coffee Name"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="chef"
            label="Enter coffee chef"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            name="supplier"
            label="Enter coffee supplier"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="taste"
            label="Enter coffee taste"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            name="category"
            label="Enter coffee category"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="details"
            label="Enter coffee details"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Photo URL</InputLabel>
          <Input name="photo" id="standard-adornment-amount" />
        </FormControl>
        <br />
        <Button type="submit" fullWidth variant="contained" size="large">
          Add Coffee
        </Button>
      </Box>
    </Container>
  );
};

export default AddCoffee;
