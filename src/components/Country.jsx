import React, { Fragment } from 'react'
import './Contentstyle.css'
import { useParams, Link } from 'react-router-dom';


const Country = (props) => {

    const { name } = useParams();
    const [countryView, setCountryView] = React.useState([]);

    React.useEffect(() => {
        getCountryView();
    }, [])
    //Get All Countries
    const getCountryView = async () => {
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
        const data = await res.json();
        setCountryView(data);

    }

    return (
        <div className="country" style={props.st}>
            <div className="mb-5">
                <Link to="/">
                    <span className="back" style={props.st}>
                        Back
                    </span>
                </Link>

            </div>
            <div className="row">
                {
                    countryView.map(item => {
                        return (
                            <Fragment key={item.numericCode}>

                                <div className="col-12 col-md-6">
                                    <img className="card-img-top" src={item.flag} alt="Card image cap" />
                                </div>
                                <div className="col-12 col-md-6 py-4">
                                    <h3 className="mb-4">{item.name}</h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <p className="mb-2 font-weight-bold">Native Name: <span className="font-weight-normal ">{item.nativeName} </span></p>
                                            <p className="mb-2 font-weight-bold">Population: <span className="font-weight-normal ">{item.population} </span></p>
                                            <p className="mb-2 font-weight-bold">Religion: <span className=" font-weight-normal">{item.region} </span></p>
                                            <p className="mb-2 font-weight-bold">Sub Region: <span className="font-weight-normal ">{item.subregion} </span></p>
                                            <p className="mb-2 font-weight-bold">Capital: <span className="font-weight-normal ">{item.capital} </span></p>
                                        </div>
                                        <div className="col-12 col-md-6">
                                            {item.topLevelDomain.map(a => {
                                                return (
                                                    <div key={a}>
                                                        <p className="mb-2 font-weight-bold">Top Level Domain: <span className="font-weight-normal">{a} </span></p>

                                                    </div>

                                                )
                                            })}
                                            <p className="mb-2 font-weight-bold">
                                                Languages:

                                                {item.currencies.map(c => {
                                                return (
                                                    <Fragment key={c.name} >
                                                        <span className="mb-2 font-weight-normal "> {c.name},</span>

                                                    </Fragment>

                                                )
                                            })}

                                            </p>
                                            <p className="mb-2 font-weight-bold">
                                                Languages:

                                                {item.languages.map(c => {
                                                return (
                                                    <Fragment key={c.name} >
                                                        <span className="mb-2 font-weight-normal "> {c.name},</span>

                                                    </Fragment>

                                                )
                                            })}

                                            </p>
                                        </div>
                                    </div>
                                    {<div className="row border-countries">
                                        <div className="col-12">
                                            <p className="mb-2 font-weight-bold">
                                                Border countries:

                                                {item.borders.map(c => {
                                                return (
                                                    <Fragment key={c.name} >
                                                        <span className="mb-2 font-weight-normal text-center">{c}</span>
                                                    </Fragment>

                                                )
                                            })}

                                            </p>
                                        </div>
                                    </div>}
                                </div>
                            </Fragment>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Country;