export function saveGPX(track, title = "someTitle", exFileName = "") {
  let gpx = `<?xml version="1.0" encoding="UTF-8"?>
                            <gpx creator="Bangle.js" version="1.1">
                              <metadata>
                                <time>${track[0].date.toISOString()}</time>
                              </metadata>
                              <trk>
                                <name>${title}</name>
                                <trkseg>`
  track.forEach((pt) => {
    gpx += `
                                  <trkpt lat="${pt.lat}" lon="${pt.lon}">
                                    <ele>${pt.alt}</ele>
                                    <time>${pt.date.toISOString()}</time>
                                  </trkpt>`
  })
  gpx += `
                                </trkseg>
                              </trk>
                            </gpx>`

  let a = document.createElement("a"),
    hr = document.createElement("hr"),
    p = document.createElement("p"),
    file = new Blob([gpx], { type: "application/gpx+xml" })
  let url = URL.createObjectURL(file)
  a.href = url

  a.innerText = title
  p.innerText = `converted file (ex ${exFileName}) :`

  a.download = title + ".gpx"

  document.querySelector(".container").appendChild(p)
  document.querySelector(".container").appendChild(a)
  document.querySelector(".container").appendChild(hr)
}
