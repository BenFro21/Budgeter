import tokenService from "./tokenService";

// fetch budget from databse useing token in local storage. Call getToken from token services 
// send headers 
let backURL = 'http://localhost:8000/'

let getBudget = async () => {
    const token = tokenService.getToken()
    // await fetch(backURL + 'budgets/', {
    //     method: 'GET',
    //     headers: new Headers({'content-type': 'application/json', 'authorization': token})
    // })
    // .then(res => {
    //     if(res.ok){
    //         return res.json()
    //     }
    // })
    // .then(res => res)


}




let budgetService ={
    getBudget,
};
export default budgetService