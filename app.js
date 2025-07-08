let devices = ["keyboard", "mouse", "Power Supply", "monitor"];
document.write("Devices:<br>" + devices + "<br><br>");
while (devices.length > 0) {
  let out = devices.shift(); 
  document.write("Out:<br>" + out + "<br>");
}
