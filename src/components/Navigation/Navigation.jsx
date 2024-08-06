import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "./logo.png";
import "./Navigation.css";

const CustomAppBar = styled(AppBar)({
  backgroundColor: "black",
});

const StyledButton = styled(Button)({
  "&:hover": {
    color: "red",
  },
});

const Navigation = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <img src={logo} alt="Logo" className="logo" />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <StyledButton color="inherit"> Home </StyledButton>
        <StyledButton color="inherit"> TV Shows </StyledButton>
        <StyledButton color="inherit"> About Us </StyledButton>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navigation;
