const fs=require("fs");


function callback(err,data){        
    //This is a function named callback if this function encounters an error it prints one thing else another

    if(err) console.log("Unable to read the File!");
    else    console.log(data);
}

// This is a call for readFile to read a text file , encode in utf-8 and make a  call for a function named callback
fs.readFile("abc.txt", "utf-8",callback);

// The fucntion of this file is to print a thing twice, it takes two inputs a value and a function
function doublePrint(val,function1) {
        console.log(val);   //prints value
        function1("error", val);    //this is a call for the function passed , this will give error
        function1(undefined, val);  //This is also a call for the functio  passed, but "undefined"  means no error
    }

doublePrint("hello",callback); //calling the function doublePrint giving val=hello and function1=callback

// let cond = true;

// setTimeout(function(){
//     cond = false;
// },3000);

// while(cond) {
//     console.log("hello");   //We have an infinite loop here, it will never empty the main stack and the timeout function will never make cond=false
// }

// The function only runs when it enters the main stack and as long as it doesn't reaches there it can't execute


// ==========New problem statement
// We are given a text file suppose it has 6 lines , you have to read the file, and create a new file whixh has all the data except first line, this goes on till you get no lines left. means you will create 5 new files

let count = 1;      //variable to define file names

// we created a function that will read a file if that file doesn't exist it will create a new file with name accordung to count variable
function readfile(filename){
    if(filename==undefined) {
        filename= count-1 +".txt";
    }
    fs.readFile(filename,"utf-8",writefile);        //calling readFile method thatb will read the file and callback writefile function.
}
// This is awritefile function created by us which helps us write content in a file 
function writefile(err,data){
    let lines=data.split("\r\n");       //first we split the file and store it in array named lines
    if(lines.length>1){     //if the lenght of lines array is >1 we go into this loop
        lines=lines.splice(1);      // we call splice method thie methdo will return everything excpet line 1 
        let writedata=lines.join("\r\n");       // now we make a variable writedata and join the spliced lines together & store them in writedata
        fs.writeFile(count + ".txt",writedata,readfile);    //we call writeFile method of JS which will write given data in given file and call readfile function 
        count +=1;
    }
}

readfile("abc.txt");

