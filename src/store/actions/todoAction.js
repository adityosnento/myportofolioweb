export const getAllTodos = () => dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res=>res.json())
        .then(
            json => {
            console.log(json)
            dispatch({
                type: "GET",
                payload: json
            })
        }
    )
        .catch(err => console.log(err))
}