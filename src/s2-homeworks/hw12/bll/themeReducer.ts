import { ThemeType } from '../HW12';

const initState: ThemeType = {
    themeId: 1,
}

export const themeReducer = (state: ThemeType = initState, action: ThemeActionType): ThemeType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

type ThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ThemeActionType => ({ type: 'SET_THEME_ID', id }) // fix any
