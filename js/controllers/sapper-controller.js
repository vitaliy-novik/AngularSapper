(function() {
    angular.module("app")
        .controller("Sapper", Sapper);

    function Sapper(model, sapperService, minesService) {
        var $ctrl = this;
        $ctrl.sapper = model;
        $ctrl.prepareField = prepareField;
        prepareField();

        function prepareField() {
            sapperService.evaluateFields($ctrl.sapper);
            minesService.calculateMines($ctrl.sapper);
        }
    }
})();