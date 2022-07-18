import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import "./MachinePaper.css";

function MachinePaper() {
  return (
    <Box className="machineBox">
      <Paper variant="outlined" className="machinePaper">
        MACHINE #
      </Paper>
    </Box>
  );
}

export default MachinePaper;
