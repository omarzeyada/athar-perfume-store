import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOfferToCart } from "../features/add/CartSlice";

export default function MultiActionAreaCard({ product }) {
  const navigate = useNavigate();

  const handleOpenOfferPage = () => {
    navigate("/offersPage");
  };

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  function handleAddClick(e) {
    e.stopPropagation();
    if (isLoggedIn) {
      dispatch(addOfferToCart(product));
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
        direction: "ltr",
        position: "relative",
        overflow: "hidden",
      }}>
      <div className='card'>Offer</div>
      <CardActionArea>
        <CardMedia
          sx={{ height: "207px" }}
          onClick={handleOpenOfferPage}
          component='img'
          image={product.image}
          alt='green iguana'
        />

        <CardContent>
          <Typography
            variant='span'
            sx={{ color: "#131313bf", fontSize: "16px" }}>
            {product.name}
          </Typography>
          <Typography
            variant='h6'
            sx={{ fontWeight: "600", mt: "10px", color: "#212529" }}>
            {product.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mt: "15px",
            }}>
            <Typography variant='span'>{product.size} ml</Typography>
            <Typography variant='h5' sx={{ color: "#ffd700" }}>
              {product.price} $
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
