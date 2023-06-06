const prompt=require("prompt-sync")({sigint:true});
const fs = require('fs');
function UpdateMovieDetails(){
    console.log(`**** Choose What You Want :
    1) Edit the id of the movie
    2) Edit the title of the movie
    3) Edit the description of the movie
    4) Edit the director of the movie
    5) Edit the genre of the movie
    6) Edit the release year of the movie
    7) Edit all details of the movie
    `)
    var choiceToEdit = prompt("Enter Number Of Your Choice  ")
    if (choiceToEdit==1)
    {
        var chosenMovie = prompt("Enter the id of the movie whose id you want to modify  ")
        var UpdatedId = prompt("plz, Enter New Id to edit movie's id");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].id=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    else if (choiceToEdit==2)
    {
        var chosenMovie = prompt("Enter the id of the movie whose id you want to modify  ")
        var UpdatedId = prompt("plz, Enter New title to edit movie's title");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].title=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    // Description:
    else if (choiceToEdit==3)
    {
        var chosenMovie = prompt("Enter the id of the movie whose id you want to modify  ")
        var UpdatedId = prompt("plz, Enter New Description to edit movie's Description");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].description=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    //director:
    else if (choiceToEdit==4)
    {
        var chosenMovie = prompt("Enter the id of the movie whose id you want to modify  ")
        var UpdatedId = prompt("plz, Enter New director to edit movie's director");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].director=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    //genre
    else if (choiceToEdit==5)
    {
        var chosenMovie = prompt("Enter the id of the movie whose id you want to modify  ")
        var UpdatedId = prompt("plz, Enter New genre to edit ");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].genre=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    //releaseYear
    else if (choiceToEdit==6)
    {
        var chosenMovie = prompt("Enter the id of the movie whose  you want to modify  ")
        var UpdatedId = prompt("plz, Enter New releaseYear to edit movie's releaseYear");
        fs.readFile("movis.json","utf-8",(err,data)=>{
            if(err){
                console.log("error");
            }
            else{
                const arrayData = JSON.parse(data);
                console.log(arrayData);
                const i = arrayData.findIndex(e=>e.id==chosenMovie);
                if(i != -1){
                    arrayData[i].releaseYear=UpdatedId;
                }
                console.log(arrayData);
                arrayDataString= JSON.stringify(arrayData);
                fs.writeFile("movis.json",arrayDataString,"utf-8",(err)=>{
                    if(err)
                    {
                        console.log("error");
                    }
                    else{
                        console.log("Updating done om json file");
                    }
                })

            }
        })
    }
    
    // var UpdatedId = prompt("plz, Enter New Id to edit movie's id");
    // var UpdatedTitle = prompt("plz, Enter New title to edit movie's title");
    // var UpdatedDescription = prompt("plz, Enter New description to edit movie's description");
    // var UpdatdDirector = prompt("plz, Enter New Id to edit movie's id");
    // var UpdatedGenre = prompt("plz, Enter New Id to edit movie's id");
    // var UpdatedReleaseYear = prompt("plz, Enter New Id to edit movie's id");
}
module.exports={
    UpdateMovieDetails:UpdateMovieDetails
}