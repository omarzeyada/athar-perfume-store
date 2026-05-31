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
            <Typography variant='body1' component='span'>{product.size} ml</Typography>
            <Typography variant='h5' sx={{ color: "#0d6efd" }}>
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
            background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
            marginTop: "25px",
            borderRadius: "800px",
            color: "white",
          }}>
          <AddShoppingCartIcon sx={{ marginLeft: "5px" }} /> Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
