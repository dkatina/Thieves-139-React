import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const [user, setUser] = React.useState({
    email: "",
    uid: "",
  });

  React.useEffect(() => {
    getCurrentUser();
  }, [user.email]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getCurrentUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (typeof user.email === "string") {
          setUser({
            email: user.email,
            uid: user.uid,
          });
        }
        console.log(user);
      }
    });
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({
          email: "",
          uid: "",
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <AppBar sx={{ backgroundColor: "white", color: "black" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CatchingPokemonIcon sx={{ display: { xs: "none", md: "flex" } }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Thieves-139 Pokedex
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Link to={"/"} className="text-dark text-decoration-none">
                  Home
                </Link>
              </MenuItem>
              <MenuItem key="Pokemon Finder" onClick={handleCloseNavMenu}>
                <Link
                  to={"/pokemonFinder"}
                  className="text-decoration-none text-dark"
                >
                  Pokemon Finder
                </Link>
              </MenuItem>
              <MenuItem key="Team" onClick={handleCloseNavMenu}>
                <Link to={"/team"} className="text-decoration-none text-dark">
                  Team
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <CatchingPokemonIcon sx={{ display: { xs: "flex", md: "none" } }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Thieves-139 Pokedex
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link to={"/"} className="text-decoration-none">
              <Button
                key={"Home"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Home
              </Button>
            </Link>
            <Link to={"/pokemonFinder"} className="text-decoration-none">
              <Button
                key={"Pokemon Finder"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Pokemon Finder
              </Button>
            </Link>
            <Link to={"/team"} className="text-decoration-none">
              <Button
                key={"Team"}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                Team
              </Button>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {user.email ? (
            <>
              <span className="me-2">{user.email && user.email}</span>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Dylan K"
                    src="https://pics.craiyon.com/2023-11-24/dntFYnWqQXeXb732Gqx1Qw.webp"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key={"Profile"} onClick={handleCloseUserMenu}>
                  <Link
                    to={"/profile"}
                    className="text-decoration-none text-dark"
                  >
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={handleCloseUserMenu}>
                  <Typography onClick={handleLogout}>Logout</Typography>
                </MenuItem>
                </Menu>
            </>
            ) : (
              <>
                  <Link to={"/signup"} className="text-decoration-none text-dark me-3">
                    Sign Up
                  </Link>
                  <Link to={"/login"} className="text-decoration-none text-dark">Login</Link>
              </>
            )
          }

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Nav;
