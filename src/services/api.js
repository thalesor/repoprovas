import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_URL});

async function getList(token)
{
  const responseObj = await api.get(`/list/discipline`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

async function getUserId(token)
{
  const responseObj = await api.get(`/users`, {
    headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return responseObj;
}

async function signIn(data)
{
  const responseObj = await api.post(`/auth`, data);
    return responseObj;
}

async function signUp(data)
{
  const responseObj = await api.post(`/users`, data);
    return responseObj;
}


export {
    signIn,
    signUp,
    getList,
    getUserId
};