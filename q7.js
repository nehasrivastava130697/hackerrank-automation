let count = 0;
let interval = setInterval(function () {
console.log(count);
count++;
}, 100);
setTimeout(function () {
clearInterval(interval);
interval = setInterval(function () {
console.log(count);
count--;
if (count < 0) clearInterval(interval);
});
}, 500);



0
1
2
3
4
3
2
1
0