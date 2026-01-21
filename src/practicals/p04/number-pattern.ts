
const n =Number(process.argv[2]);
if (!isNaN(n) && n >0) {
let row ="";
for (let i =1; i <= n; i++) {
    row += i;
for (let i =0; i < n; i++)console.log(row);}
}

