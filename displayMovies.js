const fs = require('fs');
const { chooseFromList }=require('./main.js');

function displayMovieCatalog(){
    const readFile = ()=>{
        console.log("start reading");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("There is an error!!");
            }
            else{
                console.log(data);
                console.log("end reading");
                //chooseFromList();
                //printList();
            }
        })
    }
    readFile();

}
module.exports={
    displayMovieCatalog:displayMovieCatalog
};