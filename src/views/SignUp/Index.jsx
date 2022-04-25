import React, { useState } from 'react';

import Loader from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';
import { displayMessage, displayToast } from '../Message'; 
import { Container, Form, Legend, Input, Button, LinkTag } from '../Styles';

import * as api from '../../services/api';

const SignUp = () =>
{
    const [isFormActive, setIsFormActive] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repassword: ''
    })
    let navigate = useNavigate();

    async function onSignUp(e)
    {
        e.preventDefault();
        setIsFormActive(false);
        try
        {
            const result = await api.signUp(formData);
            displayToast('success', `Sucesso!
            Você foi cadastrado`);
            navigate('/');
        }
        catch(error)
        {
            setIsFormActive(true);
            displayMessage('error', 'Falha', error.response.data);
        }
    }

    const onInputChange = (e) => 
    {
        setFormData({...formData, 
        [e.target.name]: e.target.value});
    }

    return <Container>
      <Form onSubmit={onSignUp}>
        <Legend>Cadastro</Legend>
        <Button type='button' width={'100%'} color={'dark'}>
            ENTRAR COM O GITHUB
        </Button>
        <Input type="email" autoComplete='false' disabled={isFormActive ? false : true} name='email' onChange={onInputChange} value={formData.email} placeholder="Email*" required></Input>
        <Input type="password" autoComplete='false' disabled={isFormActive ? false : true} name='password' onChange={onInputChange} value={formData.password} placeholder="Senha*" required></Input>
        <Input type="password" autoComplete='false' disabled={isFormActive ? false : true} name='repassword' onChange={onInputChange} value={formData.repassword} placeholder="Confirme sua senha*" required></Input>
        <Input type="text" autoComplete='false' disabled={isFormActive ? false : true} name='name' onChange={onInputChange} value={formData.name} placeholder="Nome*" required></Input>
        <Input type="text" autoComplete='false' disabled={isFormActive ? false : true} name='imageUrl' onChange={onInputChange} value={formData.imageUrl} placeholder="Imagem"></Input>
        <Button type="submit" disabled={isFormActive ? false : true} width={'100%'} color={'light'}>
        {isFormActive 
        ? 'CADASTRAR' 
        :
        <Loader type="Rings" color="#FFFFFF" height={70} width={80} />
        }
        </Button>
        <LinkTag to={`/`}>
           Já possuo cadastro
         </LinkTag>
      </Form>
    </Container>
}

export default SignUp;