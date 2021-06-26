export const isAuthenticated=()=>{
    if (typeof window == "undefined") {
        return false;
    }
    if(localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"))
    }else{
        return false
    }
}