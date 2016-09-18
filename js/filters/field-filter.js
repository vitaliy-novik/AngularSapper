(function() {
    angular.module("app")
        .filter("fieldFilter", fieldFilter);

    function fieldFilter(fieldStatus) {
        return function(value) {
            switch (value.status) {
                case fieldStatus.closed:
                    return "";
                    break;
                case fieldStatus.opened:
                    if (value.mined) {
                        return "☢"
                    } else {
                        return "";
                    }
                    break;
                case fieldStatus.flagged:
                    return "⚑";
            }
            return "";
        };
    }
})();