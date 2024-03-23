//Example Type 01 
let myKitchenType:string[] = ["kitehen 1" ,"kitchen 2"]
type  infoType ={
look:string,
wallColor:string,
floorColor:string,
cabinet:number,
electricBOard:number,
glassStand:number,
length:number,
width:number,
isFan:boolean,
tapcolor:string,
spiceJar:[string],
napken:number,
plate: number,
glassSet:number,
glassSetcolor:string,

}
let info: infoType = {
    look:"very nice and reward able",
    wallColor:"black and gray",
    floorColor:"white",
    cabinet:5,
    electricBOard:1,
    glassStand:2,
    length:34,
    width:24,
    isFan:true,
    tapcolor:"white",
spiceJar:["red peper,salt,termic powder,white peper"],
napken:4,
plate:12,
glassSet:6,
glassSetcolor:"brown,gray"

}

type infoType2 ={
look:"so decent",
wallColor:"black and white",
floorColor:"white,blue",
cabinet:3,
electricBOard:2,
glassStand:1,
length:63,
width:46,
isFan:true,
tapcolor:"silver",
spiceJar:["red peper,salt,termic powder"],
napken:2,
plate:12,
glassSet:6,
glassSetcolor:"yellow,white"

}

console.log(info,info)