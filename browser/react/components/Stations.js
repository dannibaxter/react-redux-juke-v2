import React from 'react';
import { Link } from 'react-router';

const DUMMY_STATIONS_DATA = [
  { name: '90s Hip Hop' },
  { name: 'Ambient' },
  { name: 'Instrumental' }
];

export default (props) => {
  console.log(props,"SWEET ASS PROPS")
  return (
    <div>
      <h3>Stations</h3>
        <div className="list-group">
        {
          DUMMY_STATIONS_DATA.map(station => {
            return (
              <div className="list-group-item" key={station.name}>
                <Link to={`/stations/${station.name}`}>{station.name}</Link>
              </div>
            );
          })
        }
        </div>
    </div>
  );
}
