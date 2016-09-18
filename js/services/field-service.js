(function() {
    angular.module("app")
        .constant("fieldStatus", {
            'closed': 0,
            'opened': 1,
            'flagged': 2
        })
        .service("fieldService", fieldService);

    function fieldService(fieldStatus) {
        function Field(i, j) {
            this.status = fieldStatus.closed;
            this.mined = false;
            this.mines = 0;

            var _i = i,
                _j = j;

            this.i = () => { return _i; };
            this.j = () => { return _j; };
        }

        return {
            create
        }

        function create(i, j) {
            return new Field(i, j);
        }
    }
})();

