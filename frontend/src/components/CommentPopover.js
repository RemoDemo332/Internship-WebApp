import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import TextField from "@mui/material/TextField";

function CommentPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [defaultComment, setComment] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button aria-describedby={id} type="button" onClick={handleClick}>
        Open
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, width: 250, bgcolor: "#f2f2f2" }}>
          <TextField
            fullWidth
            multiline
            value={defaultComment}
            placeholder="Enter Comment"
            variant="standard"
            onChange={handleChange}
          />
        </Box>
      </Popper>
    </div>
  );
}

export default CommentPopover;
