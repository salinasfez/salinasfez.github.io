$(()=>{

    let pokeState = 'attack';
    //class of the pokemon i will use plus the methods I will use
    class MyPokemon {
        constructor(name, power){
            this.name = name;
            this.power = power;
            this.damage = Math.floor(Math.random()* 10);
            this.health = 50; 
    
        }
        attack = () => {
            
                enemyPokemonFighter.enemyFightersArr[0].health -= this.damage;
                
            
        }
        checkHealth = () => {
            if (this.health <= 0){
                alert('Good luck next time!');
            }else {
                alert('Pikachu\'s health is: ' + this.health);
            }
        }
       
    }
    
    const myPokemon = new MyPokemon('Pikachu', 'Static');
    
    // the enemy pokemons attributes
    class EnemyPokemons {
        constructor(name, power){
            this.name = name;
            this.power = power;
            this.damage = Math.floor(Math.random()* 5);
            this.health = 25;
        }
    }
    const enemyPokemons = new EnemyPokemons();
    
    //making enemy pokemons with the methods I will need 
    class EnemyPokemonFighters extends EnemyPokemons{
        constructor(name, power){
            super(name, power)
            this.enemyFightersArr = [];
        }
        generateOpponent = (name, power) => {
            const newOpponent = new EnemyPokemonFighters(name, power);
            this.enemyFightersArr.push(newOpponent);
            // console.log(this.enemyFightersArr);
        }
        attack = () => {
            myPokemon.health -= this.damage;
        }
          
        
        checkWin = () => {
            if (this.enemyFightersArr[0].health <= 0){
                
                enemyPokemonFighter.enemyFightersArr.shift();
                alert('Well done, let us move on to the next battle!');
                alert('Your next opponent is ' + enemyPokemonFighter.enemyFightersArr[0].name);
                return true;
                
            }else {
                alert(enemyPokemonFighter.enemyFightersArr[0].name + '\'s health: ' + enemyPokemonFighter.enemyFightersArr[0].health);
                return false;
                
            }
        }
    }
        
        
        

    const enemyPokemonFighter = new EnemyPokemonFighters();
    //creating my enemy pokemon array dynamically
    enemyPokemonFighter.generateOpponent('Bulbasaur', 'Poison');
    enemyPokemonFighter.generateOpponent('Squirtle', 'Water');
    enemyPokemonFighter.generateOpponent('Charmeleon', 'Fire');
    enemyPokemonFighter.generateOpponent('Onix', 'Rock ');
    
    
    
    
   
    const pokeStart = () => {
    for (let i = 0; i < enemyPokemonFighter.enemyFightersArr.length; i++){
        for (let x = 0; x < enemyPokemonFighter.enemyFightersArr[i].health; x++){
        
            
                if (pokeState === 'attack'){
                    alert('Your attack was strong!');
                    myPokemon.attack();
                    
                    enemyPokemonFighter.checkWin();
                    
                    pokeState = 'defend';
                        if (enemyPokemonFighter.checkWin === true){
                            alert('bring on the next pokemon');
                            
                        }else {
                            alert('be ready to block');
                        }
                    
                }else if (pokeState === 'defend') {
                    enemyPokemonFighter.attack();
                    alert('Good block, minimal damage was done!');
                    myPokemon.checkHealth();
                    pokeState = 'attack';
                }
                //if they're health is equal to 0.. return I won;
                //new if my health is 0 then they won the game
        }
    }   
}//pokeStart end
// pokeStart();
                    
                    
                        
            
        


    
 
})//closes onload











//    // $('form').on('submit', (event)=>{

//     //     event.preventDefault();

//     //     const userInput = $('input[type="text"]').val();

//     $.ajax({
//         url:'http://pokeapi.co/api/v2/pokemon/1/' 
//     }).then(
//         (data)=>{
//             // $('#title').html(data.Title);
//             // $('#year').html(data.Year);
//             // $('#rated').html(data.Rated);
//             console.log(data);
//         },
//         ()=>{
//             console.log('bad');
//         }
// //     );
// )  // })