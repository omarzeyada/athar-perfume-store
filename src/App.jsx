import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Box, Typography } from "@mui/material";

// Compponents
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import BrandList from "./Component-Brand/BrandList";
import BrandPage from "./Component-Brand/BrandPage";
import OffersPage from "./Component-Offer/OffersPage";
import OffersList from "./Component-Offer/OffersList";
import ProductList from "./Component-Product/ProductList";
import ProductPage from "./Component-Product/ProductPage";
import GiftPage from "./Component-Gift/GiftPage";
import Contact from "./Components/Contact";
import About from "./Components/About";
import CartPage from "./Components/CartPage";
import BillPage from "./Components/BillPage";
import Details from "./Components/Details";
import Dashboard from "./Components/Dashboard";
import NewAccount from "./Components/NewAccount";
import SingleBrandPage from "./Component-Brand/SingleBrandPage";
;
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"],
    },
  });

  const titleStyle = {
    color: "#ffc107",
    fontWeight: "bold",
    textAlign: "center",
    padding: "40px 0",
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path='/BrandPage' element={<BrandPage />} />
        <Route path='/ProductPage' element={<ProductPage />} />
        <Route path='/OffersPage' element={<OffersPage />} />
        <Route path='/giftPage' element={<GiftPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/cartPage' element={<CartPage />} />
        <Route path='/billPage' element={<BillPage />} />
        <Route path='/details' element={<Details />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newAccount' element={<NewAccount />} />
        <Route path='/brand/:brandName' element={<SingleBrandPage />} />
        <Route
          path='/'
          element={
            <>
              <Home />
              <Box sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography variant='h4' sx={titleStyle}>
                  Brands
                </Typography>
                <BrandList />
              </Box>
              <Box>
                <Typography variant='h4' sx={titleStyle}>
                  Offers
                </Typography>
                <OffersList />
              </Box>
              <Box sx={{ backgroundColor: "#f8f9fa" }}>
                <Typography variant='h4' sx={titleStyle}>
                  Product
                </Typography>
                <ProductList />
              </Box>
            </>
          }
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
