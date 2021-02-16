import React from 'react'


const Filter = ({ onFiltered }) => {

    const [country, setCountry] = React.useState('');
    const [region, setRegion] = React.useState('');

    const change = (name, value) => {
        if (name == 'country') {
            onFiltered(value, region);
            setCountry(value);
        }
        if (name == 'region') {
            onFiltered(country, value);
            setRegion(value);
        }
    };

    return (
        <div className="d-flex">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn " type="button" style={{ background: '#ffff', borderLeft: '1px solid #ced4da', borderTop: '1px solid #ced4da', borderBottom: '1px solid #ced4da' }}><img src="./loupe.png" /></button>
                </div>
                <input className="form-control" type="text" placeholder="Search country" onChange={(e) => change('country', e.target.value)} />
            </div>
            <select className="custom-select ml-3" onChange={(e) => change('region', e.target.value)}>
                <option value="Africa" >Africa</option>
                <option value="Americas">America</option>
                <option value="Asia" >Asia</option>
                <option value="Europe" >Europa </option>
                <option value="Oceania" >Oceania</option>
            </select>
        </div>
    )
}

export default Filter;