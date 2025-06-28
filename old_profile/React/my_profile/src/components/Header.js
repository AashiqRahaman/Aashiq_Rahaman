import React from "react";

const Header = () => {
  const name = "John Doe";
  const title = "Frontend Developer";
  const bio = "Passionate frontend developer with a knack for creating engaging and user-friendly interfaces.";

  return (
    <header className="text-center">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p className="text-xl text-gray-600">{title}</p>
      <p className="mt-2 text-gray-700">{bio}</p>
    </header>
  );
};

export default Header;