import { trackLineToObject } from "./trackLineToObject.js"
import { saveGPX } from "./saveGPX.js"
import "bootstrap/dist/css/bootstrap.min.css"

let fileSelector = document.getElementById("file-selector")

fileSelector.addEventListener("change", (e) => {
  let file = e.target.files[0]

  let getNumberOfTrackAsWord = file.name.replace(/(gpsrc([a-z]+))\s*(.*)/, "$2")

  let nameWithoutExt = "Bangle.js Track " + parseInt(getNumberOfTrackAsWord, 36)

  let reader = new FileReader()

  reader.onload = (e) => {
    let fileResult = e.target.result
    let allLines = fileResult.split(/\r\n|\n/)
    // Reading line by line
    let scopeOfLines = allLines.map((line) => trackLineToObject(line, false))

    let correctScopeOfLines = scopeOfLines.filter(
      ({ lat }) => isNaN(lat) === false && typeof lat === "number"
    )

    saveGPX(correctScopeOfLines, nameWithoutExt, file.name)
  }

  reader.onerror = (e) => {
    alert(e.target.error.name)
  }

  reader.readAsText(file)
})
