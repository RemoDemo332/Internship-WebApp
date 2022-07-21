import { HotTable } from "@handsontable/react";
import { createSpreadsheetData } from "handsontable";
import { registerAllModules } from "handsontable/registry";

registerAllModules();
const data = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
];
function HandsonTable() {
  return (
    <HotTable
      data={data}
      colHeaders={[
        "JOB #",
        "OP #",
        "QTY",
        "PART #",
        "PACKET",
        "TOOLKIT",
        "MATERIAL",
        "HOLD",
        "START DATE",
        "END DATE",
        "MACHINE",
      ]}
      rowHeaders={false}
      licenseKey={"non-commercial-and-evaluation"}
      height="600"
      width="1820"
      colWidths="160"
    />
  );
}

export default HandsonTable;
