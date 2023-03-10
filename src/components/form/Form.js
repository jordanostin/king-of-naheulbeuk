import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {perso} from '../data/perso';
import {addHero} from '../../store/slices/user/userSlice';
import './form.css'


export const Form = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch(addHero);
    const navigate = useNavigate();

    const [pseudo, setPseudo] = useState('');
    const [hero, setHero] = useState(state.user.hero);

    const hundleSubmit = (e) => {
      e.preventDefault();

      dispatch(addHero({...hero, name: pseudo}));

      navigate('/start');
    }

    const breed = (e) => {

      setHero(perso[e.target.value]);

    }

    const name = (e) => {
      
      setPseudo(e.target.value);

    }

    return(
        <>
        <form onSubmit={hundleSubmit} className='form'>

            <label htmlFor="">Choississez un perso</label>
            <br/>

            <select defaultValue={hero.id} name='' id='' onChange={breed}>
                {perso.map((e, i) =>{
                    return <option key={i} value={e.id}>{e.breed}</option>
                })}
            </select>
            <br/>

            <label htmlFor="">Entrez votre pseudo</label>
            <br/>

            <input type='text' value={pseudo} onChange={name}/>
            <br/>

            <input type='submit' value="Valider" />

        </form>
      </>
    );
}