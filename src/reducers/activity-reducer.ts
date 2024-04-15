import { Activity } from "../types"

export type ActivityActions = 
    { type: 'save-activity', payload: {newActivity: Activity} }

type activityState = {
    activities: Activity[]
}

export const intialState : activityState = {
    activities: []
}

export const activityReducer = (
    state: activityState = intialState,
    action: ActivityActions
    ) => {
        if(action.type === 'save-activity') {
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        }
    return state
}