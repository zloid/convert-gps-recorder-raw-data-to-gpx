export function trackLineToObject(l, hasTrackNumber) {
    let t = l.trim().split(",");
    let n = hasTrackNumber ? 1 : 0;
    let o = {
      date: new Date(parseInt(t[n + 0])),
      lat: parseFloat(t[n + 1]),
      lon: parseFloat(t[n + 2]),
      alt: parseFloat(t[n + 3]),
    };
    if (hasTrackNumber) o.number = t[0];
    return o;
  }