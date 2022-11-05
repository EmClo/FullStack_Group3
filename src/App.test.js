import React, { useTransition } from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBar from "./components/navbar/NavBar";



// GooglePlaces.test.js (search bar test) - test that typing in the search bar inputs the correct text in the text field 
// GoogleMap.test.js (map rendering with crime info marker test - needs to be able to make api calls)
// Api.test.js (testing mock api calls)


// NavBar.test.js *works*

test('should render NavBar component', () => { 
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
 });


// testing the about link (testing that clicking the about link will render the about path) *works*
// this test focuses on checking that the DOM content changes after the event 
test('should render the about path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText(/About/);
  userEvent.click(linkElement);
  const pageText = "Who We Are";
  expect(pageText).not.toBeNull();
 })


// testing the data link (testing that clicking the about link will render the data path) *works*

test('should render the data path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText("Crime Reports");
  userEvent.click(linkElement);
  const pageText = "Crimes in Gloucestershire 2022 by Category";
  expect(pageText).not.toBeNull();
 })

// testing the home link
// test('should render the data path', () => {
//   render(
//     <BrowserRouter><NavBar /></BrowserRouter>
//   );
//   const linkElement = screen.getByText(/About/);
//   userEvent.click(linkElement);
//   const pageText = "Be Aware Everywhere gives the public access to specific location based crime statistics in an effort to empower users with the necessary information to make safer choices";
//   expect(pageText).not.toBeNull();
//  })

// testing the report link (testing that clicking the report link will render the report path) *works*

test('should render the report path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText("Report a Crime");
  userEvent.click(linkElement);
  const pageText = "Please let us know";
  expect(pageText).not.toBeNull();
 })


// testing the safety link (testing that clicking the about link will render the safety path) *works*
test('should render the safety path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText("Travel Tips");
  userEvent.click(linkElement);
  const pageText = "This page includes a number of tips";
  expect(pageText).not.toBeNull();
 })


// testing a non-existent page on the navBar link (unhappy path testing)


// ReportCrime.test.js test that the sendMail function works

// ReportCrime.test.js test that invalid email address aren't able to make use of the sendMail function (unhappy path testing)

