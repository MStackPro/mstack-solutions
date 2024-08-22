import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { navlinks } from "@/assets/Data";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SwipeableTemporaryDrawer() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className="flex justify-center items-center flex-col gap-10"
    >
      <IconButton onClick={toggleDrawer(false)} className="mr-40 mt-12">
        <CloseOutlinedIcon fontSize="large" />
      </IconButton>

      <List>
        {navlinks.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.path}>
              <ListItemText
                primary={item.name}
                className={`${
                  item.path == pathname &&
                  "text-primary transition-all duration-500 ease-in-out"
                } capitalize transition-all ease-in-out hover:text-primary `}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Link href="/contact">
          <Button>Contact</Button>
        </Link>
      </List>
    </Box>
  );

  return (
    <section>
      <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>

      <SwipeableDrawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{ style: { backgroundColor: "#f1f1f1" } }}
      >
        {drawerList()}
      </SwipeableDrawer>
    </section>
  );
}
