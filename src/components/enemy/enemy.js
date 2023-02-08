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

    const handleClick = (e) => {
        console.log(e.target.value);

        const enemies = enemy.filter(e => e.id !== state.user.hero.id);

        console.log(enemies)
        for(const enemie of enemies){
            setChamp(enemie.breed)
        }
    };

    return(
        <>
            <label htmlFor="">Choississez votre niveau de difficulté</label>
            <br/>
            

            {difficulty.map((level, i) =>{
                return <input type="button" key={i} onClick={handleClick} value={level} />
            })}
        </>
    );
};