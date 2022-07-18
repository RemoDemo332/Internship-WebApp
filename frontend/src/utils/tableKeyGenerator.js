let key = 0;

export default function uniqueTableKey(prefix = "table") {
  key++;
  return prefix + key;
}
