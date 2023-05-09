import React from "react";
import Box from "@mui/material/Box";
import swal from "sweetalert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Container, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link } from "react-router-dom";

const CoffeeCart = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleDelete = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
          // headers: {
          //   "content-type": "application/json",
          // },
          // body: JSON.stringify(),
        })
          .then(res => res.json())
          .then(data => {
            swal("Your coffee has been deleted!", {
              icon: "success",
            });
            console.log(data);
          });
      } else {
        swal("Your file is safe!");
      }
    });
  };

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          pl: 3,
          pb: 1,
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={photo}
          alt="coffee"
        />
        <CardContent sx={{ flex: "1 5 auto" }}>
          <Typography>{name}</Typography>
          <Typography>{chef}</Typography>
          <Typography>{taste}</Typography>
        </CardContent>
        <CardContent sx={{ flex: "1 5 auto" }}>
          <Button startIcon={<RemoveRedEyeIcon />}></Button>
          <Link to={`updateCoffee/${_id}`}>
            <Button startIcon={<EditSharpIcon />}></Button>
          </Link>
          <Button
            onClick={() => handleDelete(_id)}
            startIcon={<DeleteIcon />}
          ></Button>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CoffeeCart;
