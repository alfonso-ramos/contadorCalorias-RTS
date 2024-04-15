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
    actions: ActivityActions
    ) => {
        if(actions.type === 'save-activity') {
            console.log('desde el type save-activity')
        }
}