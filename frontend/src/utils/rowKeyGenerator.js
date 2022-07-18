let key = 0;

export default function detailRowKey(prefix = "row") {
  key++;
  return prefix + key;
}
