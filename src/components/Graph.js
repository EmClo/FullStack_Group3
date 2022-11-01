import React from "react";
import "../pages/data/Data.css";
import ReactApexChart from "react-apexcharts";

function Graph() {
  const series = [
    {
      name: "Violent Crimes and Sexual Offences",
      data: [
        
        1815,
        1598,
        2240,
        1838,
        2305,
        2232,
        2366,
        2617,
        
      ],
    },
    {
      name: "Burglary",
      data: [ 198, 204, 271, 282, 206, 244, 217, 261],
    },
    {
      name: "Criminal Damage",
      data: [ 293, 320, 399, 431, 429, 411, 458, 512],
    },

    {
      name: "Theft from Person",
      data: [ 18, 18, 37, 19, 24, 20, 28, 25],
    },

    {
      name: "Anti-social Behaviour",
      data: [ 803, 722, 602, 704, 788, 830, 657, 1009],
    },


  ];
  const options = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
      
       
        "1/30/22",
        "2/30/22",
        "3/30/22",
        "4/30/22",
        "5/30/22",
        "6/30/22",
        "7/30/22",
        "8/30/22",
        
        
      ],
    },
    
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>Crimes in Gloucestershire 2022 by Category</h2>
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
      <br />
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Graph;