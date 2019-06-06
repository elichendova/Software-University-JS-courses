function solve(input) {
    let bookSearch = input.shift();
    let libraryCount = Number(input.shift());
    let counter = 0;
    let bookIsFound = false;
    let nextBook = input.shift();

    while(counter < libraryCount) {
        if (nextBook === bookSearch) {
            bookIsFound = true;
            break;
        }
        counter++;
        nextBook = input.shift();
    }
if (bookIsFound == false) {
    console.log ("The book you search is not here!");
    console.log(`You checked ${libraryCount} books.`);
} else {
    console.log(`You checked ${counter} books and found it.`);
}
}