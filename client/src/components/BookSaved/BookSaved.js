import React from "react";
import Row from "../Row/Row"

const BookSaved = props => {
    return (

        <div className="card mt-3 w-100 border-primary">
            <h4 className="card-header">Saved</h4>
            <div className="card-body">
                <div className="card">
                    <h5 className="card-header text-left">Book Title</h5>
                    <div className="card-body">
                        <Row>
                            <div className="col-sm-9">
                                <h6 className="card-subtitle text-left my-auto">Written by Billy Bob</h6>
                            </div>
                            <div className="col-sm-3">

                                <button className="btn btn-primary m-1">View</button>
                                <button className="btn btn-danger m-1">Delete</button>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-sm-3">
                                <img src="https://via.placeholder.com/250/" />
                            </div>
                            <div className="col-sm-9 my-auto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                      </div>
                        </Row>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BookSaved;