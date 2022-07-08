let lastID = 0;

export default function uniqueID(prefix = "id") {
  lastID++;
  return prefix + lastID;
}
