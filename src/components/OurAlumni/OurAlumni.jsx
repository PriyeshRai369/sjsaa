import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Link } from "react-router-dom";
import { products } from "./Data";
import {scrollToTop} from '../../helper/scroll.js'
export default function OurAlumni() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterValue, setFilterValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("Name");

  useEffect(() => {
    const filtered = products.filter((product) =>
      product[filterCategory]
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [filterValue, filterCategory]);

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const nameBodyTemplate = (rowData) => {
    return (
      <Link to={`/user/profile/${encodeURIComponent(rowData.Name)}`} className="name-link" onClick={scrollToTop}>
        {rowData.Name}
      </Link>
    );
  };

  return (
    <section className="sectionContainer">
      <div className="container">
        <div className="title">
          <h1>Members Details</h1>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="memberFilter">
              <div className="filterSection">
                <select
                  name="searchCategory"
                  id="searchCategory"
                  value={filterCategory}
                  onChange={handleFilterCategoryChange}
                >
                  <option value="Name">Name</option>
                  <option value="Batch">Batch</option>
                  <option value="Location">Current Location</option>
                </select>
                <input
                  type="text"
                  name="search"
                  value={filterValue}
                  onChange={handleFilterValueChange}
                  placeholder="Search..."
                />
              </div>
            </div>

            <DataTable
              value={filteredProducts}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem", color: "white" }}
            >
              <Column field="Sr. No." header="Sr. No." />
              <Column
                field="Name"
                header="Name"
                body={nameBodyTemplate}
              />
              <Column field="Joined Year" header="Joined Year" />
              <Column field="Batch" header="Batch"/>
              <Column field="Qualification" header="Qualification" />
              <Column field="Date of Birth" header="Date of Birth" />
              <Column
                field="Profession & Working As"
                header="Profession & Working As"
              />
              <Column field="Current Location" header="Current Location" />
            </DataTable>
          </div>
        </div>
      </div>
    </section>
  );
}
