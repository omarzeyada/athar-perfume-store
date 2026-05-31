import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../features/add/userSlice";

const pages = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/ProductPage" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Brands", path: "/BrandPage" },
  { name: "Gifts", path: "/giftPage" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);
  const [text, setText] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };
  const handleOpenCart = () => {
    navigate("/cartPage");
  };
  const handleOpenNewAccount = () => {
    navigate("/newAccount");
  };



      const cartItems = useSelector((state) => {
        return state.cart.cartItems;
      });
      const dispatch = useDispatch();

      const totalItemsCount = cartItems.reduce((acc, item) => {
        return acc + (item.quantity || 1);
      }, 0);

  const handleOpenDashboard = () => {
    if (text.email === "Athar-Admen@gmail.com" && text.password === "Athar") {
      dispatch(loginSuccess({ email: text.email, role: "admin" }));
      navigate("/dashboard");
    } else if (text.email !== "" && text.password !== "") {
      dispatch(loginSuccess({ email: text.email, role: "user" }));
      navigate("/");
    } else {
      alert("Please enter valid credentials");
    }
  };
  const dashboard = () => {
    navigate("/dashboard");
  };

  return (
    <AppBar
      position='static'
      color='transparent'
      sx={{
        pl: { xs: 0, md: "27px" },
        pr: { xs: 0, md: "27px" },
        background:
          "linear-gradient(135deg, #ffc107 0%, rgba(255, 87, 34, 0.87) 100%)",
        color: "white",
      }}>
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{ mr: { xs: 0, md: "20px" }, ml: { xs: 0, md: "20px" } }}>
          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },

              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
            ATHAR
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='black'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}>
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.path)}>
                  <div
                    sx={{
                      textAlign: "center",
                      fontWeight: "200",
                    }}>
                    {page.name}
                  </div>
                </MenuItem>
              ))}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                {text.email === "Athar-Admen@gmail.com" &&
                  text.password === "Athar" && (
                    <Button
                      variant='outlined'
                      color='black'
                      sx={{
                        backgroundColor: "#ffc107",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        width: "95px",
                        display: { xs: "block", md: "none" },
                      }}
                      onClick={dashboard}>
                      DB
                    </Button>
                  )}
              </Box>
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
            ATHAR
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  mr: "10px",
                  color: "white",
                  display: "block",
                  fontSize: "20px",
                }}>
                {page.name}
              </Button>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Button
              variant='outlined'
              color='black'
              sx={{
                borderRadius: "20px",
                fontWeight: "bold",
                width: "95px",
                display:
                  text.email === "Athar-Admen@gmail.com" &&
                  text.password === "Athar"
                    ? { xs: "none", md: "block" }
                    : "none",
              }}
              onClick={dashboard}>
              DB
            </Button>
            <Button
              variant='outlined'
              color='black'
              sx={{ borderRadius: "20px", fontWeight: "bold", width: "95px" }}
              onClick={handleClickOpen}>
              Login
            </Button>
            <Box sx={{ position: "relative" }}>
              <Button color='white' onClick={handleOpenCart}>
                <ShoppingCartOutlinedIcon />
              </Button>
              <Typography
                variant='caption'
                component='span'
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  width: "20px",
                  height: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                {totalItemsCount}
              </Typography>
            </Box>
          </Box>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit} id='subscription-form'>
                <TextField
                  autoFocus
                  required
                  margin='dense'
                  id='email'
                  name='email'
                  label='Email Address'
                  type='email'
                  fullWidth
                  variant='standard'
                  value={text.email}
                  onChange={(e) => {
                    setText({ ...text, email: e.target.value });
                  }}
                />
                <TextField
                  margin='dense'
                  id='password'
                  name='password'
                  label='Password'
                  type='password'
                  fullWidth
                  variant='standard'
                  value={text.password}
                  onChange={(e) => {
                    setText({ ...text, password: e.target.value });
                  }}
                />
              </form>
              <Button onClick={handleOpenNewAccount}>
                <Typography
                  component='span'
                  sx={{ fontSize: "14px", color: "blue", mt: 1 }}>
                  Create new account?
                </Typography>
              </Button>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button
                onClick={handleOpenDashboard}
                type='submit'
                form='subscription-form'>
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
