let a=0;
let b=1;
let c=0;

for(let i=0;i<=50;i++){
    console.log(`${i} ${c}`);
   c = a + b;
   a = b;
   b = c;
}