function solve(input) {
    let Length = Number(input.shift());
    let Width = Number(input.shift());
    let WardrobeSide = Number(input.shift());
    let RoomFace =  (Length * 100) * (Width * 100);
    let WardrobeFace = (WardrobeSide * 100) * (WardrobeSide * 100);
    let BenchFace = RoomFace / 10;
    let FreeSpace = RoomFace - (WardrobeFace + BenchFace);
    let DancerSpace = (40 + 7000);
    let DancerCount = FreeSpace / DancerSpace;

console.log(Math.floor(DancerCount));

}