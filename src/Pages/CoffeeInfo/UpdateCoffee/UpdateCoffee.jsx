import React from "react";
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
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          swal({
            title: "Success!",
            text: "Coffee Updated Successfully!",
            icon: "success",
          });
        }
      });
  };

  return (
    <Container style={{ marginTop: "10rem" }}>
      <Grid className="addCoffee">
        <Typography variant="" className="bannerHeader">
          Update Existing Coffee Details
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
        onSubmit={handleUpdateCoffee}
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
            defaultValue={name}
            label="Enter Coffee Name"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="chef"
            defaultValue={chef}
            label="Enter coffee chef"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            name="supplier"
            defaultValue={supplier}
            label="Enter coffee supplier"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="taste"
            defaultValue={taste}
            label="Enter coffee taste"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            name="category"
            defaultValue={category}
            label="Enter coffee category"
            id="outlined-basic"
            variant="outlined"
          />
          <TextField
            name="details"
            defaultValue={details}
            label="Enter coffee details"
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Photo URL</InputLabel>
          <Input
            name="photo"
            defaultValue={photo}
            id="standard-adornment-amount"
          />
        </FormControl>
        <br />
        <Button type="submit" fullWidth variant="contained" size="large">
          Update Coffee
        </Button>
      </Box>
    </Container>
  );
};

export default UpdateCoffee;
