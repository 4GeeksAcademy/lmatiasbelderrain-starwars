export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    personajes:[],
    planetas:[],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
      case "load_personajes":{
        return{
          ...store,
          personajes:action.payload
        }
      }
      case "load_planetas":{
        return{
          ...store,
          planetas:action.payload
        }
      }

    default:
      throw Error('Unknown action.');
  }    
}
export const obtenerPersonajes = async(dispatch)=>{
  try {
    const response = await fetch("https://swapi.dev/api/people")
    const data = await response.json()
    //console.log(data.results)
    dispatch({
      type:"load_personajes",
      payload:data.results,
    })
  } catch (error) {
    console.log(error)
  }
}

export const obtenerPlanetas = async(dispatch)=>{
  try {
    const response = await fetch("https://swapi.dev/api/planets")
    const data = await response.json()
    //console.log(data.results)
    dispatch({
      type:"load_planetas",
      payload:data.results,
    })
  } catch (error) {
    console.log(error)
  }
}