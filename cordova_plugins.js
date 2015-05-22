cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "clobbers": [
            "window.AdMob"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.1-dev",
    "cordova-plugin-admobpro": "2.7.7",
    "com.google.playservices": "19.0.0",
    "cordova-plugin-extension": "1.1.4"
}
// BOTTOM OF METADATA
});