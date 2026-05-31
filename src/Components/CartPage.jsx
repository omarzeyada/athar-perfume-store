import {
  Container,
  Grid,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  deleteFromCart,
} from "../features/add/CartSlice";

export default function CartPage() {
  const cartItems = useSelector((state) => {
    return state.cart.cartItems;
  });

  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((acc, item) => {
    const priceAsNumber = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    return acc + priceAsNumber * qty;
  }, 0);

  const totalItemsCount = cartItems.reduce((acc, item) => {
    return acc + (item.quantity || 1);
  }, 0);

  const navigate = useNavigate();
  const openBill = () => {
    navigate("/BillPage");
  };

  return (
    <>
      <Container maxWidth='xl' sx={{ m: "50px auto" }}>
        <Grid
          container
          spacing={8}
          sx={{
            p: "10px",
          }}>
          {cartItems.map((item, index) => (
            <Grid
              key={item.id || index}
              size={{ xs: 12, sm: 12, md: 8 }}
              sx={{
                background:
                  "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
                color: "white",
              }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "15px 7px",
                  borderBottom: "1px solid #757474",
                }}>
                <Typography variant='h5'>Shopping Cart</Typography>
                <Typography component='p'>price</Typography>
              </Box>
              <Grid container spacing={4} sx={{ p: "20px 15px" }}>
                <Grid
                  size={{ xs: 12, sm: 12, md: 3 }}
                  sx={{ display: "flex", alignItems: "center" }}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={item.image}
                      alt='green iguana'
                    />
                  </CardActionArea>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <Typography variant='h6' sx={{ mb: "10px" }}>
                    A rich and worm amber fragrance perfect for cold evenings
                  </Typography>
                  <Typography variant='p' component='p' sx={{ mb: "17px" }}>
                    Arrives Saturday, May 23
                  </Typography>
                  <Box
                    sx={{
                      border: "1px solid #ffc107",
                      width: "fit-content",
                      borderRadius: "20px",
                    }}>
                    <Button
                      onClick={() => dispatch(decrementQuantity(item.id))}>
                      <DeleteIcon />
                    </Button>{" "}
                    <Typography variant='span' component='span'>
                      {item.quantity || 1}
                    </Typography>{" "}
                    <Button
                      onClick={() => dispatch(incrementQuantity(item.id))}>
                      <AddIcon />
                    </Button>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 3 }}>
                  <Typography variant='h5'>{item.price} EGP</Typography>
                </Grid>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  p: "0px 15px",
                  borderTop: "1px solid #757474",
                }}>
                <Typography
                  variant='h6'
                  sx={{
                    mb: "20px",

                    pt: "12px",
                    pl: "12px",
                  }}>
                  Subtotal (1 Commodity): {item.price} EGP
                </Typography>

                <Button onClick={() => dispatch(deleteFromCart(item.id))}>
                  <DeleteIcon sx={{ color: "red" }} />
                </Button>
              </Box>
            </Grid>
          ))}

          <Grid
            size={{ xs: 12, sm: 12, md: 4 }}
            sx={{
              background:
                "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
              color: "white",
              padding: "20px",
            }}>
            <Typography
              variant='p'
              component='p'
              sx={{
                mb: "30px",
                pt: "12px",
                color: `${cartItems.length !== 0 ? "green" : "red"}`,
                display: "flex",
                alignItems: "center",
              }}>
              {cartItems.length !== 0
                ? "Your order is eligible for shipping"
                : "Your order is not eligible for shipping"}
              {cartItems.length !== 0 ? (
                <CheckCircleIcon sx={{ ml: "5px", color: "green" }} />
              ) : (
                <CancelIcon sx={{ ml: "5px", color: "red" }} />
              )}
            </Typography>
            <Typography
              variant='h4'
              sx={{
                mb: "20px",
                pt: "12px",
              }}>
              Subtotal ({totalItemsCount} Commodity):
            </Typography>
            <Typography
              variant='h4'
              sx={{
                mb: "20px",
                pt: "12px",
              }}>
              {totalPrice.toLocaleString()} EGP
            </Typography>
            <Button
              variant='outlined'
              color='black'
              fullWidth
              onClick={openBill}
              disabled={cartItems.length === 0}
              sx={{
                backgroundColor: "#ffc107",
                padding: "5px 25px",
                margin: "20px auto",
                borderRadius: "800px",
                color: "#212529",
                fontSize: "19px",
                fontWeight: "600",
              }}>
              Proceed with your purchase
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
