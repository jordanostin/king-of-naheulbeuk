//import { useState } from 'react';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import {difficulty} from '../data/difficulty';

export const Level = () => {

    const state = useSelector(state => state);

    const enemy = state.enemy.enemy;
    const [champ, setChamp] = useState([])

    useEffect(() => {
        console.log(champ);
    }, [champ])

    const handleSubmit = (e) => {
        
        e.preventDefault();
        
        
        const enemies = enemy.filter(e => e.id !== state.user.hero.id);

        for(const enemie of enemies){
            
            setChamp(champ.push(enemie.breed));
        };
        
        console.log(champ)
    };

    const handleClick = (e) => {
        console.log(e.target.value);
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

            <div>{champ}</div>
        </>
    );
};