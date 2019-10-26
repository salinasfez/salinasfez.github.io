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
                $message.text('Your attack was strong!');
                
                
                
            
        }
        checkHealth = () => {
            if (this.health <= 0){
                $message.text('Pikachu is dead');
                return true;
            }else {
                $pikachuHealth.text('Pikachu\'s health is: ' + myPokemon.health);
                
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
                $message.text('Your next opponent is ' + enemyPokemonFighter.enemyFightersArr[0].name);
                return true;
                    
                
            }else {
                $oppopentsHealth.text(enemyPokemonFighter.enemyFightersArr[0].name + '\'s health: ' + enemyPokemonFighter.enemyFightersArr[0].health);
                
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
    
    //Jquery variables
    const $startGame = $('#start-button');
    const $attackBtn = $('.attack');
    const $defendBtn = $('.defend');
    const $oppopentsHealth = $('.opponent-health').text(enemyPokemonFighter.enemyFightersArr[0].name + '\'s health: ' + enemyPokemonFighter.enemyFightersArr[0].health);
    const $pikachuHealth = $('.my-health').text('Pikachu\'s health is: ' + myPokemon.health);
    const $message = $('#message').text('Ready, Set, Go!');
    $message.hide();
    
    
    
    
   
    const attackAndCheckWin = () => {
        myPokemon.attack();
        enemyPokemonFighter.checkWin();
    }
    const attackAndCheckHealth = () => {
        enemyPokemonFighter.attack();
        myPokemon.checkHealth();
    }
        
    const pokeStart = () => {
    
    for (let i = 0; i < enemyPokemonFighter.enemyFightersArr.length; i++){
        for (let x = 0; x < enemyPokemonFighter.enemyFightersArr[i].health; x++){
        
            if (pokeState === 'attack'){
                
                $($attackBtn).on('click', () => {
                    attackAndCheckWin();
                });
                    
                pokeState = 'defend';
                
                    if (enemyPokemonFighter.checkWin === true){
                        $($message).text('Bring on the next challenger!');
                        
                    }else {
                        $($message).text('Be Ready to Block!');
                    }
                }
                
                
            else if (pokeState === 'defend') {
                $($defendBtn).on('click', () => {
                attackAndCheckHealth();
                $this.preventDefault();
                pokeState = 'attack';  
                
            }
            
            )};
        }
    }   
    }//pokeStart end
  
    $($startGame).on('click', () => {
        
        $($message).show();
        pokeStart();
    })

})//closes onload

