import React from 'react'
import NavBar from './NavBar'

const Search = () => {
  return (
    <div>
      <NavBar/>

      <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>

                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">SEARCH</label>
                    <input type="text" className="form-control" placeholder='Enter name to search'/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-info">SEARCH</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search