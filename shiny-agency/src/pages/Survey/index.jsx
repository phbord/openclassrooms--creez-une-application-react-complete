import React from 'react';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";import styled from 'styled-components'
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';

function Survey() {
  const { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const prevQuestionNumber = questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1;
  const [surveyData, setSurveyData] = React.useState({});
  const [isDataLoading, setDataLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  
  const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
  `;
  
  const QuestionContent = styled.span`
    margin: 30px;
  `;
  
  const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
      color: black;
    }
    & a:first-of-type {
      margin-right: 20px;
    }
  `;
  
  React.useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`);
        const { surveyData } = await response.json();
        setSurveyData(surveyData);
        console.log('===== surveyData =====', surveyData);
      }
      catch (err) {
        console.log('===== error =====', err);
        setError(true);
      }
      finally {
        setDataLoading(false);
      }
    }
    fetchSurvey();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }
  
  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {
        isDataLoading
        ? (<Loader />)
        : (<QuestionContent>{surveyData[questionNumber]}</QuestionContent>)
      }
      <LinkWrapper>
        {
          questionNumberInt > 1
          ? (<Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>)
          : (<span>Précédent</span>)
        }
        {
          surveyData[questionNumberInt + 1]
          ? (<Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>)
          : (<Link to="/results">Résultats</Link>)
        }
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey;