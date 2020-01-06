export const types = {
    LOAD_DATA: 'STEPS_ACTIONS_LOAD_DATA',
}


export const actions = {
    loadData: (data) => (
        {type: types.LOAD_DATA, data})
}