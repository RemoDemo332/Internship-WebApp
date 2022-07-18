import React from "react";
import "./Barrels.css";
import Grid from "@mui/material/Grid";
import JobTableInactive from "../components/JobTableInactive";
import * as TbIcons from "react-icons/tb";
import { Link } from "react-router-dom";
import MachinePaper from "../components/MachinePaper";

const Barrels = () => {
  const jobTableArray = [];
  for (let i = 0; i < 21; i += 1) {
    var individualKey = "JobTable" + i;
    jobTableArray.push(
      <JobTableInactive
        key={individualKey}
        readyID={individualKey}
      ></JobTableInactive>
    );
  }
  const machinePaperArray = [];
  for (let i = 0; i < 7; i += 1) {
    machinePaperArray.push(<MachinePaper key={"MachinePaper" + i} />);
  }
  /* Dynamically dividng array of job tables into 3 columns with slicing*/
  var arrayThird = jobTableArray.length / 3;
  var arrayTwoThirds = 2 * (jobTableArray.length / 3);
  var arrayWhole = jobTableArray.length;
  return (
    <div className="columnContainer">
      <Grid container spacing={6} columns={24} className="pageGrid">
        <Grid item xs={2}>
          <div className="machineCol">
            <h2 className="machineColHeader">Machine #</h2>
            {machinePaperArray}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="individualCol">
            <h2 className="colHeader">At Bat</h2>
            {jobTableArray.slice(0, arrayThird)}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="individualCol">
            <h2 className="colHeader">On Deck</h2>
            {jobTableArray.slice(arrayThird, arrayTwoThirds)}
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="individualCol">
            <h2 className="colHeader">In the Hole</h2>
            {jobTableArray.slice(arrayTwoThirds, arrayWhole)}
          </div>
        </Grid>
        <Grid item xs={1} className="gridControlCol">
          <div className="controlCol">
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
