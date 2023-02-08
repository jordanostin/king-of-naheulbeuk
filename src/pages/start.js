//import {addHero} from '../../store/slices/user/userSlice'
import {useSelector} from 'react-redux';
import { Level } from '../components/enemy/enemy';

export const Start = () => {

    const state = useSelector(state => state);
    
    const breed = state.user.hero.breed;
    const name = state.user.hero.name;

    return(
        <>  
            <p>Bonjour {name} vous êtes un {breed}</p>
            <br/>

            <Level />
        </>
    )
}