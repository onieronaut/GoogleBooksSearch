import React from "react";
import Row from "../Row/Row"

const BookResults = props => {
    return (
                <div className="card">
                    <h5 className="card-header text-left">{props.title}</h5>
                    <div className="card-body">
                        <Row>
                            <div className="col-sm-9">
                                <h6 className="card-subtitle text-left my-auto">Written by {props.authors} </h6>
                            </div>
                            <div className="col-sm-3 justify-content-end">

                                <a href={props.link} target="_blank" rel="noopener noreferrer"><button className="btn btn-primary m-1">View</button></a>
                                <button className="btn btn-success m-1" onClick={props.save}>Save</button>
                            </div>
                        </Row>
                        <Row>
                            <div className="col-sm-3">
                                <img alt={props.title} className="img-thumbnail" src={props.image} />
                            </div>
                            <div className="col-sm-9 my-auto">
                                {props.description}
                            </div>
                        </Row>
                    </div>
                </div>
    
    )
}

export default BookResults;