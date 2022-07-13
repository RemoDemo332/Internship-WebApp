import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import * as BsIcons from "react-icons/bs";
import "./JobTable.css";
import Checkbox from "@mui/material/Checkbox";
import { green } from "@mui/material/colors";
import uniqueID from "../utils/uniqueID";
import { TextField } from "@mui/material";

function JobTableInactive() {
  const tableID = uniqueID();
  const readyColor = "#ea3c53";
  var toolkitCheck = false,
    packetCheck = false,
    materialCheck = false;
  /* Function to update boolean of checkbox when clicked */
  const updateToolkit = () => {
    toolkitCheck = !toolkitCheck;
    checkReadiness();
  };
  const updatePacket = () => {
    packetCheck = !packetCheck;
    checkReadiness();
  };
  const updateMaterial = () => {
    materialCheck = !materialCheck;
    checkReadiness();
  };
  /* Change the color of the left tab on each table when all of the checkboxes are true */
  const checkReadiness = () => {
    if (
      toolkitCheck === true &&
      packetCheck === true &&
      materialCheck === true
    ) {
      console.log("changed");
      document.getElementById(tableID).style.backgroundColor = "#43a047";
    } else {
      console.log("not changed");
      document.getElementById(tableID).style.backgroundColor = "#ea3c53";
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
            width: 518,
            height: 250,
            border: "1px solid black",
          },
        }}
      >
        <Paper variant="outlined">
          <table
            className="inactiveTable"
            width="101%"
            height="101%"
            border="1px solid black"
          >
            <tbody>
              <tr>
                <td rowSpan="4" bgcolor={readyColor} id={tableID}>
                  <div>
                    <BsIcons.BsThreeDotsVertical />
                  </div>
                </td>
                <td>JOB</td>
                <td>OP</td>
                <td>START</td>
                <td>QTY</td>
                <td>TOOLKIT</td>
              </tr>
              <tr>
                <td>DATA</td>
                <td rowSpan="3">DATA</td>
                <td>DATA</td>
                <td>DATA</td>
                <td>
                  <Checkbox /* Update color of checkbox to green when checked */
                    sx={{
                      color: "#ea3c53",
                      "&.Mui-checked": { color: green[600] },
                    }}
                    size="small"
                    onClick={updateToolkit}
                  />
                </td>
              </tr>
              <tr>
                <td>PART ID</td>
                <td>END</td>
                <td>PACKET</td>
                <td>MATERIAL</td>
              </tr>
              <tr>
                <td>DATA</td>
                <td>DATA</td>
                <td>
                  <Checkbox
                    sx={{
                      color: "#ea3c53",
                      "&.Mui-checked": { color: green[600] },
                    }}
                    size="small"
                    onClick={updatePacket}
                  />
                </td>
                <td>
                  <Checkbox
                    sx={{
                      color: "#ea3c53",
                      "&.Mui-checked": { color: green[600] },
                    }}
                    size="small"
                    onClick={updateMaterial}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="6">
                  <TextField
                    id="outline-commentbox"
                    placeholder="Enter Comment"
                    variant="standard"
                    size="small"
                    maxRows={1}
                    multiline
                    fullWidth
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Box>
    </>
  );
}

export default JobTableInactive;
