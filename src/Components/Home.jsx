import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  CardMedia,
  Box,
  Button,
} from "@mui/material";
import Image11 from "../Images/Image-11.jpeg";
import Image17 from "../Images/Image-17.jpeg";
import Image30 from "../Images/Image-30.jpeg";
import Image36 from "../Images/Image-36.jpeg";
import Image37 from "../Images/Image-37.jpeg";
import Image39 from "../Images/Image-39.jpeg";
import Image40 from "../Images/Image-40.jpeg";
import Image41 from "../Images/Image-41.jpeg";

import Image42 from "../Images/Image-42.jpeg";

export default function Home() {
  const [activeGroup, setActiveGroup] = useState("");

  const mainImageStyle = (isActive) => ({
    width: "100%",
    height: "auto",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: isActive ? 1 : 0,
    transform: isActive
      ? "scale(1) translateX(0)"
      : "scale(0.95) translateX(10px)",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    pointerEvents: isActive ? "auto" : "none",
  });

  return (
    <>
      <div
        style={{
          color: "black",
          padding: "80px 0",
        }}>
        <Container maxWidth='xl'>
          <Grid
            container
            sx={{ pl: "40px", pr: "40px", mr: "20px", ml: "20px" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box>
                <Typography
                  variant='h2'
                  component='h1'
                  sx={{
                    margin: { xs: "20px 0", md: "30px 15px" },
                    fontSize: { xs: "45px", md: "55px" },
                    fontWeight: 500,
                  }}>
                  Discover Your
                </Typography>
                <Typography
                  variant='h2'
                  component='h1'
                  sx={{
                    margin: { xs: "20px 0", md: "30px 15px" },
                    fontSize: { xs: "45px", md: "55px" },
                    fontWeight: 500,
                  }}>
                  Signature Scent
                </Typography>
                <Typography
                  variant='p'
                  sx={{
                    color: "#00000080",
                    fontSize: { xs: "24px", md: "29px" },
                  }}>
                  Luxury fragrances crafted for your unique style
                </Typography>
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  <Typography
                    variant='h4'
                    sx={{ fontWeight: "200", m: "30px 0" }}>
                    Shop for:
                  </Typography>
                  <Button
                    variant='outlined'
                    color='black'
                    onClick={() => setActiveGroup("man")}
                    sx={{
                      borderRadius: "20px",
                      fontWeight: "bold",
                      mr: "15px",
                      p: "7px 20px",
                      backgroundColor:
                        activeGroup === "man" ? "#ffc107" : "transparent",
                    }}>
                    Hi / him
                  </Button>
                  <Button
                    variant='outlined'
                    color='black'
                    onClick={() => setActiveGroup("woman")}
                    sx={{
                      borderRadius: "20px",
                      fontWeight: "bold",
                      p: "7px 20px",
                      backgroundColor:
                        activeGroup === "woman" ? "#ffc107" : "transparent",
                    }}>
                    She / her
                  </Button>
                </Box>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: "relative",
                  width: "80%",
                  minHeight: "450px",
                }}>
                <CardMedia
                  component='img'
                  image={Image11}
                  alt='Initial Image'
                  sx={mainImageStyle(activeGroup === "")}
                />

                <CardMedia
                  component='img'
                  image={Image30}
                  alt='Men Main Scent'
                  sx={mainImageStyle(activeGroup === "man")}
                />

                <CardMedia
                  component='img'
                  image={Image17}
                  alt='Women Main Scent'
                  sx={mainImageStyle(activeGroup === "woman")}
                />
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 0, md: "125px" },
              position: "relative",
              minHeight: { xs: 0, md: "260px" },
            }}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                opacity: activeGroup === "man" ? 1 : 0,
                transform:
                  activeGroup === "man" ? "translateY(0)" : "translateY(10px)",
                pointerEvents: activeGroup === "man" ? "auto" : "none",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}>
              <CardMedia
                component='img'
                image={Image39}
                alt=''
                sx={{ width: "150px", mr: "30px" }}
              />

              <CardMedia
                component='img'
                image={Image42}
                alt=''
                sx={{ width: "150px", mr: "30px" }}
              />

              <CardMedia
                component='img'
                image={Image40}
                alt=''
                sx={{ width: "150px" }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                opacity: activeGroup === "woman" ? 1 : 0,
                transform:
                  activeGroup === "woman"
                    ? "translateY(0)"
                    : "translateY(10px)",
                pointerEvents: activeGroup === "woman" ? "auto" : "none",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}>
              <CardMedia
                component='img'
                image={Image36}
                alt=''
                sx={{ width: "150px", mr: "30px" }}
              />
              <CardMedia
                component='img'
                image={Image37}
                alt=''
                sx={{ width: "150px", mr: "30px" }}
              />
              <CardMedia
                component='img'
                image={Image41}
                alt=''
                sx={{ width: "150px" }}
              />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
}
