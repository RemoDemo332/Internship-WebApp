import React from "react";
import "./Barrels.css";
import Grid from "@mui/material/Grid";
import JobTableInactive from "../components/JobTableInactive";
import uniqueKey from "../utils/tableKeyGenerator";
import * as TbIcons from "react-icons/tb";
import { Link } from "react-router-dom";

const Barrels = () => {
  const jobTableArray = [
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
    <JobTableInactive key={uniqueKey()}></JobTableInactive>,
  ];

  return (
    <div className="columnContainer">
      <Grid container spacing={6} columns={24} id="pageGrid">
        <Grid item xs={2}>
          <div id="machineCol">
            <h2 id="colHeader">Machine #</h2>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div id="individualCol">
            <h2 id="colHeader">At Bat</h2>
            {jobTableArray}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div id="individualCol">
            <h2 id="colHeader">On Deck</h2>
            {jobTableArray}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div id="individualCol">
            <h2 id="colHeader">In the Hole</h2>
            {jobTableArray}
          </div>
        </Grid>
        <Grid item xs={1} id="gridControlCol">
          <div id="controlCol">
            <Link to="/Barrels">
              <TbIcons.TbLayoutGrid size="36px" style={{ color: "black" }} />
            </Link>
            <Link to="/Barrels/Details">
              <TbIcons.TbListDetails size="36px" style={{ color: "black" }} />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Barrels;
