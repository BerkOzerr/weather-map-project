export function wCode(code) {
  // console.log(code);
  if (code === 0 || code === 1) {
    if (new Date().getHours() > 19) {
      return "night.gif";
    }
    return "sunny.gif";
  }
  if (code === 2 || code === 3) {
    return "cloud.gif";
  }
  if (code === 45 || code === 48) {
    return "mist.gif";
  }
  if (
    code === 51 ||
    code === 53 ||
    code === 55 ||
    code === 61 ||
    code === 63 ||
    code === 80 ||
    code === 81
  ) {
    return "rain.gif";
  }
  if (code === 65 || code === 82 || code === 95 || code === 96) {
    return "thunder.gif";
  }
  if (
    code === 71 ||
    code === 73 ||
    code === 75 ||
    code === 77 ||
    code === 63 ||
    code === 85 ||
    code === 86
  ) {
    return "snow.gif";
  }
  if (code === 56 || code === 57 || code === 66 || code === 67) {
    return "sleet.webp";
  }
  if (code === 98) {
    return "wind.webp";
  }
}
