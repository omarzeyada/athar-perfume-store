import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Chip,
  Tab,
  Tabs,
  CardMedia,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  addGift,
  addOffer,
  addBrand,
  deleteProduct,
  deleteOffer,
  deleteGift,
  deleteBrand,
} from "../features/add/ProductSlice";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

export default function Dashboard() {
  const [text, setText] = useState({
    name: "",
    brand: "",
    weight: "",
    age: "",
    shape: "",
    freeOf: "",
    country: "",
    special: "",
    concentration: "",
    longevity: "",
    mode: "",
    gender: "",
    price: "",
    discount: "",
    size: "",
    image: "",
    description: "",
    category: "product",
    stock: "",
  });
  const { currentUser, isLoggedIn } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  function handleAddProduct(e) {
    if (e) e.preventDefault();
    const productWithId = { ...text, id: Date.now() };
    const finalCategory = text.category
      ? text.category.trim().toLocaleLowerCase()
      : "product";
    if (finalCategory === "gift") {
      dispatch(addGift(productWithId));
    } else if (finalCategory === "offer") {
      dispatch(addOffer(productWithId));
    } else if (finalCategory === "brand") {
      dispatch(addBrand(productWithId));
    } else {
      dispatch(addProduct(productWithId));
    }
  }

  useEffect(() => {
    if (!isLoggedIn || currentUser?.role !== "admin") {
      navigate("/dashboard");
    }
  }, [isLoggedIn, currentUser, navigate]);

  const products = useSelector((state) => state.product.products) || [];
  const offers = useSelector((state) => state.product.offers) || [];
  const gifts = useSelector((state) => state.product.gifts) || [];
  const brands = useSelector((state) => state.product.brands) || [];

  const totalProductsCount = products.length;

  const lowStockProducts = products.filter(
    (item) => item.stock > 0 && item.stock <= 5,
  );
  const outOfStockProducts = products.filter((item) => item.stock === 0);

  const totalRevenue = products.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);
  const totalRevenueOffers = offers.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);
  const totalRevenueGifts = gifts.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);
  const totalRevenueBrands = brands.reduce((acc, item) => {
    const price = parseFloat(item.price) || 0;
    return acc + price;
  }, 0);

  const Total =
    Number(totalRevenue) +
    Number(totalRevenueOffers) +
    Number(totalRevenueGifts) +
    Number(totalRevenueBrands);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  const handleDeleteOffer = (id) => {
    dispatch(deleteOffer(id));
  };
  const handleDeleteGift = (id) => {
    dispatch(deleteGift(id));
  };
  const handleDeleteBrand = (id) => {
    dispatch(deleteBrand(id));
  };

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return {
        label: "Out of Stock",
        color: "#dc2626",
        bgcolor: "rgba(220,38,38,0.05)",
      };
    } else if (stock <= 5) {
      return {
        label: "Low Stock",
        color: "#f59e0b",
        bgcolor: "rgba(245,158,11,0.05)",
      };
    } else {
      return {
        label: "In Stock",
        color: "#16a34a",
        bgcolor: "rgba(22,163,74,0.05)",
      };
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#090d16",
        minHeight: "100vh",
        py: 6,
        color: "#f8fafc",
        direction: "ltr",
      }}>
      <Container maxWidth='xl'>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            pb: 3,
          }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#d4af37",
              }}>
              <WorkspacePremiumOutlinedIcon fontSize='small' />
              <Typography
                variant='caption'
                sx={{
                  fontWeight: 800,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}>
                AURA PREMIUM
              </Typography>
            </Box>
            <Typography
              variant='h3'
              sx={{
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-1.5px",
                mt: 0.5,
              }}>
              The Atelier Studio
            </Typography>
          </Box>
          <Button
            variant='text'
            startIcon={<ShieldOutlinedIcon />}
            sx={{
              color: "#d4af37",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.5px",
            }}>
            Secured Admin Mode
          </Button>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                backdropFilter: "blur(10px)",
              }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='caption'
                      sx={{
                        color: "#94a3b8",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}>
                      Curated Collection
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        mt: 1,
                        mb: 0.5,
                      }}>
                      {totalProductsCount} Products
                    </Typography>
                  </Box>
                  <Typography variant='h4' sx={{ opacity: 0.8 }}>
                    ✨
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                backdropFilter: "blur(10px)",
              }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='caption'
                      sx={{
                        color: "#94a3b8",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}>
                      Pending Dispatches
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        mt: 1,
                        mb: 0.5,
                      }}>
                      {lowStockProducts.length} Products
                    </Typography>
                  </Box>
                  <Typography variant='h4' sx={{ opacity: 0.8 }}>
                    ⚜️
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                backdropFilter: "blur(10px)",
              }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='caption'
                      sx={{
                        color: "#94a3b8",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}>
                      Out of Stock
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        mt: 1,
                        mb: 0.5,
                      }}>
                      {outOfStockProducts.length} Products
                    </Typography>
                  </Box>
                  <Typography variant='h4' sx={{ opacity: 0.8 }}>
                    ⚜️
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card
              sx={{
                bgcolor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: "24px",
                backdropFilter: "blur(10px)",
              }}>
              <CardContent sx={{ p: 4 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      variant='caption'
                      sx={{
                        color: "#94a3b8",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                      }}>
                      Total Inventory Value
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 800,
                        color: "#ffffff",
                        mt: 1,
                        mb: 0.5,
                      }}>
                      {Total.toLocaleString()} EGP
                    </Typography>
                  </Box>
                  <Typography variant='h4' sx={{ opacity: 0.8 }}>
                    🏆
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 12, md: 8}}>
            <Paper
              sx={{
                p: 4,
                borderRadius: "28px",
                bgcolor: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(255, 255, 255 ,0.05)",
              }}>
              <Typography
                variant='h6'
                sx={{
                  fontWeight: 800,
                  mb: 2,
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}>
                <AddIcon sx={{ color: "#d4af37" }} /> Archive New Scent
              </Typography>

              <Tabs
                value={0}
                textColor='inherit'
                indicatorColor='primary'
                sx={{
                  mb: 3,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  "& .MuiTabs-indicator": { bgcolor: "#d4af37" },
                  "& .MuiTab-root": {
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                    color: "#64748b",
                  },
                  "& .Mui-selected": { color: "#d4af37 !important" },
                }}>
                <Tab label='Core Essentials' />
              </Tabs>

              <Box
                component='form'
                sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Product Name'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.name}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Brand'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.brand}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            brand: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Weight'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.weight}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            weight: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Age Group'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.age}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            age: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Product Shape'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.shape}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            shape: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Free Of Material Type'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.freeOf}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            freeOf: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Country Of Origin'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.country}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            country: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Special Fanciful'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.special}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            special: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Fragrance Concentration'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.concentration}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            concentration: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Scent Longevity'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.longevity}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            longevity: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Application Mode'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.mode}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            mode: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Gender'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.gender}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            gender: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Price ($)'
                        type='number'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.price}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            price: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Discount %'
                        type='number'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.discount}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            discount: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Size'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.size}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            size: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        label='Stock Quantity'
                        variant='filled'
                        size='small'
                        fullWidth
                        InputLabelProps={{ style: { color: "#64748b" } }}
                        inputProps={{ style: { color: "#fff" } }}
                        value={text.stock}
                        onChange={(e) => {
                          setText((prev) => ({
                            ...prev,
                            stock: e.target.value,
                          }));
                        }}
                        sx={{
                          "& .MuiFilledInput-root": {
                            "&:after": {
                              borderBottomColor: "#ffc107",
                            },
                          },
                          bgcolor: "rgba(255,255,255,0.02)",
                          borderRadius: "10px",
                        }}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    label='Image Resource URL'
                    variant='filled'
                    size='small'
                    fullWidth
                    InputLabelProps={{ style: { color: "#64748b" } }}
                    inputProps={{ style: { color: "#fff" } }}
                    value={text.image}
                    onChange={(e) => {
                      setText((prev) => ({ ...prev, image: e.target.value }));
                    }}
                    sx={{
                      "& .MuiFilledInput-root": {
                        "&:after": {
                          borderBottomColor: "#ffc107",
                        },
                      },
                      bgcolor: "rgba(255,255,255,0.02)",
                      borderRadius: "10px",
                    }}
                  />
                  <Button
                    variant='contained'
                    component='label'
                    startIcon={<CloudUploadIcon />}
                    sx={{
                      backgroundColor: "#ffc107",
                      color: "#000",
                      "&:hover": { backgroundColor: "#e0a800" },
                      margin: "10px 0",
                    }}>
                    <input
                      type='file'
                      hidden
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            const base64String = reader.result;
                            setText((prev) => ({
                              ...prev,
                              image: base64String,
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </Button>
                  <TextField
                    label='Story & Profile Description'
                    variant='filled'
                    size='small'
                    fullWidth
                    multiline
                    rows={2}
                    InputLabelProps={{ style: { color: "#64748b" } }}
                    inputProps={{ style: { color: "#fff" } }}
                    value={text.description}
                    onChange={(e) => {
                      setText((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }));
                    }}
                    sx={{
                      "& .MuiFilledInput-root": {
                        "&:after": {
                          borderBottomColor: "#ffc107",
                        },
                      },
                      bgcolor: "rgba(255,255,255,0.02)",
                      borderRadius: "10px",
                    }}
                  />

                  <FormControl
                    fullWidth
                    sx={{
                      "& .MuiInputLabel-root": {
                        color: "#64748b",
                      },
                      "& .MuiInputLabel-root.Mui-focused": {
                        color: "#64748b",
                      },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#ffc107",
                        },
                        "&:hover fieldset": {
                          borderColor: "#ffc107",
                          borderWidth: "2px",
                        },
                        "&.Mui-focused  fieldset": {
                          borderColor: "#ffc107",
                        },
                      },
                      "& .MuiSelect-icon": {
                        color: "#ffc107",
                      },
                      "& .MuiOutlinedInput-input": {
                        color: "#ffffff",
                      },
                    }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                      name='category'
                      value={text.category}
                      label='Category'
                      onChange={(e) => {
                        setText((prev) => ({
                          ...prev,
                          category: e.target.value,
                        }));
                      }}>
                      <MenuItem value='product'>Product</MenuItem>
                      <MenuItem value='gift'>Gift</MenuItem>
                      <MenuItem value='offer'>Offer</MenuItem>
                      <MenuItem value='brand'>Brand</MenuItem>
                    </Select>
                  </FormControl>
                </>

                <Button
                  variant='contained'
                  fullWidth
                  disableElevation
                  onClick={handleAddProduct}
                  sx={{
                    bgcolor: "#d4af37",
                    color: "#090d16",
                    p: 1.6,
                    fontWeight: 800,
                    borderRadius: "14px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "0.85rem",
                    mt: 1,
                    "&:hover": { bgcolor: "#f3cd44" },
                  }}>
                  Commit Scent to Vault
                </Button>
              </Box>
            </Paper>
          </Grid>

          
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <TableContainer
              component={Paper}
              sx={{
                borderRadius: "28px",
                bgcolor: "rgba(255,255,255,0.01)",
                border: "1px solid rgba(255,255,255,0.05)",
                overflow: "hidden",
              }}>
              <Box
                sx={{
                  p: 3.5,
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                <Typography
                  variant='h6'
                  sx={{ fontWeight: 800, color: "#ffffff" }}>
                  Live Showroom Stock
                </Typography>
                <Chip
                  label='All systems nominal'
                  icon={
                    <StarBorderIcon
                      style={{ color: "#38ef7d", fontSize: 14 }}
                    />
                  }
                  sx={{
                    bgcolor: "rgba(56,239,125,0.05)",
                    color: "#38ef7d",
                    fontWeight: 700,
                    size: "small",
                  }}
                />
              </Box>
              <Table>
                <TableHead sx={{ bgcolor: "rgba(255,255,255,0.02)" }}>
                  <TableRow>
                    <TableCell sx={{ color: "#94a3b8", fontWeight: "700" }}>
                      Image
                    </TableCell>
                    <TableCell sx={{ color: "#94a3b8", fontWeight: "700" }}>
                      Product Name
                    </TableCell>
                    <TableCell sx={{ color: "#94a3b8", fontWeight: "700" }}>
                      Price
                    </TableCell>
                    <TableCell
                      sx={{ color: "#94a3b8", fontWeight: "700" }}
                      align='center'>
                      Status
                    </TableCell>
                    <TableCell
                      sx={{ color: "#94a3b8", fontWeight: "700" }}
                      align='center'>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {products.map((item, index) => (
                    <TableRow key={item.id || index}>
                      <TableCell>
                        <CardMedia
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                          component='img'
                          image={item.image}
                          alt={item.name}
                        />
                      </TableCell>
                      <TableCell sx={{ color: "white" }}>
                        <Typography
                          variant='subtitle1'
                          sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        <Typography variant='caption' sx={{ color: "#94a3b8" }}>
                          {item.brand}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#38bdf8", fontWeight: "700" }}>
                        {item.price} EGP
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip
                          label={getStockStatus(Number(item.stock)).label}
                          color={getStockStatus(Number(item.stock)).color}
                          sx={{
                            bgcolor: getStockStatus(item.stock).color + "10",
                            color: getStockStatus(item.stock).color,
                            fontWeight: 700,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title='Delete Product'>
                          <IconButton
                            onClick={() => handleDelete(item.id)}
                            sx={{
                              color: "#ef4444",
                              bgcolor: "rgba(239, 68, 68, 0.08)",
                              "&:hover": {
                                bgcolor: "rgba(239, 68, 68, 0.2)",
                              },
                            }}>
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                  {offers.map((item, index) => (
                    <TableRow key={item.id || index}>
                      <TableCell>
                        <CardMedia
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                          component='img'
                          image={item.image}
                          alt={item.name}
                        />
                      </TableCell>

                      <TableCell sx={{ color: "white" }}>
                        <Typography
                          variant='subtitle1'
                          sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        <Typography variant='caption' sx={{ color: "#94a3b8" }}>
                          {item.brand}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#38bdf8", fontWeight: "700" }}>
                        {item.price} EGP
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip
                          label={getStockStatus(item.stock).label}
                          color={getStockStatus(item.stock).color}
                          sx={{
                            bgcolor: getStockStatus(item.stock).color + "10",
                            color: getStockStatus(item.stock).color,
                            fontWeight: 700,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title='Delete Product'>
                          <IconButton
                            onClick={() => handleDeleteOffer(item.id)}
                            sx={{
                              color: "#ef4444",
                              bgcolor: "rgba(239, 68, 68, 0.08)",
                              "&:hover": {
                                bgcolor: "rgba(239, 68, 68, 0.2)",
                              },
                            }}>
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                  {gifts.map((item, index) => (
                    <TableRow key={item.id || index}>
                      <TableCell>
                        <CardMedia
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                          component='img'
                          image={item.image}
                          alt={item.name}
                        />
                      </TableCell>

                      <TableCell sx={{ color: "white" }}>
                        <Typography
                          variant='subtitle1'
                          sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        <Typography variant='caption' sx={{ color: "#94a3b8" }}>
                          {item.brand}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#38bdf8", fontWeight: "700" }}>
                        {item.price} EGP
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip
                          label={getStockStatus(item.stock).label}
                          color={getStockStatus(item.stock).color}
                          sx={{
                            bgcolor: getStockStatus(item.stock).color + "10",
                            color: getStockStatus(item.stock).color,
                            fontWeight: 700,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title='Delete Product'>
                          <IconButton
                            onClick={() => handleDeleteGift(item.id)}
                            sx={{
                              color: "#ef4444",
                              bgcolor: "rgba(239, 68, 68, 0.08)",
                              "&:hover": {
                                bgcolor: "rgba(239, 68, 68, 0.2)",
                              },
                            }}>
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                  {brands.map((item, index) => (
                    <TableRow key={item.id || index}>
                      <TableCell>
                        <CardMedia
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                          component='img'
                          image={item.image}
                          alt={item.name}
                        />
                      </TableCell>

                      <TableCell sx={{ color: "white" }}>
                        <Typography
                          variant='subtitle1'
                          sx={{ fontWeight: 600 }}>
                          {item.name}
                        </Typography>
                        <Typography variant='caption' sx={{ color: "#94a3b8" }}>
                          {item.brand}
                        </Typography>
                      </TableCell>
                      <TableCell sx={{ color: "#38bdf8", fontWeight: "700" }}>
                        {item.price} EGP
                      </TableCell>

                      <TableCell sx={{ textAlign: "center" }}>
                        <Chip
                          label={getStockStatus(item.stock).label}
                          color={getStockStatus(item.stock).color}
                          sx={{
                            bgcolor: getStockStatus(item.stock).color + "10",
                            color: getStockStatus(item.stock).color,
                            fontWeight: 700,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        <Tooltip title='Delete Product'>
                          <IconButton
                            onClick={() => handleDeleteBrand(item.id)}
                            sx={{
                              color: "#ef4444",
                              bgcolor: "rgba(239, 68, 68, 0.08)",
                              "&:hover": {
                                bgcolor: "rgba(239, 68, 68, 0.2)",
                              },
                            }}>
                            <DeleteIcon fontSize='small' />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
