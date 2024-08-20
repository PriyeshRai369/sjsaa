import React, { useState, useEffect, useMemo, useContext } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helper/scroll.js";
import axios from "axios";
import { Context } from "../../context/Context.jsx";

export default function OurAlumni() {
  const {setLoginModal} = useContext(Context)
  const [memberData, setMemberData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("membernace");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 20;

  useEffect(() => {
    async function fetchMember() {
      try {
        const response = await axios.get(
          "https://www.gdsons.co.in/draft/sjs/all-members"
        );
        setMemberData(response.data);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchMember();
  }, []);

  const filteredProducts = useMemo(() => {
    const filtered = memberData.filter((product) =>
      product[filterCategory]
        ?.toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    );
    return filtered.slice(
      (currentPage - 1) * rowsPerPage,
      currentPage * rowsPerPage
    );
  }, [memberData, filterValue, filterCategory, currentPage]);

  const handleFilterValueChange = (e) => {
    setFilterValue(e.target.value);
    setCurrentPage(1); 
  };

  const handleFilterCategoryChange = (e) => {
    setFilterCategory(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(memberData.length / rowsPerPage);
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageChange(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 7; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="ellipsis">...</span>);
        pages.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={currentPage === totalPages ? "active" : ""}
          >
            {totalPages}
          </button>
        );
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        pages.push(
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            className={currentPage === 1 ? "active" : ""}
          >
            1
          </button>
        );
        pages.push(<span key="ellipsis1">...</span>);
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pages.push(<span key="ellipsis2">...</span>);
        pages.push(
          <button
            key={totalPages}
            onClick={() => handlePageChange(totalPages)}
            className={currentPage === totalPages ? "active" : ""}
          >
            {totalPages}
          </button>
        );
      } else {
        pages.push(
          <button
            key={1}
            onClick={() => handlePageChange(1)}
            className={currentPage === 1 ? "active" : ""}
          >
            1
          </button>
        );
        pages.push(<span key="ellipsis">...</span>);
        for (let i = totalPages - 6; i <= totalPages; i++) {
          pages.push(
            <button
              key={i}
              onClick={() => handlePageChange(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      }
    }

    return pages;
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
                  <option value="membernace">Name</option>
                  <option value="batch">Batch</option>
                  <option value="location">Current Location</option>
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

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Name</th>
                    <th>Joined Year</th>
                    <th>Batch</th>
                    <th>Qualification</th>
                    <th>Date of Birth</th>
                    <th>Profession & Working As</th>
                    <th>Current Location</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProducts.map((product, index) => (
                    <tr key={index}>
                      <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                      <td>
                        <Link
                          to={`/user/profile/${product.membernace}`}
                          className="nameLink"
                          onClick={scrollToTop}
                        >
                          {product.membernace}
                        </Link>
                      </td>
                      <td>{product.joiningyear}</td>
                      <td>{product.batch}</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>NA</td>
                      <td>{product.location}</td>
                      <td>
                        {product?.email ? (
                          <div className="btn btn-primary" onClick={()=>setLoginModal(true)}>Login</div>
                        ) : (
                          <div
                            className="btn btn-light"
                            style={{ padding: "5px", fontSize: "15px" }}
                          >
                            Update Email
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="pagination">
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
