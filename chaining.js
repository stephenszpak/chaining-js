var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

function numSorter(last, first){
	return first - last;
};

function filterNum(value){
	return value <= 19;
};

function maths(){
	for (var i = 0; i < integers.length; i++) {
		return integers[i] * 1.5 - 1;
	}
};

console.log("numbers", integers.sort(numSorter).filter(filterNum).reduce(maths));