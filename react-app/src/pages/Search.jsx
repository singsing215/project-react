import React, { useState, useEffect } from "react"
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/Button';
import Typography from '@material-ui/core/Button';
import { LinearProgress } from '@material-ui/core';
// import "../css/Search.scss";




const Search = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch("/rent/json");
      const data = await response.json();
      console.log(data)
      setData(data)
      setLoading(false)
    })();
  }, [])

  return (
    <div id="div01" class="card col-12 col-sm-4 col-lg-4 col-xl-4">
      <form action="http://localhost:1337/rent/jpaginate" method="get">
          <h1>Property Search</h1>
          <div class="row">
            <div class="col-12 col-sm-4 col-lg-4 col-xl-3">
              <label>Estate:</label></div>
            <div class="col-12 col-sm-8 col-lg-8 col-xl-9">
              <select type="string" class="form-control" name="estate" id="estate">
                <option value="">--please select a estate--</option>
                <option value="Robinson Heights">Robinson Heights</option>
                <option value="Hoi deen Court">Hoi deen Court</option>
                <option value="Lime Stardom">Lime Stardom</option>
                <option value="AKVO Hotel">AKVO Hotel</option>
              </select></div>
          </div>
          <div class="row">
            <button type="submit" class="btn btn-primary">Search</button>
          </div>
      </form>
    </div>
  )
}

export default Search
