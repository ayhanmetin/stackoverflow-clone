"use client";

const SearchInput = (
  props: React.HTMLAttributes<Omit<HTMLInputElement, "type">>
) => {
  return <input type="text" {...props} />;
};

export default SearchInput;
