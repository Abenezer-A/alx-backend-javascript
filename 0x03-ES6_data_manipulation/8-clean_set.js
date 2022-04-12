export default function cleanSet(set, startString) {
  let resultStr = '';
  if (!startString || !startString.length) return resultStr;
  set.forEach((element) => {
    if (element && element.startsWith(startString)) resultStr += `${element.slice(startString.length)}-`;
  });
  return resultStr.slice(0, resultStr.length - 1);
}
