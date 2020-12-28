import styled from '@emotion/styled'
import axios from 'axios'
import React, { useState } from 'react'
const isBrowser = typeof window !== 'undefined'
const HelloSign = isBrowser ? require('hellosign-embedded') : undefined

let client

if (HelloSign) {
  client = new HelloSign({
    clientId: 'd19619b3fa8d9657c0e9629013f4e514'
  })
}

const ContactForm = () => {
  const [errMsg, setErrMsg] = useState({
    name: false,
    entreprise: false
  })
  const [dataForm, setDataForm] = useState({
    name: '',
    entreprise: '',
    lieu: ''
  })

  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    const { value, name } = e.target
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const validateData = () => {
    const { name, entreprise } = dataForm

    setErrMsg({
      name: name.length === 0,
      entreprise: entreprise.length === 0
    })

    if (name.length < 1) {
      return false
    } else if (name.length < 1) {
      return false
    } else return true
  }

  const sendMsg = e => {
    console.log('send')
    e.preventDefault()
    const isValid = validateData()

    const { name, entreprise, lieu } = dataForm

    if (isValid) {
      const payload = { name, entreprise, lieu }

      axios
        .post('http://localhost:9000/hellosign', {
          body: payload,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(res => {
          console.log('sended:', res)
          client.open(res.data.url)

          setSuccess(true)
          setDataForm({
            name: '',
            entreprise: '',
            lieu: ''
          })
          setTimeout(() => setSuccess(false), 5000)
        })
        .catch(err => {
          // console.log("not send", err);
        })
    }
  }

  return (
    <>
      <Title id='contact'>Paramédic hellosign Test</Title>
      <div style={{ height: '2em' }}>
        {errMsg.name || errMsg.entreprise ? (
          <ErrorMessage>
            Veuillez remplir correctement les champs en rouge !!!
          </ErrorMessage>
        ) : null}
      </div>
      <Form onSubmit={sendMsg}>
        <InputsWrapper>
          <LabelWrapper>
            <p>Representant*</p>
            <StyledInput
              name='name'
              value={dataForm.name}
              type='text'
              onChange={handleChange}
              error={errMsg.name}
            />
          </LabelWrapper>
          <LabelWrapper>
            <p>Nom de l'entreprise*</p>
            <StyledInput
              name='entreprise'
              value={dataForm.entreprise}
              type='text'
              onChange={handleChange}
              error={errMsg.entreprise}
            />
          </LabelWrapper>
          <LabelWrapper>
            <p>Lieu</p>
            <StyledInput
              name='lieu'
              size='10'
              value={dataForm.lieu}
              type='text'
              onChange={handleChange}
            />
          </LabelWrapper>
        </InputsWrapper>
        <SubmitButton type='submit' />
        <div style={{ height: '3em', marginTop: '1em' }}>
          {success ? (
            <SuccessMessage>Votre message a bien été envoyer</SuccessMessage>
          ) : null}
        </div>
      </Form>
    </>
  )
}

export default ContactForm

export const Title = styled.p`
  text-align: center;
  font-size: 2.8em;
  color: #2b5c6b;
  margin: 2em 0 0.5em 0;
`

export const ErrorMessage = styled.p`
  background-color: #ff5757;
  color: white;
  width: fit-content;
  padding: 0.4em 1em;
  border-radius: 40px;
  font-size: 0.9em;
  margin: 0 auto;
  font-family: 'Avenir Light', sans-serif;

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export const Form = styled.form`
  max-width: 900px;
  width: 80%;
  margin: 1em auto 2em auto;
`

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: auto;
  margin-bottom: 2em;
`

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  height: 100%;
`

export const RightBox = styled.div`
  width: 48%;
`

export const LabelWrapper = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 0.5em;

  p {
    margin: 0 0 0 1.6em;
    color: #2b5c6b;
  }
`

export const StyledInput = styled.input`
  height: 2.5em;
  border: 2px solid ${props => (props.error ? '#ff5757' : '#2b5c6b')};
  padding-left: 1.4em;
  font-size: 1.1em;
  outline: none;
`

export const Selector = styled.select`
  border-radius: 40px;
  height: 3.15em;
  padding: 0 1em 0 1.4em;
  width: auto;
  font-family: 'Krona One',serif;
  font-size: 1em;
  color: #2b5c6b;
  font-weight: 400;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url('${props => props.arrow}');
  background-repeat: no-repeat;
  background-position: 95% center;
  background-size: 20px;
  border: 2px solid ${props => (props.error ? '#ff5757' : '#2b5c6b')};
`

export const Option = styled.option`
  margin-bottom: 5em;
`

export const StyledTextarea = styled.textarea`
  height: 25.2em;
  padding: 1.4em;
  font-size: 1.2em;
  border-radius: 30px;
  resize: none;
  border: 2px solid ${props => (props.error ? '#ff5757' : '#2b5c6b')};
  outline: none;

  p {
    margin: 0 0 0 1.6em;
    color: #2b5c6b;
  }
`

export const SubmitButton = styled.input`
  display: block;
  background-color: transparent;
  border: 1px solid #2b5c6b;
  color: #2b5c6b;
  margin: 0 auto;
  font-size: 1em;
  width: 10em;
  height: 2.5em;
  font-family: 'Krona One', serif;
  outline: none;

  :hover {
    cursor: pointer;
    background-color: #2b5c6b;
    color: white;
  }
`

export const SuccessMessage = styled.p`
  background-color: #00e6a8;
  color: white;
  width: fit-content;
  padding: 0.4em 1em;
  border-radius: 40px;
  font-size: 0.9em;
  margin: 0 auto;
  font-family: 'Avenir Light', serif;

  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  -moz-animation: fadeIn ease 1s;
  -o-animation: fadeIn ease 1s;
  -ms-animation: fadeIn ease 1s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
