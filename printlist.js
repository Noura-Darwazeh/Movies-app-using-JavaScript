  function printList(){
    console.log(
        `*** WELCOME TO OUR MOVI SITE***
         YOU CAN SELECT ANY ACTION FROM THIS:
         1- Display Movie Catalog.
         2- Add New Movie.
         3- Update Movie Details.
         4- Delete Movie.
         5- Fetch Data From API.
         6- Search For A Movie
         `
         );

        }
        //printList();
// export {printList};
module.exports = {
    printList: printList
  };