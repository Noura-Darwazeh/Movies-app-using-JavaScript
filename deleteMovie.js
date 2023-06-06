const prompt=require("prompt-sync")({sigint:true});
const fs = require('fs');
function deleteMovie(){
    fs.readFile("movis.json","utf-8",(err,data)=>
    {
       if(err)
       {
           console.log("error");
       }
       else{
           console.log("noError");
           const theData = JSON.parse(data);
           console.log (theData);
           const idMovieToDelete = prompt("plz, Enter the id of movie which you want to delete  ");
           const i = theData.findIndex(e=>idMovieToDelete== e.id);
           console.log ("index",i);
           if (i != -1){
               theData.splice(i,1);
           }
           console.log (`***Movies after deleting the movie which its id = ${i+1} is : ***`,theData);
           const theDataString=JSON.stringify(theData);
           fs.writeFile("movis.json",theDataString,"utf-8",(err)=>
           {
            if(err)
            {
                console.log("error write data after delete a movie");
            }
            else{
                console.log("done write data after delete a movie");

            }
           })
          // printList();
       }
    })
    
   }
   module.exports=
   {
    deleteMovie:deleteMovie
   }