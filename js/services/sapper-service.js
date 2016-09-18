(function() {
    angular.module("app")
        .factory("sapperService", sapperService);

    function sapperService(minesService, fieldService) {
        return {
            evaluateFields
        };

        function evaluateFields(sapper) {
            sapper.fields = new Array(sapper.height);
            for (var i = 0; i < sapper.height; i++) {
                sapper.fields[i] = new Array(sapper.width);
                for (var j = 0; j < sapper.width; j++) {
                    sapper.fields[i][j] = fieldService.create(i, j);
                }
            }

            minesService.setMines(sapper);

            return sapper.fields;
        }
    }
})();