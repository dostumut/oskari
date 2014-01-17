require.config({
  baseUrl: "../../../",
  paths: {
    mainConfig: "applications/oskari2/ol3/mainConfig",
    oskari: "bundles/oskari/oskari",
    'oskari-with-loader': "bundles/oskari/oskari-with-loader",
    jquery: "empty:",
    'jquery-migrate': "libraries/jquery/jquery-migrate-1.2.1-modified",

    css: "libraries/requirejs/lib/css",
    json: "libraries/requirejs/lib/json",
    domReady: "libraries/requirejs/lib/domReady",
    normalize: "libraries/requirejs/lib/normalize",
    'css-builder': "libraries/requirejs/lib/css-builder"
  },
  map: {
    // '*' means all modules will get 'jquery-private'
    // for their 'jquery' dependency.
    '*': {
      "jquery": "jquery-migrate"
    },
    // 'jquery-private' wants the real jQuery module
    // though. If this line was not here, there would
    // be an unresolvable cyclic dependency.
    'jquery-migrate': {
      'jquery': 'jquery'
    },
  },
  optimize: "none",
  optimizeAllPluginResources: true,
  findNestedDependencies: true,
  name: "applications/oskari2/ol3/main-dev",
  out: "main.js"
});