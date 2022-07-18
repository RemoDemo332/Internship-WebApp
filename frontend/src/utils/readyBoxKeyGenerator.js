let key = 0;

export default function readyBoxKey(prefix = "id") {
  key++;
  return prefix + key;
}
