//import {addHero} from '../../store/slices/user/userSlice'
import {useSelector} from 'react-redux'

export const Start = () => {

    const state = useSelector(state => state);
    console.log(state)

    const breed = state.user.hero.breed;
    const name = state.user.hero.name;

    return(
        <>  
            <p>{breed}</p>
            <p>{name}</p>
        </>
    )
}