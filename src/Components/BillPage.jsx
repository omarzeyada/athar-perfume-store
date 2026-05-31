// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   Typography,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
// } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const BillStyle = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   mt: "10px",
// };

// export default function BillPage() {
//   const [open, setOpen] = useState(false);
//   const [text, setText] = useState({
//     name: "",
//     number: "",
//     street: "",
//     build: "",
//     city: "",
//     landmark: "",
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleClose();
//   };

//   const cartItems = useSelector((state) => {
//     return state.cart.cartItems;
//   });

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + (parseFloat(item.price) || 0),
//     0,
//   );

//   return (
//     <>
//       <Container maxWidth='xl' sx={{ m: "55px auto" }}>
//         <Grid container spacing={4}>
//           <Grid size={{ xs: 12, sm: 12, md: 8 }}>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 p: "20px",
//                 background:
//                   "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
//                 color: "#212529",
//                 position: "relative",
//               }}>
//               <Box>
//                 <Typography variant='h5'>Delivery to Omar Zeyada</Typography>
//                 <Typography variant='p' component='p'>
//                   Nagrig, Basyoun, AL-Garbia
//                 </Typography>
//               </Box>
//               <Button
//                 onClick={handleClickOpen}
//                 sx={{
//                   fontSize: "10px",
//                   position: "absolute",
//                   right: 0,
//                   top: 0,
//                 }}>
//                 Alteration
//               </Button>
//             </Box>

//             <Dialog open={open} onClose={handleClose}>
//               <DialogTitle>Your Address</DialogTitle>
//               <DialogContent>
//                 <form onSubmit={handleSubmit} id='subscription-form'>
//                   <TextField
//                     autoFocus
//                     required
//                     margin='dense'
//                     id='name'
//                     name='name'
//                     label='Your Name'
//                     type='name'
//                     fullWidth
//                     variant='standard'
//                     value={text.name}
//                     onChange={(e) => {
//                       setText({ ...text, name: e.target.value });
//                     }}
//                   />
//                   <TextField
//                     margin='dense'
//                     id='phone number'
//                     name='phone number'
//                     label='Phone Number'
//                     type='phone number'
//                     fullWidth
//                     variant='standard'
//                     value={text.number}
//                     onChange={(e) => {
//                       setText({ ...text, number: e.target.value });
//                     }}
//                   />
//                   <TextField
//                     margin='dense'
//                     id='street name'
//                     name='street name'
//                     label='Street Name'
//                     type='street name'
//                     fullWidth
//                     variant='standard'
//                     value={text.street}
//                     onChange={(e) => {
//                       setText({ ...text, street: e.target.value });
//                     }}
//                   />
//                   <TextField
//                     margin='dense'
//                     id='build'
//                     name='build'
//                     label='Name/Number Build'
//                     type='build'
//                     fullWidth
//                     variant='standard'
//                     value={text.build}
//                     onChange={(e) => {
//                       setText({ ...text, build: e.target.value });
//                     }}
//                   />
//                   <TextField
//                     margin='dense'
//                     id='city'
//                     name='city'
//                     label='City/Area'
//                     type='city'
//                     fullWidth
//                     variant='standard'
//                     value={text.city}
//                     onChange={(e) => {
//                       setText({ ...text, city: e.target.value });
//                     }}
//                   />
//                   <TextField
//                     margin='dense'
//                     id='nearest landmark'
//                     name='nearest landmark'
//                     label='Nearest Landmark'
//                     type='nearest landmark'
//                     fullWidth
//                     variant='standard'
//                     value={text.landmark}
//                     onChange={(e) => {
//                       setText({ ...text, landmark: e.target.value });
//                     }}
//                   />
//                 </form>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={handleClose}>Cancel</Button>
//                 <Button type='submit' form='subscription-form'>
//                   Login
//                 </Button>
//               </DialogActions>
//             </Dialog>

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 p: "20px",
//                 mt: "20px",
//                 background:
//                   "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
//                 color: "#212529",
//                 position: "relative",
//               }}>
//               <Box>
//                 <Typography variant='h5'>Payment upon receipt</Typography>
//               </Box>
//               <Button
//                 sx={{
//                   fontSize: "10px",
//                   position: "absolute",
//                   right: 0,
//                   top: 0,
//                 }}>
//                 Alteration
//               </Button>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 p: "20px",
//                 mt: "20px",
//                 background:
//                   "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
//                 color: "#212529",
//               }}>
//               <Typography variant='h5'>
//                 Delivery will be on May 24, 2026
//               </Typography>
//               <Typography variant='h6'>
//                 Sunday, May 24 <Checkbox defaultChecked />
//               </Typography>
//               <Typography variant='h6'>
//                 Tomorrow, May 23 <Checkbox defaultChecked />
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid
//             size={{ xs: 12, sm: 12, md: 4 }}
//             sx={{
//               p: "20px",
//               background:
//                 "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
//               color: "#212529",
//             }}>
//             <Button
//               variant='outlined'
//               color='black'
//               fullWidth
//               sx={{
//                 backgroundColor: "#ffc107",
//                 padding: "5px 25px",
//                 margin: "20px auto",
//                 borderRadius: "800px",
//                 color: "#212529",
//                 fontSize: "19px",
//                 fontWeight: "600",
//               }}>
//               Click here to confirm your order
//             </Button>
//             <Box sx={{ p: "15px", borderTop: "1px solid #DDD" }}>
//               <Box sx={BillStyle}>
//                 <Typography variant='p' component='p'>
//                   Goods
//                 </Typography>
//                 <Typography variant='p' component='p'>
//                   {cartItems.length}
//                 </Typography>
//               </Box>
//               <Box sx={BillStyle}>
//                 <Typography variant='p' component='p'>
//                   Shipping and Delivery
//                 </Typography>
//                 <Typography variant='p' component='p'>
//                   20 EGP
//                 </Typography>
//               </Box>
//               <Box sx={BillStyle}>
//                 <Typography variant='p' component='p'>
//                   Cash on Delivery Fees
//                 </Typography>
//                 <Typography variant='p' component='p'>
//                   12 EGP
//                 </Typography>
//               </Box>
//               <Box sx={BillStyle}>
//                 <Typography variant='p' component='p'>
//                   Total
//                 </Typography>
//                 <Typography variant='p' component='p'>
//                   {subtotal} EGP
//                 </Typography>
//               </Box>
//               <Box sx={BillStyle}>
//                 <Typography variant='h5'>Order Total</Typography>
//                 <Typography variant='h5'>{subtotal} EGP</Typography>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </>
//   );
// }
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
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// لو عندك دالة بتفضي السلة بعد الشراء فك التهميش عنها هنا
// import { clearCart } from "../features/cart/CartSlice";

