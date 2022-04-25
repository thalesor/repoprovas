import React, { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';
import { displayMessage, displayToast } from '../Message';
import useGlobal from '../../hooks/useGlobal';
import {    
    Container,
    Form,
    Input,
    Button,
    LinkTag,
    Legend 
} from '../Styles';

import * as api from '../../services/api';

const SignIn = () =>
{
    let navigate = useNavigate();
    const [isFormActive, setIsFormActive] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { auth, login } = useGlobal();

    useEffect(() => {
        if(auth && auth.token)
        {
            navigate('/home');
        }
    }, [])

async function onSignIn(e)
{
    e.preventDefault();
    setIsFormActive(false);
    try
    {
        const promise = await api.signIn(formData);
        login(promise.data);
        displayToast('success', `Seja bem-vindo ${promise.data.name}`);
        navigate('/home'); 
    }
    catch(err)
    {
        displayMessage("error", "Falha", err.response.data);
        setIsFormActive(true);
    }
}

const onInputChange = (e) => 
{
    setFormData({...formData, 
    [e.target.name]: e.target.value});
}

return <Container>
<Form onSubmit={onSignIn}>
  <Legend>Login</Legend>
  <Button type='button' width={'100%'} color={'dark'}>
      ENTRAR COM O GITHUB
  </Button>
  <Input type="email" autoComplete='false' disabled={isFormActive ? false : true} name='email' onChange={onInputChange} value={formData.email} placeholder="Email*" required></Input>
  <Input type="password" autoComplete='false' disabled={isFormActive ? false : true} name='password' onChange={onInputChange} value={formData.password} placeholder="Senha*" required></Input>
  <Button type="submit" disabled={isFormActive ? false : true} width={'100%'} color={'light'}>
  {isFormActive 
  ? 'ENTRAR' 
  :
  <Loader type="Rings" color="#FFFFFF" height={70} width={80} />
  }
  </Button>
  <LinkTag to={`/signup`}>
     Não possuo cadastro
   </LinkTag>
</Form>
</Container>
    
}


export default SignIn;