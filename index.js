(() => {
  'use strict';

  const remote = require('electron').remote;

  document.body.onkeypress = (e) => {
    let window = remote.getCurrentWindow();
    window.close();
  };



//============================
//===================================
})();
