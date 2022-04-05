
class Robo{
    constructor(){
        this.directions = {'L':-1, 'R':1};
    }

    move(commands){
        let position = 0;
        commands.map((c)=>{
            if(typeof c ==="number"){
                position += this.directions[commands[c-1]];
            }else{
                position += this.directions[c];   
            }             
        });
        console.log(`Final Position: ${position}`);    
    }

}
//example 1 ['L','R','L','R'] = 0
const commandOne = ["L","R","L","R"];
// ['L','R','L', 'L','L','R'] = -2
const commandTwo = ["L","R","L","L","L","R"];
// ['L','R', 2, 'L', 'R'] = 1
const commandThree = ["L","R",2,"L","R"];
// ['L','R','L', 1, 'L','L','R'] = -3
const commandFour = ["L","R","L",1,"L","L","R"];
const robo = new Robo();
console.log('Command One ========================= ');
robo.move(commandOne);
console.log('Command Two ========================= ');
robo.move(commandTwo);
console.log('Command Three ========================= ');
robo.move(commandThree);
console.log('Command Four ========================= ');
robo.move(commandFour);



