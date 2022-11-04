import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";

// setupTests.js

// GooglePlaces.test.js (search bar test)

// GoogleMap.test.jas (map rendering with crime info marker test)

// NavBar.test.js


// testing the about link
test("render about link", () => {
  render(<NavBar />);
  expect(screen.getByText(/about/)).toBeInTheDocument();
});

// testing the data link
// testing the home link
// testing the report link
// testing the safety link

// ReportCrime.test.js (emailjs component test)

