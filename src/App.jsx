import { useState } from 'react'

import Perfil from './components/Perfil'
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  return (
    <>
      <Perfil nomeUsuario='JoaoMoreiraLuz'/>
      <ReposList nomeUsuario='JoaoMoreiraLuz'/>

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      <button type='button' onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}>toggle form</button> */}
    </>
  )
}

export default App
