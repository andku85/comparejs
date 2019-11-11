function compare(input1, input2) {
    // first need to check if they are strings
    if (typeof input1 !== "string") {
        return console.log("Please enter String for input1");
    }
    if (typeof input2 !== "string") {
        return console.log("Please enter String for input2");
    }

    // split the number at .
    var input1parts = input1.split(".");
    var input2parts = input2.split(".");

    // check the smallest size
    const size = Math.min(input1parts.length, input2parts.length);

    for (var i = 0; i < size; ++i) {
        // parse int
        input1[i] = parseInt(input1[i]);
        input2[i] = parseInt(input2[i]);

        if (input1parts[i] > input2parts[i]) {
            return console.log(input1 + " is after " + input2);
        }
        if (input1parts[i] < input2parts[i]) {
            return console.log(input1 + " is before " + input2);
        }
    }

    // length check if all = above
    if (input1parts.length == input2parts.length) {
        return console.log(input1 + " is equal " + input2);
    } else if (input1parts.length < input2parts.length) {
        return console.log(input1 + " is before " + input2);
    } else {
        return console.log(input1 + " is after " + input2);
    }
}
