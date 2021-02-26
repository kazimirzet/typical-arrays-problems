exports.min = function min(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce((prev, current) => {
            if (prev < current) {
                return prev;
            } else {
                return current;
            }
        });
        return result;
    }
};

exports.max = function max(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce((prev, current) => {
            if (prev > current) {
                return prev;
            } else {
                return current;
            }
        });
        return result;
    }
};

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) {
        return 0;
    } else {
        let result = array.reduce((sum, current) => {
            return sum + current;
        });
        return result / array.length;
    }
};
