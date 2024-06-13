import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function NavbarMenu() {
  return (
    <Navbar className="bg-slate-50">
      <NavbarBrand>
        <p className="font-bold text-amber-500">GOKWIK</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-bold" color="warning" href="#">
            QC AUTOMATION
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <Button as={Link} size="lg" color="warning" href="#" variant="shadow">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} size="lg" color="warning" href="#" variant="shadow">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
