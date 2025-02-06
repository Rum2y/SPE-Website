import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import TransitionOutlet from "../../../transitionOutlet";
import Headroom from "react-headroom";
import { useState } from "react";

export default function SPENavbar() {
  const navigations = [
    { name: "Upcoming Events", link: "/UpcomingEvents" },
    { name: "About Us", link: "/AboutUs" },
    { name: "Contact Us", link: "/ContactUs" },
    { name: "Membership", link: "/Member" },
    { name: "Awards & Certificates", link: "/Awards" },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Headroom style={{ zIndex: 1000 }}>
        <div className="flex justify-center items-center w-full bg-[white]">
          <div className="flex lg:gap-12 lg:px-10 xs:w-full lg:w-fit">
            <Link to={"/"}>
              <div className="xs:hidden lg:flex lg:gap-5 justify-center items-center">
                <img
                  className="w-[140px] h-[90px] py-3"
                  src="/img/spel.png"
                  alt=""
                />
                <h1 className="text-lg font-medium text-[#0D4C94] py-2 text-center">
                  SOCIETY OF PETROLEUM ENGINEERS: UNIVERSITY OF ALBERTA CHAPTER
                </h1>
                <img
                  className="w-[120px] h-[90px] py-3"
                  src="/img/logo_3.jpg"
                  alt=""
                ></img>
              </div>
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                paddingX: 5,
                width: "100%",
              }}
            >
              <div className="w-full flex">
                <div className="w-full">
                  <Link to={"/"} className="flex justify-start">
                    <img
                      className="w-[80px] h-[80px] py-3 mr-2"
                      src="/img/spel.png"
                      alt=""
                    />
                    <img
                      className="w-[50px] h-[70px] py-3"
                      src="/img/logo_3.jpg"
                      alt=""
                    ></img>
                  </Link>
                </div>
                <div className="w-3/4 text-right m-[auto]">
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon sx={{ fontSize: 40, color: "#0D4C94" }} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
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
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {navigations.map((nav, index) => {
                      return (
                        <div
                          key={index + 1}
                          className="flex justify-center items-center"
                        >
                          <Link to={nav.link} onClick={handleCloseNavMenu}>
                            <Button
                              sx={{
                                color: "black",
                                fontWeight: 500,
                                fontSize: "1.1rem",
                              }}
                            >
                              {nav.name}
                            </Button>
                          </Link>
                        </div>
                      );
                    })}
                  </Menu>
                </div>
              </div>
            </Box>

            <div className="xs:hidden lg:flex lg:gap-5 md:gap-5 xl:gap-12 w-full justify-center">
              {navigations.map((nav, index) => {
                return (
                  <div
                    key={index + 1}
                    className="flex justify-center items-center"
                  >
                    <Link to={`${nav.link}`}>
                      <Button
                        sx={{
                          color: "#0D4C94",
                          fontWeight: 500,
                          borderRadius: 0,
                          fontSize: { md: ".9rem", lg: "1.1rem" },
                          borderBottom: "2px solid transparent",
                          "&:hover": {
                            borderBottom: "2px solid #0D4C94",
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {nav.name}
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Headroom>
      <TransitionOutlet />
    </>
  );
}
