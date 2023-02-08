import {createSlice} from '@reduxjs/toolkit'
import { perso } from '../../../components/data/perso';

export const enemySlice = createSlice({
    name: 'enemySlice',
    initialState: {
        enemy: perso
    },
    reducers: {
        enemy: (state, action) => {
            return {
                ...state,
                hero: action.payload
            }
        }
    }
})

export const {enemy} = enemySlice.actions

export default enemySlice.reducer