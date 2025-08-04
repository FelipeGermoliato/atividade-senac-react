import './App.css'
import MudarCorTexto from './assets/components/ MudarCorTexto'
import Dump from './assets/components/Dump';
import CardPerfil from './assets/components/CardPerfil';
import Votacao from './assets/components/Votacao';
import AvaliacaoEstrelas from './assets/components/AvaliacaoEstrelas';

function App() {


  return (
    <div>
      
 <MudarCorTexto/>
 <Dump/>

 <CardPerfil
        nome="Luis Claudio"
        idade={24}
        imagemUrl="https://images.pexels.com/photos/27897903/pexels-photo-27897903.jpeg"
      />

 <Dump/>
<Votacao/>
 <Dump/>

 <AvaliacaoEstrelas/>


</div>
  )
}

export default App;