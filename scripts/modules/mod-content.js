function contentWrapper(defaults, pC) {
    HTMLtoAppend = "test",
    render = function() {
      document.querySelector('main').innerHTML += HTMLtoAppend;
    },
    render();
}
