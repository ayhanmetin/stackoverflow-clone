"use client";

import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import SearchInput from "@/components/SearchInput";

const Header = () => {
  return (
    <div>
      <img src="" alt="logo" />
      <Navigation />
      <SearchInput />
      <Button>Log in</Button>
      <Button>Sign up</Button>
    </div>
  );
};

export default Header;
