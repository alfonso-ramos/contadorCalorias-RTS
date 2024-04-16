import { Activity } from "../types"

export type ActivityActions = 
    { type: 'save-activity', payload: {newActivity: Activity} } |
    { type: 'set-activeId', payload: {id: Activity['id']} } 

type activityState = {
    activities: Activity[],
    activeID: Activity['id']
}

export const initialState : activityState = {
    activities: [],
    activeID: ''
}

export const activityReducer = (
    state: activityState = initialState,
    action: ActivityActions
    ) => {
        if(action.type === 'save-activity') {
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        }
    if(action.type === 'set-activeId') {
        return {
            ...state,
            activeID: action.payload.id
        }
    }
    return state
}