import React, { useEffect, useState } from "react";
import { useDeferredValue } from "react";
import Select from "react-select";
import Graph from "./Graph";

// Drop down selector box that would ideally be used to display graphs for a
// specific area but the on select provided too difficuly so currently used
// as a decoration to display how we would like the app to look

function PoliceForces() {
  var policeforcelist = [
    { value: 1, label: "Avon and Somerset" },

    { value: 2, label: "Bedfordshire" },

    { value: 3, label: "Cambridgeshire" },

    { value: 4, label: "Cheshire" },

    { value: 5, label: "City of London" },

    { value: 6, label: "Cleveland" },

    { value: 7, label: "Cumbria" },

    { value: 8, label: "Derbyshire" },

    { value: 9, label: "Devon & Cornwall" },

    { value: 10, label: "Dorset" },

    { value: 11, label: "Durham" },

    { value: 12, label: "Essex" },

    { value: 13, label: "Gloucestershire" },

    { value: 14, label: "Greater Manchester" },

    { value: 15, label: "Hampshire" },

    { value: 16, label: "Hertfordshire" },

    { value: 17, label: "Humberside" },

    { value: 18, label: "Kent" },

    { value: 19, label: "Lancashire" },

    { value: 20, label: "Lincolnshire" },

    { value: 21, label: "Merseyside" },

    { value: 22, label: "Norfolk" },

    { value: 23, label: "North Yorskire" },

    { value: 24, label: "Northamptonshire" },

    { value: 25, label: "Northumbria" },

    { value: 26, label: "Nottinghamshire" },

    { value: 27, label: "South Yorkshire" },

    { value: 28, label: "Staffordshire" },

    { value: 29, label: "Suffolk" },

    { value: 30, label: "Surrey" },

    { value: 31, label: "Sussex" },

    { value: 32, label: "Thames Valley" },

    { value: 33, label: "Warwickshire" },

    { value: 34, label: "West Mercia" },

    { value: 35, label: "West Midlands" },

    { value: 36, label: "West Yorkshire" },

    { value: 37, label: "Wiltshire" },

    { value: 38, label: "Dyfed-Powys" },

    { value: 39, label: "Gwent" },

    { value: 40, label: "North Wales" },

    { value: 41, label: "South Wales" },

    { value: 42, label: "Police Scotland" },

    { value: 43, label: "Northern Ireland PSNI" },
  ];

  // Reserching how to render the map -- proved to
  // be too confusing and ran out of time to ascertain how to display graoh on selection
  //   const [value, setValue] = useState("selectForce");
  //   const [graphContentVisible, setgraphContentVisible] = useState(false);
  //   useEffect(() => {
  //     value === "Gloucestershire"
  //       ? setgraphContentVisible(true)
  //       : setgraphContentVisible(false);
  //   });
  //   const handleOnChange = (e) => {
  //     setValue(e.target.value);
  //   };

  //   const renderResult = () => {
  //     let result;
  //     value === "selectForce";
  //     return result;
  //   };
  //   const [result, dropdownvalue] = useState(policeforcelist.label);
  //   const handleSelect = (e) => {
  //     dropdownvalue(e.label);
  //   };

  return (
    <div className="Graph">
      <div className="graphSelector">
        <Select options={policeforcelist} />
        {/* {graphContentVisible && <selectForce />} */}
      </div>
      <Graph />
    </div>
  );
}
export default PoliceForces;
