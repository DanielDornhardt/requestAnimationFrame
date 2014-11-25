Package.describe({
  name: 'yagni:request-animation-frame',
  summary: "Polyfill for requestAnimationFrame and cancelAnimationFrame",
  homepage: "https://github.com/DanielDornhardt/requestAnimationFrame",
  author: "Daniel Dornhardt <daniel@dornhardt.com> (http://www.dornhardt.com)",
  version: "1.0.6",
  git: "https://github.com/DanielDornhardt/requestAnimationFrame"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.addFiles('requestAnimationFrame.js', 'client');
});
