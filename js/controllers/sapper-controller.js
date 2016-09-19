(function() {
    angular.module("app")
        .controller("Sapper", Sapper);

    function Sapper(model, sapperService, minesService, fieldStatus) {
        var $ctrl = this;
        $ctrl.sapper = model;
        $ctrl.prepareField = prepareField;
        $ctrl.clickEvent = clickEvent;
        prepareField();

        function prepareField() {
            sapperService.evaluateFields($ctrl.sapper);
            minesService.calculateMines($ctrl.sapper);
        }

        function clickEvent(e) {
            if (e.target !== e.currentTarget) {
                target = angular.element(e.target);
                var i = e.target.dataset.i;
                var j = e.target.dataset.j;
                var field = $ctrl.sapper.fields[i][j];
                if (field.status == fieldStatus.opened)
                    return;

                field.status = fieldStatus.opened;

                if (field.mined){
                    field.addClass('fail');
                    for (var i = 0; i < y; i++) {
                        for (var j = 0; j < x; j++) {
                            if (fields[i][j].mined)
                                field.status = fieldStatus.opened;
                        }
                    }
                    return;
                }

                // if (sapper.fieldsLeft == n)
                //     $field.addClass('success');
            }
        };
    }
})();