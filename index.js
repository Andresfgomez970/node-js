var rect = require("./rectangle")

function solveRect(l, b){
    console.log("Solve for rectangle with l = " + l + " and b = " + b);

    if (l <= 0 || b <= 0 ){
        console.log("Rectangle dimension must be greater than 0");
    }
    else{
        console.log("The area of the rectangle is: " + rect.area(l, b));
        console.log("The perimeter of the rectangle is: " + 
                    rect.permiter(l, b));
    }

    console.log("\n");
}

solveRect(-1, 2);
solveRect(2, 2);
solveRect(4, 0);