import React, { useRef } from "react";
import { sortOption, statusOption, typeOption } from "../helpers/constants";
import { useDispatch } from "react-redux";
import {
  clearFilters,
  filterBySearch,
  filterByStatus,
  filterByType,
  sortJobs,
} from "../redux/jobSlice";
const Filter = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const typeRef = useRef();
  const statusRef = useRef();
  const sortRef = useRef();

  const handleReset = () => {
    dispatch(clearFilters());
    inputRef.current.value = "";
    typeRef.current.value = "Seçiniz";
    statusRef.current.value = "Seçiniz";
    sortRef.current.value = "Seçiniz";
  };

  return (
    <div className="filter-sec">
      <h2>Filtre Form</h2>
      <form>
        <div>
          <label htmlFor="">Ara</label>
          <input
            onChange={(e) => dispatch(filterBySearch(e.target.value))}
            type="text"
            placeholder="Örn: Amazon"
            ref={inputRef}
          />
        </div>
        <div>
          <label htmlFor="">Durum</label>
          <select
            name="status"
            id=""
            onChange={(e) => dispatch(filterByStatus(e.target.value))}
            ref={statusRef}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {statusOption.map((statu) => (
              <option>{statu}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Türü</label>
          <select
            name="type"
            id=""
            onChange={(e) => dispatch(filterByType(e.target.value))}
            ref={typeRef}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {typeOption.map((type) => (
              <option>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="">Sırala</label>
          <select
            name="type"
            id=""
            onChange={(e) => dispatch(sortJobs(e.target.value))}
            ref={sortRef}
          >
            <option disabled selected>
              Seçiniz
            </option>
            {sortOption.map((sort) => (
              <option>{sort}</option>
            ))}
          </select>
        </div>
        <div>
          <button type="button" onClick={handleReset}>
            Temizle
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
