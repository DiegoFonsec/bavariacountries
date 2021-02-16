import React, { Fragment } from 'react'
import { Link } from "react-router-dom"


const Listdata = ({ data }) => {
    //console.log(searchCountry);
    return (
        <Fragment>
            <div className="row">
                {
                    data.map(item => {
                        return (
                            <div key={item.numericCode} className="col-12 col-md-3">
                                <Link to={`${item.name}`}>
                                    <div className="card">
                                        <img className="card-img-top" src={item.flag} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title font-weight-bold">{item.name}</h5>
                                            <p className="mb-1"><span className="font-weight-bold">Population: </span>{item.population}</p>
                                            <p className="mb-1"><span className="font-weight-bold">Region: </span>{item.region}</p>
                                            <p className="mb-1"><span className="font-weight-bold">Capital: </span>{item.capital}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </Fragment>
    );
}

export default Listdata;