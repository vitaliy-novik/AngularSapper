(function () {
	"use strict";

	angular.module("app")
        .service("minesService", minesService);

    function minesService() {
        return {
        	setMines,
			calculateMines
		}
    }

    function setMines(sapper) {
        var mi, mj;
        debugger;
        sapper.mines = Math.min(sapper.width * sapper.height, sapper.mines);
        var flag = (sapper.mines <= sapper.width * sapper.height / 2);
        if (!flag) {
            for (var i = 0; i < sapper.height; i++) {
                for (var j = 0; j < sapper.width; j++) {
                    sapper.fields[i][j].mined = true;
                }
            }
        }

        var limit = flag ? sapper.mines : sapper.width * sapper.height - sapper.mines;
    	for (var i = 0; i < limit; i++) {
    	    mi = Math.floor(Math.random() * sapper.height);
    	    mj = Math.floor(Math.random() * sapper.width);
    	    if (sapper.fields[mi][mj].mined === true) {
                if (flag) {
                    i--;
                } else {
                    sapper.fields[mi][mj].mined = false;
                }
    		}
    	    else {
                if (flag) {
                    sapper.fields[mi][mj].mined = true;
                } else {
                    i--;
                }
    		}
    	}
    }

    function calculateMines(sapper) {
        for (var i = 0; i < sapper.height; i++) {
            for (var j = 0; j < sapper.width; j++) {
                calculateFor(sapper, i, j);
    		}
    	}
    }

    function calculateFor(sapper, i, j) {
        if (sapper.fields[i][j].mined) {
            incrementMines(sapper, i - 1, j - 1);
            incrementMines(sapper, i - 1, j);
            incrementMines(sapper, i - 1, j + 1);
            incrementMines(sapper, i, j - 1);
            incrementMines(sapper, i, j + 1);
            incrementMines(sapper, i + 1, j - 1);
            incrementMines(sapper, i + 1, j);
            incrementMines(sapper, i + 1, j + 1);
    	}
    }

    function incrementMines(sapper, i, j) {
        if (i >= 0 && j >= 0 && i < sapper.height && j < sapper.width)
    	    sapper.fields[i][j].mines++;
    }

})();