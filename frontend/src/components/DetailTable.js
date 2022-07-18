import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
import { green } from "@mui/material/colors";
import CommentPopover from "./CommentPopover";

function DetailTable() {
  var rows = [];
  for (let i = 0; i < 100; i += 1) {
    rows.push(
      <TableRow key={"TableRow" + i}>
        <TableCell sx={{ minWidth: 80 }}></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell sx={{ minWidth: 80 }}></TableCell>
        <TableCell align="center">
          <Checkbox
            sx={{
              color: "#ea3c53",
              "&.Mui-checked": { color: green[600] },
            }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            sx={{
              color: "#ea3c53",
              "&.Mui-checked": { color: green[600] },
            }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            sx={{
              color: "#ea3c53",
              "&.Mui-checked": { color: green[600] },
            }}
          />
        </TableCell>
        <TableCell align="center">
          <Checkbox
            sx={{
              color: green[600],
              "&.Mui-checked": { color: "#ea3c53" },
            }}
          />
        </TableCell>
        <TableCell align="center">
          <CommentPopover />
        </TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    );
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1200 }} id="detailTable">
          <TableHead>
            <TableRow>
              <TableCell>JOB #</TableCell>
              <TableCell>OP #</TableCell>
              <TableCell>QTY</TableCell>
              <TableCell>PART #</TableCell>
              <TableCell align="center">PACKET</TableCell>
              <TableCell align="center">TOOLKIT</TableCell>
              <TableCell align="center">MATERIAL</TableCell>
              <TableCell align="center">HOLD</TableCell>
              <TableCell align="center">COMMENTS</TableCell>
              <TableCell>START DATE</TableCell>
              <TableCell>END DATE</TableCell>
              <TableCell>MACHINE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DetailTable;
