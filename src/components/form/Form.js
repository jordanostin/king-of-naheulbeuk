import { useState } from 'react';
import {perso} from '../data/perso';

export const Form = (props) => {

    const [name, setName] = useState('')

    const hundleSubmit = (e) => {
      e.preventDefault();
      //props.setHero({...props.hero, name : name});
      console.log(props.hero);
    }



    const handleChange = (e) => {
        props.setHero(perso[e.target.value]);
    }

    return(
        <>
        <form onSubmit={hundleSubmit} className='form'>

          <label htmlFor="">Choississez un perso </label>

          <select defaultValue={props.hero.id} name='' id=''>
            {perso.map((e, i) =>{
                return <option key={i} value={e.id}>{e.breed}</option>
            })}
          </select>

          <input type='text' value={name} onChange={handleChange}/>

          <input type='submit' value="Valider" />

        </form>
      </>
    );
}