import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Card,
  CardContent,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function BillPage() {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const subtotal = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const shipping = subtotal > 1500 || subtotal === 0 ? 0 : 50;

  const totalAmount = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!customerInfo.name.trim()) tempErrors.name = "Customer name is required!";
    if (!customerInfo.phone.trim()) tempErrors.phone = "Phone number is required!";
    if (!customerInfo.city.trim()) tempErrors.city = "City/Governorate is required!";
    if (!customerInfo.address.trim()) tempErrors.address = "Detailed address is required!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) return;

    if (cartItems.length === 0) {
      alert("Your cart is empty, cannot place an order!");
      return;
    }

    const orderDetails = {
      orderId: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      customer: customerInfo,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name || "Premium Perfume",
        price: parseFloat(item.price),
        quantity: item.quantity || 1,
        totalItemPrice: (parseFloat(item.price) || 0) * (item.quantity || 1),
      })),
      pricing: {
        subtotal: subtotal,
        shipping: shipping,
        totalAmount: totalAmount,
      },
      paymentMethod: "Cash on Delivery",
    };

    alert(
      `🎉 Congratulations, ${customerInfo.name}! Your order has been placed successfully. Order ID: ${orderDetails.orderId}`,
    );

    navigate("/");
  };

  return (
    <Container maxWidth='lg' sx={{ my: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 1 }}>
        <ReceiptLongIcon sx={{ fontSize: 40, color: "#1e3c72" }} />
        <Typography variant='h4' sx={{ fontWeight: "bold", color: "#1e3c72" }}>
          Checkout & Invoice
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Card
            elevation={3}
            sx={{ borderRadius: "16px", mb: 4, overflow: "hidden" }}>
            <Box
              sx={{
                p: 2,
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}>
              <LocalShippingIcon />
              <Typography variant='h6' sx={{ fontWeight: "600" }}>
                Shipping & Delivery Details
              </Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label='Full Name'
                    name='name'
                    fullWidth
                    variant='outlined'
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label='Phone Number'
                    name='phone'
                    fullWidth
                    variant='outlined'
                    value={customerInfo.phone}
                    onChange={handleInputChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label='City / Governorate'
                    name='city'
                    fullWidth
                    variant='outlined'
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    error={!!errors.city}
                    helperText={errors.city}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <TextField
                    label='Address (Street Name / Building Number / Floor)'
                    name='address'
                    fullWidth
                    rows={3}
                    variant='outlined'
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    error={!!errors.address}
                    helperText={errors.address}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <TableContainer
            component={Paper}
            sx={{ borderRadius: "16px", overflow: "hidden" }}>
            <Box
              sx={{
                p: 2,
                bgcolor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid #ddd",
              }}>
              <ShoppingBagIcon sx={{ color: "#555" }} />
              <Typography
                variant='subtitle1'
                sx={{ fontWeight: "bold", color: "#555" }}>
                Review Items in Cart
              </Typography>
            </Box>
            <Table>
              <TableHead sx={{ bgcolor: "#f9f9f9" }}>
                <TableRow>
                  <TableCell align='left' sx={{ fontWeight: "bold" }}>
                    Product
                  </TableCell>
                  <TableCell align='center' sx={{ fontWeight: "bold" }}>
                    Quantity
                  </TableCell>
                  <TableCell align='right' sx={{ fontWeight: "bold" }}>
                    Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      align='center'
                      sx={{ py: 3, color: "#888" }}>
                      No products in the cart currently.
                    </TableCell>
                  </TableRow>
                ) : (
                  cartItems.map((item, index) => (
                    <TableRow key={item.id || index} hover>
                      <TableCell align='left'>
                        <Typography sx={{ fontWeight: "500" }}>
                          {item.name || "Luxury Perfume"}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {item.price} EGP per item
                        </Typography>
                      </TableCell>
                      <TableCell
                        align='center'
                        sx={{ fontWeight: "bold", color: "#1e3c72" }}>
                        {item.quantity || 1}
                      </TableCell>
                      <TableCell align='right' sx={{ fontWeight: "bold" }}>
                        {(parseFloat(item.price) || 0) * (item.quantity || 1)} EGP
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: "24px",
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              color: "white",
              p: 2,
              position: "sticky",
              top: "30px",
            }}>
            <CardContent>
              <Typography
                variant='h5'
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  pb: 1.5,
                }}>
                Final Bill Summary
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  Items Subtotal:
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "500" }}>
                  {subtotal} EGP
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  Shipping & Delivery:
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "500" }}>
                  {shipping === 0 ? "Free Shipping ✨" : `${shipping} EGP`}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  Payment Method:
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ fontWeight: "bold", color: "#ffc107" }}>
                  Cash on Delivery
                </Typography>
              </Box>

              <Divider
                sx={{
                  my: 3,
                  borderColor: "rgba(255,255,255,0.3)",
                  borderWidth: "1px",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 4,
                }}>
                <Typography variant='h5' sx={{ fontWeight: "bold" }}>
                  Total Amount:
                </Typography>
                <Typography
                  variant='h4'
                  sx={{ fontWeight: "bold", color: "#ffc107" }}>
                  {totalAmount} <span style={{ fontSize: "20px" }}>EGP</span>
                </Typography>
              </Box>

              <Button
                variant='contained'
                fullWidth
                size='large'
                onClick={handleConfirmOrder}
                disabled={cartItems.length === 0}
                startIcon={<CheckCircleIcon sx={{ ml: 1 }} />}
                sx={{
                  bgcolor: "#ffc107",
                  color: "#212529",
                  fontSize: "19px",
                  fontWeight: "bold",
                  py: 1.8,
                  borderRadius: "16px",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  "&:hover": {
                    bgcolor: "#e0a800",
                  },
                  "&.Mui-disabled": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                }}>
                Confirm & Start Shipping
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
