
Array.map
Array.prototype.customMap = () => { }


Array.reduce
Array.prototype.customReduce = () => { }


Array.filter
Array.prototype.customFilter = () => { }


Array.forEach

let arr = [0, 1, 2, 3, 4, 5, 6, 7];
Array.prototype.customForEach = function (callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

arr.customForEach((item, index, array) => {
    console.log({item ,index});
});



const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}