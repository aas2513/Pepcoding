 let a = true;
 setInterval(() => {
     if(a) console.log("hello");
 }, 2000);

setTimeout(() => {
    a = false;
 }, 10100);