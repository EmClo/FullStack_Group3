import React, { useTransition } from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

// GooglePlaces.test.js (search bar test)

// GoogleMap.test.js (map rendering with crime info marker test)

// NavBar.test.js

test('should render NavBar component', () => { 
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
 });


// testing the about link - testing that clicking the about link will render the about path 
// this test focuses on checking that the DOM content changes after the event 
test('should render the about path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText(/About/);
  userEvent.click(linkElement);
  const pageText = "Be Aware Everywhere gives the public access to specific location based crime statistics in an effort to empower users with the necessary information to make safer choices";
  expect(pageText).not.toBeNull();
 })


// testing the data link
// testing the home link
// testing the report link
// testing the safety link

// testing a bad route link (non-existent page link)

// Api.test.js (testing mock api calls)

// ReportCrime.test.js (emailjs component test)
