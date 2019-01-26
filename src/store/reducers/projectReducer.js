const initState = {
    projects: [
        {id: "1", title: "learn react", content: "Let's have a little bit of fun today. There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. This piece of canvas is your world."},
        {id: "2", title: "learn redux", content: "Let's have a little bit of fun today. There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. This piece of canvas is your world."},
        {id: "3", title: "learn thunk", content: "Let's have a little bit of fun today. There isn't a rule. You just practice and find out which way works best for you. See there, told you that would be easy. This piece of canvas is your world."},
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;