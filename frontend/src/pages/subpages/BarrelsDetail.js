import React from "react";
import { Grid } from "@mui/material";
import * as TbIcons from "react-icons/tb";
import { Link } from "react-router-dom";
import "./BarrelsDetails.css";
import DetailTable from "../../components/DetailTable";

function BarrelsDetail() {
  return (
    <div className="tableContainer">
      <Grid container spacing={0} columns={24} id="pageGrid">
        <Grid item xs={23}>
          <DetailTable />
        </Grid>
        <Grid item xs={1} id="detailControlCol">
          <div id="controlCol">
            <Link to="/Barrels" style={{ color: "black" }}>
              <TbIcons.TbLayoutGrid size="36px" />
            </Link>
            <Link to="/Barrels/Details" style={{ color: "black" }}>
              <TbIcons.TbListDetails size="36px" />
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default BarrelsDetail;
