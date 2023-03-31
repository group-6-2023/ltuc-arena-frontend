import { Box, Typography } from "@mui/material";
import Button from "react-bootstrap/Button";
import img1 from "../../assets/hero/img1.jpg";
import "./heroBanner.css";

export default function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative "
      p="0px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: "44px", color: "#130d2e" }}
        mb="23px"
        ml="100px"
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" mb={4} ml="100px" sx={{ color: "#130d2e" }}>
        Check Out The Most Effective Exercises
      </Typography>
      <Button
        variant="outline-secondary"
        type="submit"
        className="searchbutton"
        style={{
          marginLeft: "100px",
          width: "200px",
          height: "60px",
          fontSize: "20px",
        }}
        href="#cardcontanier"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="rgb(177, 8, 8)"
        sx={{
          opacity: 0.2,
        }}
        fontSize="200px"
        mt={10}
      >
        LTUC-Arena
      </Typography>
      <img src={img1} className="heroimg" />
    </Box>
  );
}
