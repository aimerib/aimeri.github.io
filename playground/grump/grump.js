document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.getElementsByClassName('button');
  buttons[0].addEventListener("click", function () {
    var mainWindow = document.getElementsByClassName('window')
    mainWindow[0].style.display = 'none';
  });
  buttons[1].addEventListener("click", function () {
    var contentWindow = document.getElementsByClassName('window-main')[0];
    var mainWindow = document.getElementsByClassName('window')[0];
    contentWindow.style.display = 'none';
    mainWindow.style.width = '30%'
    mainWindow.style.top = '600px'
  });
  buttons[2].addEventListener("click", function () {
    var contentWindow = document.getElementsByClassName('window-main')[0];
    var mainWindow = document.getElementsByClassName('window')[0];
    var banner = document.getElementsByClassName('banner')[0];
    var wrapper = document.getElementsByClassName('wrapper')[0];
    banner.style.display = 'none';
    mainWindow.style.width = window.innerWidth;
    mainWindow.style.position = 'absolute';
    mainWindow.style.top = '0';
    wrapper.style.height = window.innerHeight;
    mainWindow.style.height = window.innerHeight;
    contentWindow.style.height = window.innerHeight;
  });
});
