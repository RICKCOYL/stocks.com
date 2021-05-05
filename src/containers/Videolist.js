/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchStock } from '../actions/index';
import ball from '../images/Soccer-ball.gif';

const Videolist = ({
  userData, error, loading, fetchStock, filter,
}) => {
  useEffect(() => {
    fetchStock();
  }, []);

  // const leagues = userData.map((e) => (
  // ));

  // console.log(filter);

  return (
    <div className="all-matches grid shadow">
      {loading && <div><img id="loader" src={ball} alt="" /></div>}
      {error || userData.map((e) => (
        <div key={e.title} className="card">
          <Link to={`/details/${e.title}`}>
            <div><img src={e.thumbnail} className="card-img-top" alt="" /></div>

            <div className="card-body">
              <p>{e.competition.name}</p>
              <h4 className="card-text">{e.title}</h4>
            </div>
          </Link>
        </div>

      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.stock.stock,
  filter: state.catfilter,
  loading: state.stock.loading,
  error: state.stock.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStock: () => dispatch(fetchStock()),
});

Videolist.propTypes = {
  fetchStock: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  userData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
  }).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videolist);
