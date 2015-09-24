
function init()
{
  // Detect the type of device (iOS or desktop).
  if (navigator.userAgent.match(/(iPad|iPhone|iPod|Android|BalckBerry|Opera Mini|IEMobile)/g))
  {
      // iOS device.
      document.getElementById("div_html5").style.visibility = "visible";
      document.getElementById("div_html5").style.width = 320;
      document.getElementById("div_html5").style.height = 240;
  }
  else
  {
      // Desktop.
      document.getElementById("div_nimbb").style.visibility = "visible";
      document.getElementById("div_nimbb").style.width = 320;
      document.getElementById("div_nimbb").style.height = 240;
  }
    var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
  // Do something!
  // Redirect to Android-site?
  window.location = 'http://android.davidwalsh.name';
}
}