function sanitizeViewName(viewName) {
  if (viewName.startsWith('#')) {
    viewName = viewName.substr(1);
  }
  if (viewName.startsWith('/')) {
    viewName = viewName.substr(1);
  }
  return viewName;
}
function triggerView(viewName) {
  viewName = sanitizeViewName(viewName) || 'home-section';
  // Validate if the Target Libraries are available on your website
  if (typeof adobe != 'undefined' && adobe.target && typeof adobe.target.triggerView === 'function') {
    adobe.target.triggerView(viewName);
      console.log('AT: View triggered on page load: '+viewName)
  }
}
//fire triggerView when the SPA loads and when the hash changes in the SPA
if(window.location.pathname.indexOf('AdobeTargetSPADummyWebsite') >-1){
    triggerView(location.hash);
}

window.onhashchange = function() {
    if(window.location.pathname.indexOf('AdobeTargetSPADummyWebsite') >-1){
        triggerView(location.hash);
    }
}

