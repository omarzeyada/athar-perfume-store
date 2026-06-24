import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addGiftToCart } from "../features/add/CartSlice";

export default function BrandCardPage({ product }) {

      const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
      const dispatch = useDispatch();

      function handleAddClick(e) {
        e.stopPropagation();
        if (isLoggedIn) {
          dispatch(addGiftToCart(product));
        } else {
          alert("Please log in to add items to your cart.");
        }
      }

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "10px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
        position: "relative",
        overflow: "hidden",
      }}>
      <CardActionArea>
        <CardMedia
          sx={{ height: "270px" }}
          component='img'
          image={product.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography
            variant='span'
            sx={{ color: "#212529bf", fontSize: "16px", mb: "4px" }}>
            {product.name}
          </Typography>
          <Typography variant='h6' sx={{ color: "#212529" }}>
            {product.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}>
            <Typography variant='body1' component='span'>
              {product.size} ml
            </Typography>
            <Typography variant='h5' sx={{ color: "#ffd700" }}>
              {product.price} EGP
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: "0px 15px 15px 15px",
        }}>
        <Button
          variant='outlined'
          color='black'
          fullWidth
          onClick={handleAddClick}
          sx={{
            marginTop: "25px",
            border: "1px solid #000",
            borderRadius: "800px",
            "&:hover": {
              backgroundColor: "#ffd700",
              color: "#fff",
              borderColor: "#ffd700",
            },
          }}>
          <AddShoppingCartIcon sx={{ marginLeft: "5px" }} /> Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
