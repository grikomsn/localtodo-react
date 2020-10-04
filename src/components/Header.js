import "./Header.scss";

import * as React from "react";

import { description, name } from "../../package.json";

import logo from "../logo.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="React" />
      <h1>{name}</h1>
      <p>{description}</p>
    </header>
  );
}
