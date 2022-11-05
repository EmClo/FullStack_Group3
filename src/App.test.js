import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
// import axiosMock from "axios";
import NavBar from "./components/navbar/NavBar";
import GooglePlaces from "./components/GooglePlaces";
// import { API } from "./utils/APIS";
import ReportCrime from "./pages/report/Report";
import { sendForm } from "emailjs-com";



// GoogleMap.test.js (map rendering with crime info marker test - needs to be able to show the map and make api calls to crime data)

// Api.test.js (testing mock api calls - to the police crime api)

// async axios mock get api calls test goes here: 

// it('should get and display data', async () => {
//   // coordinates from somewhere in Leicester
//   const lat = "52.629729";
//   const lng = "-1.131592";
//   const date = "2021-02";
//   const {} = render(<API />)
//  })


// GooglePlaces.test.js (search bar test) - test that typing in the search bar inputs the correct text in the text field *not working*

// test('should let user type in the search box', () => { 
//   render(
//     <BrowserRouter><GooglePlaces /></BrowserRouter>
//   );
//   const inputBox = screen.getByTestId('searchBarTesting'); 
//   userEvent.type(inputBox, 'Manchester'); 
//   expect(inputBox).toHaveValue('Manchester');
//  })



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

// testing the home link (testing that clicking the about link will render the home path) *works*
test('should render the home path', () => {
  render(
    <BrowserRouter><NavBar /></BrowserRouter>
  );
  const linkElement = screen.getByText(/Home/);
  userEvent.click(linkElement);
  const pageText = "Please enter your location to view the crime in your area below";
  expect(pageText).not.toBeNull();
 })

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

// ReportCrime.test.js test that the sendMail function works *not working*

// test('should let user report a crime by sending us an email', () => { 
//   render(
//     <BrowserRouter><ReportCrime /></BrowserRouter>
//   );
//   const button = screen.getByTestId('reportCrimeButtonTest'); 
//   userEvent.click(button); 
//   expect(sendForm).toHaveBeenCalled();
//  })

// ReportCrime.test.js test that invalid email address aren't able to make use of the sendMail function (unhappy path testing)

