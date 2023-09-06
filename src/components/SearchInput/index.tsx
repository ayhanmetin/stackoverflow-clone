"use client";
import Image from "next/image";
import styles from "./SearchInput.module.css";
import Button from "../Button";
import Link from "../Link";
import React, { useEffect, useState } from "react";

interface SearchInputProps extends React.HTMLAttributes<
  Omit<HTMLInputElement, "type" | "onClick">
>{
  containerStyle?: React.CSSProperties;
}

const SearchDropdown = () => {
  const guideItems: {
    title: string;
    desc: string;
  }[] = [
    {
      title: "[tag]",
      desc: "search within a tag",
    },
    {
      title: "answer:0",
      desc: "unanswered questions",
    },
    {
      title: "user:1234",
      desc: "search by author",
    },
    {
      title: "score:3",
      desc: "post with a 3+ score",
    },
    {
      title: '"words here"',
      desc: "exact phrase",
    },
    {
      title: "is:question",
      desc: "type of post",
    },
    {
      title: 'collective:"Name"',
      desc: "collective content",
    },
    {
      title: "isaccepted:yes",
      desc: "search within status",
    },
  ];

  return (
    <div className={styles["search-dropdown"]}>
      <div>
        {guideItems.map((item) => (
          <div key={item.title}>
            <span>{item.title}</span>
            <span>{item.desc}</span>
          </div>
        ))}
      </div>
      <div>
        <Button>Ask a question</Button>
        <Link>Search help</Link>
      </div>
    </div>
  );
};

const SearchInput = ({ containerStyle, ...props }: SearchInputProps) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => setDropdownVisible(true);

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const hideDropdown = () => {
      setDropdownVisible(false);
    };

    window.addEventListener("click", hideDropdown);
  }, []);

  return (
    <div className={styles["search-container"]} style={containerStyle} onClick={stopPropagation}>
      <div className={styles["search-input-wrapper"]}>
        <Image alt="search" width={18} height={18} src="/icons/search.svg" />
        <input onClick={showDropdown} type="text" {...props} />
      </div>
      {dropdownVisible && <SearchDropdown />}
    </div>
  );
};

export default SearchInput;
