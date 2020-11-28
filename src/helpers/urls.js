const API_ROOT = 'http://localhost:5000/api/v1/'

export const APIUrls ={
    //to use dynamic paramters can use like 
    //    fetchForms:(page,limit)=>`http://localhost:5000/api/v1/form/allforms?page=${limit}`,


    login:()=>`${API_ROOT}/user/login`,
    register:()=>`${API_ROOT}/user/register`,
    createForms:()=>`${API_ROOT}/form/register`,
    fetchForms:()=>`${API_ROOT}/form/allforms`,
}