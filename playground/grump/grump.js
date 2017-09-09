document.addEventListener("DOMContentLoaded", function() {
  var buttons = document.getElementsByClassName('button');
  var logo = document.getElementsByClassName('grumplogo')[0];
  buttons[0].addEventListener("click", function () {
    var mainWindow = document.getElementsByClassName('window')
    var speechBubble = document.getElementsByClassName('speechBubble')[0]
    mainWindow[0].style.display = 'none';
    speechBubble.innerHTML = '<p>Whoa dude! Where did that window go???</p>'

  });
  logo.addEventListener("click", function () {
    var mainWindow = document.getElementsByClassName('window')[0]
    var speechBubble = document.getElementsByClassName('speechBubble')[0]
    if (mainWindow.style.display === 'none'){
      mainWindow.style.display = '';
      speechBubble.innerHTML = "<p>There you go, it's back again :)</p>"
      
    }

  });
  buttons[1].addEventListener("click", function () {
    var contentWindow = document.getElementsByClassName('window-main')[0];
    var mainWindow = document.getElementsByClassName('window')[0];
    var bannerSize = document.getElementsByClassName('banner')[0].style.height
    var bottomOfWindow = window.innerHeight
    if (contentWindow.style.display === 'none'){contentWindow.style.display = ''}
    else {contentWindow.style.display = 'none'}
  });
  buttons[2].addEventListener("click", function () {
    var contentWindow = document.getElementsByClassName('window-main')[0];
    var mainWindow = document.getElementsByClassName('window')[0];
    var banner = document.getElementsByClassName('banner')[0];
    var wrapper = document.getElementsByClassName('wrapper')[0];
    if (contentWindow.style.display === 'none'){contentWindow.style.display = ''}
    if (banner.style.display !== 'none'){
      banner.style.display = 'none';
      mainWindow.style.width = window.innerWidth;
      mainWindow.style.position = 'absolute';
      mainWindow.style.top = '0';
      wrapper.style.height = window.innerHeight;
      mainWindow.style.height = window.innerHeight;
      contentWindow.style.height = window.innerHeight;
    }
    else {
      banner.style.display = '';
      mainWindow.style.width = '';
      mainWindow.style.position = '';
      mainWindow.style.top = '';
      wrapper.style.height = '';
      mainWindow.style.height = '';
      contentWindow.style.height = '';
    }

  });
});
