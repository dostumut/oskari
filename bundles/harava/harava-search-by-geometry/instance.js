/**
 * @class Oskari.harava.bundle.haravaSearchByGeometry.SearchByGeometryBundleInstance
 *
 * Registers and starts the
 * Oskari.harava.bundle.haravaSearchByGeometry.SearchByGeometryBundleInstance plugin for main map.
 */
Oskari.clazz.define("Oskari.harava.bundle.haravaSearchByGeometry.SearchByGeometryBundleInstance",

/**
 * @method create called automatically on construction
 * @static
 */
function() {
	this.sandbox = null;
	this.started = false;
	this._localization = null;
	this.requestHandlers = {};
}, {
	/**
	 * @static
	 * @property __name
	 */
	__name : 'HaravaSearchByGeometry',

	/**
	 * @method getName
	 * @return {String} the name for the component
	 */
	getName : function() {
		return this.__name;
	},
	/**
	 * @method getLocalization
	 * Returns JSON presentation of bundles localization data for
	 * current language.
	 * If key-parameter is not given, returns the whole localization
	 * data.
	 *
	 * @param {String} key (optional) if given, returns the value for
	 *         key
	 * @return {String/Object} returns single localization string or
	 * 		JSON object for complete data depending on localization
	 * 		structure and if parameter key is given
	 */
	getLocalization : function(key) {
		if(!this._localization) {
			this._localization = Oskari.getLocalization(this.getName());
		}
		if(key) {
			return this._localization[key];
		}
		return this._localization;
	},
	/**
	 * @method setSandbox
	 * @param {Oskari.mapframework.sandbox.Sandbox} sandbox
	 * Sets the sandbox reference to this component
	 */
	setSandbox : function(sbx) {
		this.sandbox = sbx;
	},
	/**
	 * @method getSandbox
	 * @return {Oskari.mapframework.sandbox.Sandbox}
	 */
	getSandbox : function() {
		return this.sandbox;
	},
    /**
     * @method start
     * BundleInstance protocol method
     */
    start : function() {
    	var me = this;
    	if(me.started){
    		return;
    	}

    	me.started = true;

    	var sandbox = Oskari.$("sandbox");
        me.sandbox = sandbox;

        sandbox.register(me);
        var mapModule = sandbox.findRegisteredModuleInstance('MainMapModule');
        var locale = this.getLocalization('display');
        var searchPlugin = Oskari.clazz.create('Oskari.harava.bundle.mapmodule.plugin.HaravaDrawSearchGeometryPlugin', locale);
        mapModule.registerPlugin(searchPlugin);
        mapModule.startPlugin(searchPlugin);

    	// request
    	this.requestHandlers = {
    			StartGeometrySearchRequest : Oskari.clazz.create('Oskari.harava.bundle.mapmodule.request.StartGeometrySearchRequestHandler', sandbox, searchPlugin),
    			StopGeometrySearchRequest : Oskari.clazz.create('Oskari.harava.bundle.mapmodule.request.StopGeometrySearchRequestHandler', sandbox, searchPlugin),
    			ToggleVisibilityGeometrySearchRequest : Oskari.clazz.create('Oskari.harava.bundle.mapmodule.request.ToggleVisibilityGeometrySearchRequestHandler', sandbox, searchPlugin)
    	};

        sandbox.addRequestHandler('StartGeometrySearchRequest', this.requestHandlers.StartGeometrySearchRequest);
    	sandbox.addRequestHandler('StopGeometrySearchRequest', this.requestHandlers.StopGeometrySearchRequest);
    	sandbox.addRequestHandler('ToggleVisibilityGeometrySearchRequest', this.requestHandlers.ToggleVisibilityGeometrySearchRequest);
    },

    /**
     * @method stop
     * BundleInstance protocol method
     */
    stop : function() {

    	var sandbox = this.sandbox();
        for(p in this.eventHandlers) {
            sandbox.unregisterFromEventByName(this, p);
        }

        // request handler cleanup
        sandbox.removeRequestHandler('StartGeometrySearchRequest', this.requestHandlers['StartGeometrySearchRequest']);
        sandbox.removeRequestHandler('StopGeometrySearchRequest', this.requestHandlers['StopGeometrySearchRequest']);
        sandbox.removeRequestHandler('ToggleVisibilityGeometrySearchRequest', this.requestHandlers['ToggleVisibilityGeometrySearchRequest']);

        var request = sandbox.getRequestBuilder('userinterface.RemoveExtensionRequest')(this);

        sandbox.request(this, request);

        //this.sandbox.unregisterStateful(this.mediator.bundleId);
        this.sandbox.unregister(this);
        this.started = false;
    },
    /**
	 * @method init
	 * implements Module protocol init method - initializes request handlers
	 */
	init : function() {

	},
    /**
     * @method update
     * BundleInstance protocol method
     */
    update : function() {
    }
}, {
	/**
     * @property {String[]} protocol
     * @static
     */
    protocol : ['Oskari.bundle.BundleInstance']
});