export default function BillPage() {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const navigate = useNavigate();
  // const dispatch = useDispatch();

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
    if (!customerInfo.name.trim()) tempErrors.name = "اسم العميل مطلوب!";
    if (!customerInfo.phone.trim()) tempErrors.phone = "رقم التليفون مطلوب!";
    if (!customerInfo.city.trim()) tempErrors.city = "المحافظة/المدينة مطلوبة!";
    if (!customerInfo.address.trim())
      tempErrors.address = "العنوان بالتفصيل مطلوب!";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) return;

    if (cartItems.length === 0) {
      alert("سلتك فارغة، لا يمكنك إتمام الطلب!");
      return;
    }

    const orderDetails = {
      orderId: `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      date: new Date().toLocaleDateString("ar-EG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      customer: customerInfo,
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name || "عطر مميز",
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
      `🎉 ألف مبروك يا ${customerInfo.name}! تم تسجيل طلبك بنجاح رقم: ${orderDetails.orderId}`,
    );

    // هنا هتعمل dispatch لتفضية السلة بعد الشراء:
    // dispatch(clearCart(cartItems));

    navigate("/");
  };

  return (
    <Container maxWidth='lg' sx={{ my: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4, gap: 1 }}>
        <ReceiptLongIcon sx={{ fontSize: 40, color: "#1e3c72" }} />
        <Typography variant='h4' sx={{ fontWeight: "bold", color: "#1e3c72" }}>
          إتمام الشراء والفاتورة
        </Typography>
      </Box>

      
      <Grid container spacing={2}>
        <Grid xs={12} md={7}>
          
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
                بيانات الشحن والتوصيل
              </Typography>
            </Box>
            <CardContent sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
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
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
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
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    label='المحافظة / City'
                    name='city'
                    fullWidth
                    variant='outlined'
                    value={customerInfo.city}
                    onChange={handleInputChange}
                    error={!!errors.city}
                    helperText={errors.city}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6 }}>
                  <TextField
                    label=' Address ( Street Name / Build Number / Floor)'
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
        <Grid size={{ xs: 12, sm: 12, md: 8 }}>
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
                مراجعة المنتجات داخل السلة
              </Typography>
            </Box>
            <Table>
              <TableHead sx={{ bgcolor: "#f9f9f9" }}>
                <TableRow>
                  <TableCell align='right' sx={{ fontWeight: "bold" }}>
                    المنتج
                  </TableCell>
                  <TableCell align='center' sx={{ fontWeight: "bold" }}>
                    الكمية
                  </TableCell>
                  <TableCell align='left' sx={{ fontWeight: "bold" }}>
                    الإجمالي
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
                      لا توجد منتجات في السلة حالياً
                    </TableCell>
                  </TableRow>
                ) : (
                  cartItems.map((item, index) => (
                    <TableRow key={item.id || index} hover>
                      <TableCell align='right'>
                        <Typography sx={{ fontWeight: "500" }}>
                          {item.name || "عطر ديور فاخر"}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                          {item.price} ج.م للمنتج
                        </Typography>
                      </TableCell>
                      <TableCell
                        align='center'
                        sx={{ fontWeight: "bold", color: "#1e3c72" }}>
                        {item.quantity || 1}
                      </TableCell>
                      <TableCell align='left' sx={{ fontWeight: "bold" }}>
                        {(parseFloat(item.price) || 0) * (item.quantity || 1)}{" "}
                        EGP
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
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
                ملخص الفاتورة النهائي
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  إجمالي المنتجات:
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "500" }}>
                  {subtotal} ج.م
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  مصاريف الشحن التوصيل:
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "500" }}>
                  {shipping === 0 ? "شحن مجاني ✨" : `${shipping} EGP`}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 2.5,
                }}>
                <Typography variant='body1' sx={{ opacity: 0.9 }}>
                  طريقة الدفع الحالية:
                </Typography>
                <Typography
                  variant='body1'
                  sx={{ fontWeight: "bold", color: "#ffc107" }}>
                  كاش عند الاستلام
                </Typography>
              </Box>

              <Divider
                sx={{
                  my: 3,
                  dashed: true,
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
                  المبلغ الإجمالي الكلي:
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
                تأكيد وبدء الشحن الفوري
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
