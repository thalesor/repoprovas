import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { displayMessage } from '../Message';
import useGlobal from '../../hooks/useGlobal';
import * as api from '../../services/api';
import { Container, Button } from '../Styles';
import { ButtonBox, Box, EmptyRow } from './Styles';
import  Row  from './components/Row';

const Home = () =>
{
    dayjs.locale('pt-br');
    const { auth, logoff } = useGlobal();
    const [view, setView] = useState('disciplines');
    const [terms, setTerms] = useState(null);
    const navigate = useNavigate();

    const [expandedSubRow, setExpandedSubRow] = React.useState('');

    const handleChangeSubRow = (panel) => (event, newExpanded) => {
    setExpandedSubRow(newExpanded ? panel : false);
  };

      async function getTerms(token)
      {
          try {
              const promise = await api.getList(token);
              setTerms(promise.data);
          }
          catch(err)
          {
              logoff();
          }
      }

    dayjs.locale('pt-br');
     
    function changeView(view)
    {
        setView(view);
    }
    
    useEffect(() => {
        getTerms(auth.token);
    }, [])

    const today = dayjs().format('dddd, DD/MM'); 
   
    return ( <Container>
        <ButtonBox>
        <Button type="button" onClick={() => changeView('disciplines')} color={view === 'disciplines' && 'light'}>
         POR DISCIPLINA
        </Button>
        <Button type="button" onClick={() => changeView('persons')} color={view === 'persons' && 'light'}>
         POR PROFESSOR
        </Button>
        <Button type="button">
         ADICIONAR
        </Button>
        </ButtonBox>
        <Box>
         {
           terms?.map((term, i) => 
           {
               return (
                      <Row identifier={i} title={`${term.number}º Período`}>
                        {term.disciplines.length ? 
                          term.disciplines.map((discipline, i) => 
                          {
                              return (
                                <Row identifier={i} title={`${discipline.name}`}>
                                  <EmptyRow>Coelhinho da páscoa</EmptyRow>
                                </Row>
                              )
                          })
                        : <EmptyRow>Não há disciplinas cadastradas para esse período</EmptyRow>
                        }  
                      </Row>
               )
           })
         } 
        </Box>
    </Container>
    )
}


export default Home;