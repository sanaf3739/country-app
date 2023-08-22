import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCounties, setFilterCounties] = useState();
  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setCountries(response.data);
      setFilterCounties(response.data)
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const filter = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCounties(filter);
  },[search]);

  console.log(countries);
  const columns = [
    { name: "Country Name", selector: (row) => row.name },
    { name: "Capital", selector: (row) => row.capital },
    {
      name: "flag",
      selector: (row) => (
        <img src={row.flag} alt="flag" style={{ height: 50, width: 50 }} />
      ),
    },
    {
      name: "Native Name",
      selector: (row) => row.nativeName,
    },
    { name: "Population", selector: (row) => row.population },
  ];
  console.log(search);
  return (
    <DataTable
      title={"Country table"}
      columns={columns}
      data={filterCounties}
      pagination
      fixedHeader
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      subHeader
      subHeaderComponent={
        <input
          type="text"
          placeholder="search coutry"
          style={{ borderRadius: 5, height: 34, width: "20vw" } }
          onChange={(e) => setSearch(e.target.value)}
        />
      }
    />
  );
}

export default Countries;
