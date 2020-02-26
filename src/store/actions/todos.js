export const add = data => {
    console.log ("t",data)
    return {
        type: "ADD",
        payload: data
    }
}

export const del = id => {
    console.log ("t",id)
    return {
        type: "DELETE",
        payload:id
    }
}

export const plus = () => {
    return {
        type: "INCREMENT",
        payload:1
    }
}

export const minus = () => {
    return {
        type: "DECREMENT",
        payload:1
    }
}

export const divided = () => {
    return {
        type: "DIVIDED",
        payload:2
    }
}


export const times = () => {
    return {
        type: "TIMES",
        payload:2
    }
}