//import { useState } from 'react';
import { useState } from 'react';
import {useSelector} from 'react-redux'
import {difficulty} from '../data/difficulty';

export const Level = () => {

    const state = useSelector(state => state);

    const enemy = state.enemy.enemy;
    const [champ, setChamp] = useState([]);
    const [filteredEnemies, setFilteredEnemies] = useState([]);
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        
        const enemies = enemy.filter(e => e.id !== state.user.hero.id);

        for(const enemie of enemies){
            
            setChamp(champ.push(enemie.breed));
        };
        
        const randomEnemies = randomTab(enemies);
        
        setFilteredEnemies(randomEnemies);
        
    };
    
    const handleClick = (e) => {
        
        console.log(e.target.value);
        
    }
    
    const randomTab = (array) => {
        
        return array.sort(() => Math.random() - 0.5);
    };

    return(
        <>
            <label htmlFor="">Choississez votre niveau de difficulté</label>
            <br/>
            
            <form onSubmit={handleSubmit}>
            {difficulty.map((level, i) =>{
                return <input type="submit" key={i} onClick={handleClick} value={level} />
            })}
            </form>
            
            <h3>Voici l'ordre des ennemies que vous allez affronter</h3>
            <div>
            {filteredEnemies.map((enemy, index) => (
                    <div key={index}>
                        <p>{enemy.breed}</p>
                    </div>
                ))}
            </div>
        </>
    );
};