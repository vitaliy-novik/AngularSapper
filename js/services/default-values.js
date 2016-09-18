(function() {
    angular.module("app")
        .value("model", {
            "height": 10,
            "width": 15,
            "mines": 10,
            "fields": [],
            "flags": 0
        });
})();