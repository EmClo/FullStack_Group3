import React from "react";
import { render, screen} from '@testing-library/react';
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";


it("renders Navbar component", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
  });

