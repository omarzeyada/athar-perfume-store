import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/add/CartSlice";
import { setSelectedProduct } from "../features/add/ProductSlice";

export default function ProductCard({ product }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  if (!product) {
    return null;
  }

  function handleAddClick(e) {
    e.stopPropagation();
    if (isLoggedIn) {
      dispatch(addToCart(product));
    } else {
      alert("Please log in to add items to your cart.");
    }
  }

  const handleOpenDetails = () => {
    dispatch(setSelectedProduct(product));
    navigate("/details");
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "10px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
          direction: "ltr",
          position: "relative",
          overflow: "hidden",
        }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: "270px" }}
            onClick={handleOpenDetails}
            component='img'
            image={product.image}
            alt='green iguana'
          />
          <CardContent sx={{ padding: "16px 16px 0 16px" }}>
            <Typography
              variant='h6'
              sx={{ color: "#212529", textAlign: "center" }}>
              {product.name}
            </Typography>
            <Typography
              variant='h5'
              sx={{ color: "#0d6efd", textAlign: "center" }}>
              {product.price} EGP
            </Typography>
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
          <FavoriteIcon sx={{ pt: "20px", fontSize: "32px" }} />
        </CardActions>
      </Card>
    </>
  );
}
