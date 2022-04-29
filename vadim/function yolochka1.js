function yolochka1(item1, item2){
    let mess = "Hello!!"
    console.log(mess, item1, item2)
    console.log(mess, item1 + item2)
}
//yolochka1(11, 22)

let t11 = 10
let t22 = 20
let f1 = () => console.log ("xelloy")
let f22 = (t11, t22) => {console.log("Sum= ", t11 + t22)}
f22()

let t1 = 10
let t2 = 20

let t3 = 10
let t4 = 5
let f33 = (t1 > t2) ?
(tt1, tt2) => console.log("order = ", tt1 + tt2 ):
(tt1, tt2) => console.log("order = ", tt1 - tt2 );
f33(t3, t4)

function yolochka33() {};

yolochka33.prototype.fast = function() {
    console.log("Fast!")
}

yolochka33.prototype.green = function(sun, co2){
console.log("Green ==", sun, " + ", co2 )
}
let forest = new yolochka33()

forest.fast()
forest.green(1000, )