import {createSlice} from '@reduxjs/toolkit'
import { difficulty } from '../../../components/data/difficulty';

export const levelSlice = createSlice({
    name: 'levelSlice',
    initialState: {
        level: difficulty
    },
    reducers: {
        choseLevel: (state, action) => {
            return {
                ...state,
                level: action.payload
            }
        }
    }
})

export const {choseLevel} = levelSlice.actions

export default levelSlice.reducer