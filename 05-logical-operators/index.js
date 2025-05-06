// 1. logcal AND (&&)
const a = true;
const b = false;
const c = 4;

console.log(a && b);
console.log(a > 2 && a < 2);



// 2. logical OR (||)
console.log(a || b);
console.log(c < 2 || c > 2);



// 3. logical NOT (!)
console.log(!a);
console.log(!b);

let password = "Noor-webdev";

if (password.length >= 8 && password.includes("web")){
console.log("valid password");

}else{
    console.log("invalid password")
}

let isTrure = true;
console.log(!isTrure);