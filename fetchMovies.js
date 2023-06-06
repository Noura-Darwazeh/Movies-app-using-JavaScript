const fs = require('fs');
function fetchMovies(){
    const readExistingJsonFile = ()=>{
        fs.readFile("movis.json","utf-8",(err,data)=>
        {
            if(err)
            {
                console.log("cant read the existing file");
            }
            else{
                console.log(data);
                const existingMovies  = JSON.parse(data);
                //hon
                fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies",{ method : 'GET'})
    .then(async res =>
        {
            const newData=await res.json();
            //console.log(data);
            const newMovies  = newData.map(movie => {
    return {
        releaseYear: movie.Year,
      title: movie.Title,
      // Add any other properties you want to include in the movie object
    };
  });
const updatedMovies = [...existingMovies , ...newMovies];

const jsonData = JSON.stringify(updatedMovies);
////             const stringData= JSON.stringify(movies);
            fs.appendFile("movis.json",jsonData,"utf-8",(err)=>
            {
                if (err)
                {
                    console.log("cant write a data to json file");
                }
                else{
                    console.log("done write data from internet to json file");
                }
            })
        })
        .catch(err => {
            console.log("error hon");
            console.log(err);

        });
            }
        })
    }
readExistingJsonFile();
//}  

//function fetchMovies(){
//     fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies",{ method : 'GET'})
//     .then(async res =>
//         {
//             const newData=await res.json();
//             //console.log(data);
//             const newMovies  = newData.map(movie => {
//     return {
//         releaseYear: movie.Year,
//       title: movie.Title,
//       // Add any other properties you want to include in the movie object
//     };
//   });
// const updatedMovies = [...existingMovies , ...newMovies];

// const jsonData = JSON.stringify(updatedMovies);
// ////             const stringData= JSON.stringify(movies);
//             fs.appendFile("movis.json",jsonData,"utf-8",(err)=>
//             {
//                 if (err)
//                 {
//                     console.log("cant write a data to json file");
//                 }
//                 else{
//                     console.log("done write data from internet to json file");
//                 }
//             })
//         })
//         .catch(err => {
//             console.log("error hon");
//             console.log(err);

//         });
}
module.exports={
    fetchMovies:fetchMovies
}