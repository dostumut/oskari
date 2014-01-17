define(["oskari","jquery","bundles/framework/bundle/toolbar/instance","bundles/framework/bundle/toolbar/button-methods","bundles/framework/bundle/toolbar/default-buttons","bundles/framework/bundle/toolbar/request/AddToolButtonRequest","bundles/framework/bundle/toolbar/request/RemoveToolButtonRequest","bundles/framework/bundle/toolbar/request/ToolButtonStateRequest","bundles/framework/bundle/toolbar/request/SelectToolButtonRequest","bundles/framework/bundle/toolbar/request/ToolButtonRequestHandler","bundles/framework/bundle/toolbar/request/ShowMapMeasurementRequestHandler","bundles/framework/bundle/toolbar/event/ToolSelectedEvent","bundles/framework/bundle/toolbar/request/ToolbarRequest","bundles/framework/bundle/toolbar/request/ToolbarRequestHandler","css!resources/framework/bundle/toolbar/css/toolbar.css","bundles/framework/bundle/toolbar/locale/fi","bundles/framework/bundle/toolbar/locale/sv","bundles/framework/bundle/toolbar/locale/en","bundles/framework/bundle/toolbar/locale/cs","bundles/framework/bundle/toolbar/locale/de","bundles/framework/bundle/toolbar/locale/es"], function(Oskari,jQuery) {
    return Oskari.bundleCls("toolbar").category({create: function () {
    var inst =  Oskari.clazz.create("Oskari.mapframework.bundle.toolbar.ToolbarBundleInstance");
		return inst;
	},update: function (manager, bundle, bi, info) {
	}})
});