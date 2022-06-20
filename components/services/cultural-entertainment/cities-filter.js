import {Fragment, useState} from "react";
import {allCities} from "../../../data/cities";
import SportLocation from "../../icons/sport-location";
import SportArrow from "../../icons/sport-arrow";
import styes from './cities-filter.module.css';

const CitiesFilter = (props) => {

    const [selected, setSelected] = useState('تهران');

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
        setSelected(selected);
    };

    const cityList = allCities();

    return (
      <Fragment>
          <div>
              <SportLocation />
              <select className={styes.dropdown} value={props.selected} onChange={dropdownChangeHandler}>
                  {cityList.map((city) => (
                      <option key={city.id}>
                          {city.city}
                      </option>
                  ))}
              </select>
              <SportArrow />
          </div>
      </Fragment>
    );
};

export default CitiesFilter;