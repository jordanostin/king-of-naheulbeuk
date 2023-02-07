import {createSlice} from '@reduxjs/toolkit'
import { perso } from '../../../components/data/perso';

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        hero: perso[1]
    },
    reducers: {
        addHero: (state, action) => {
            return {
                ...state,
                hero: action.payload
            }
        }
    }
})

export const {addHero} = userSlice.actions

export default userSlice.reducer