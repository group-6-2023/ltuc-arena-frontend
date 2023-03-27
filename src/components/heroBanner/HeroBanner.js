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
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: "44px", color: "#417faf" }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="22px" mb={4} sx={{ color: "#5ca0d3" }}>
        Check Out The Most Effective Exercises
      </Typography>
      <Button
        variant="outline-secondary"
        type="submit"
        className="searchbutton"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#5ca0d3"
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
