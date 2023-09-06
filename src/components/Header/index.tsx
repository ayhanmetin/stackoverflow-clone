"use client";

import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";
import "./header.css"

const Header = () => {
  return (
    <div className="header-wrapper">
      <img className="logoPng" src="/logo/stackLogo.png" alt="logo" />
      <Navigation />
      <SearchInput placeholder="Search..." />
      <div className="auth-buttons">
      <Button>Log in</Button>
      <Button>Sign up</Button>
      </div>
    </div>
  );
};

export default Header;
