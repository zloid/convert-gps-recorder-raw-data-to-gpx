!function(){"use strict";document.getElementById("file-selector").addEventListener("change",(function(e){var t=e.target.files[0],n=t.name.replace(/(gpsrc([a-z]+))\s*(.*)/,"$2"),a="Bangle.js Track "+parseInt(n,36),r=new FileReader;r.onload=function(e){!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"someTitle",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a='<?xml version="1.0" encoding="UTF-8"?>\n                            <gpx creator="Bangle.js" version="1.1">\n                              <metadata>\n                                <time>'.concat(e[0].date.toISOString(),"</time>\n                              </metadata>\n                              <trk>\n                                <name>").concat(t,"</name>\n                                <trkseg>");e.forEach((function(e){a+='\n                                  <trkpt lat="'.concat(e.lat,'" lon="').concat(e.lon,'">\n                                    <ele>').concat(e.alt,"</ele>\n                                    <time>").concat(e.date.toISOString(),"</time>\n                                  </trkpt>")})),a+="\n                                </trkseg>\n                              </trk>\n                            </gpx>";var r=document.createElement("a"),o=document.createElement("hr"),c=document.createElement("p"),l=new Blob([a],{type:"application/gpx+xml"}),i=URL.createObjectURL(l);r.href=i,r.innerText=t,c.innerText="converted file (ex ".concat(n,") :"),r.download=t+".gpx",document.querySelector(".container").appendChild(c),document.querySelector(".container").appendChild(r),document.querySelector(".container").appendChild(o)}(e.target.result.split(/\r\n|\n/).map((function(e){return!1,t=e.trim().split(","),0,{date:new Date(parseInt(t[0])),lat:parseFloat(t[1]),lon:parseFloat(t[2]),alt:parseFloat(t[3])};var t})).filter((function(e){var t=e.lat;return!1===isNaN(t)&&"number"==typeof t})),a,t.name)},r.onerror=function(e){alert(e.target.error.name)},r.readAsText(t)}))}();