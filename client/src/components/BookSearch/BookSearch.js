import React from "react";

const BookSearch = props => {
  
    return (
        <div className="card w-100 mt-3 border-primary">
              <h4 className="card-header">Book Search</h4>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <h5>Book Name</h5>
                    <input name="title" type="text" onChange={props.change}/>
                  </div>
                  <button className="btn btn-primary" onClick={props.search}>Search</button>
                </form>
              </div>
            </div>
    )
}

export default BookSearch;