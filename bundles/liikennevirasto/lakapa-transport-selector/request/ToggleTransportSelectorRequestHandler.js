/**
 * @class Oskari.liikennevirasto.bundle.transport.selector.ToggleTransportSelectorRequestHandler
 * Handles Oskari.liikennevirasto.bundle.transport.selector.ToggleTransportSelectorRequest.
 */
Oskari.clazz.define('Oskari.liikennevirasto.bundle.transport.selector.ToggleTransportSelectorRequestHandler', function(sandbox, plugin) {
    this.sandbox = sandbox;
    this.plugin = plugin;
}, {
	/**
	 * @method handleRequest
	 * Add to basket
	 * @param {Oskari.mapframework.core.Core} core
	 * 		reference to the application core (reference sandbox core.getSandbox())
	 * @param {Oskari.liikennevirasto.bundle.transport.selector.ToggleTransportSelectorRequest} request
	 * 		request to handle
	 */
    handleRequest : function(core, request) {
    	var me = this;
        me.sandbox.printDebug("[Oskari.liikennevirasto.bundle.transport.selector.ToggleTransportSelectorRequest] toggle transport selector");
        if(request.getShow()){
        	me.plugin.enable();
        } else {
        	me.plugin.disable();
        }
    }
}, {
	/**
     * @property {String[]} protocol array of superclasses as {String}
     * @static
     */
    protocol : ['Oskari.mapframework.core.RequestHandler']
});
