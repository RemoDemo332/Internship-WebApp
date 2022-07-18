let key = 0;

export default function paperKey(prefix = "paper") {
  key++;
  return prefix + key;
}
