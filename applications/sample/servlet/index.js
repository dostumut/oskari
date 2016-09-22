jQuery(document).ready(function() {
    Oskari.app.loadAppSetup(ajaxUrl + 'action_route=GetAppSetup', window.controlParams, function() {
        jQuery('#mapdiv').append('Unable to start');
    }, function() {
        Oskari.app.playBundle({
            "bundlename" : "statsgraphs",
            "metadata" : {
                "Import-Bundle": {
                    "statsgraphs": {
                        "bundlePath": "/Oskari/packages/statistics/"
                    }
                }
            }
        });
    }, function(appSetup) {

        var mapfull = appSetup.startupSequence[1].metadata['Import-Bundle'];
        mapfull.mapstats.bundlePath = "/Oskari/packages/mapping/ol2/";
        var statsgrid = appSetup.startupSequence[11].metadata['Import-Bundle'];
        statsgrid.statsgrid.bundlePath = "/Oskari/packages/statistics/";

    });
});