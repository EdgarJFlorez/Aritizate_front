// src/components/About.js

import React from 'react';
import '../styles/Estatuas.css';
import statua1 from '../images/ElGuardián.jpg';
import statua2 from '../images/ElSacerdote.jpg';
import statua3 from '../images/ElSol.jpg';
import statua4 from '../images/ElVuelo.jpg';
import statua5 from '../images/Ngenechen.jpg';

function Estatuas() {
  return (
    <section className="estatuas">
      <h2>Estatuas</h2>
      <div className="estatuas-container">
        <div className="estatua">
          <img src={statua1} alt="Estatua 1" />
          <h3>"El Guardián de la Sabiduría Dorada"</h3>
          <p>Hace siglos, en las montañas sagradas de los Muiscas, se hablaba de un espíritu ancestral conocido como "Suaqiru", 
             que significa "sol eterno". Representado en esta máscara dorada, Suaqiru era el protector del conocimiento y la 
             conexión espiritual con el cosmos. Según las leyendas, la máscara fue forjada por los grandes sabios de la tribu, 
             quienes la cargaron con el poder de la naturaleza: el sol, los ríos, y la tierra fértil.</p>
          <p>Se decía que quien portara la máscara podía comunicarse con los dioses y recibir su guía en tiempos de crisis. 
             Pero más que un objeto de poder, la máscara simbolizaba la unión entre los hombres y el universo, recordando que 
             todos somos parte de un ciclo eterno.</p>
          <p>La máscara fue ocultada durante la llegada de los conquistadores, para proteger su energía sagrada. Su representación 
             en la imagen celebra no solo su belleza, sino también la resiliencia de la cultura Muisca y su profunda conexión con el 
             mundo espiritual.</p>
        </div>
        <div className="estatua">
          <img src={statua2} alt="Estatua 2" />
          <h3>"El Sacerdote del Jaguar Eterno"</h3>
          <p>En el corazón de la antigua civilización maya, el jaguar era considerado el símbolo máximo de poder y conexión espiritual. 
             Esta estatua, llamada "El Sacerdote del Jaguar Eterno", representa a Chak Balam, el líder espiritual encargado de velar por 
             el equilibrio entre el mundo humano y el divino.</p>
          <p>La figura está adornada con plumas y patrones geométricos que simbolizan las estrellas y los ciclos de la naturaleza. Según 
             la tradición, Chak Balam poseía la capacidad de transformarse en jaguar durante las ceremonias nocturnas, permitiéndole explorar 
             el inframundo y traer de vuelta mensajes de los dioses para guiar a su pueblo.</p>
          <p>Tallada inicialmente en jade y oro, esta representación fue considerada sagrada y utilizada durante rituales importantes para pedir 
             lluvias, abundancia y protección. Su diseño moderno en esta imagen rinde homenaje a su poder atemporal y al espíritu indomable de la 
             cultura maya, recordándonos el vínculo profundo entre los humanos y la naturaleza.</p>
        </div>
        <div className="estatua">
          <img src={statua3} alt="Estatua 3" />
          <h3>"El Sol de Inti"</h3>
          <p>En lo alto de los Andes, donde la tierra parece tocar el cielo, los Incas veneraban a Inti, el dios del sol. Esta representación moderna, 
             llamada "El Sol de Inti", simboliza la fuerza vital que el astro rey otorgaba a la civilización inca.</p>
          <p>El disco solar dorado, rodeado de rayos geométricos, era un ícono sagrado que se exhibía en los templos más importantes, como el Coricancha 
             en Cusco. Según la tradición, Inti era el protector del pueblo inca, el padre de sus emperadores y el guía espiritual que les brindaba luz, 
             calor y prosperidad.</p>
          <p>Esta estatua modernizada refleja no solo la majestuosidad del dios, sino también la sofisticación de los incas en su relación con la naturaleza 
             y el cosmos. Los tonos dorados, rojos y naranjas evocan la calidez del sol y la conexión divina con la energía universal que sostenía a todo el 
             imperio.</p>
        </div>
        <div className="estatua">
          <img src={statua4} alt="Estatua 4" />
          <h3>"El Vuelo de Quetzalcóatl"</h3>
          <p>En el corazón del imperio azteca, Quetzalcóatl, la serpiente emplumada, era más que un dios; era la encarnación de la sabiduría, el viento y la renovación. 
             La figura "El Vuelo de Quetzalcóatl" captura su dualidad como serpiente que conecta la tierra y el cielo, llevando consigo las plegarias del pueblo.</p>
          <p>La espiral que decora su cuerpo simboliza el viento, mientras las plumas en tonos turquesa y dorado representan su capacidad para elevarse por encima de lo 
             terrenal y alcanzar lo divino. Según la tradición, Quetzalcóatl enseñó a los hombres el conocimiento de la escritura, el calendario y el cultivo del maíz, 
             siendo un símbolo eterno de equilibrio entre humanidad y naturaleza.</p>
          <p>Este diseño moderno rinde homenaje a su majestuosidad y al profundo impacto que su figura tuvo en la cosmovisión azteca, invitándonos a reflexionar sobre el 
             poder de la sabiduría y la conexión espiritual con el mundo.</p>
        </div>
        <div className="estatua">
          <img src={statua5} alt="Estatua 5" />
          <h3>"Ngenechén: Guardián de la Tierra y el Cielo"</h3>
          <p>En la cosmovisión mapuche, Ngenechén es el espíritu supremo, protector del pueblo y creador del universo. Esta representación, titulada "Ngenechén: Guardián de la 
             Tierra y el Cielo", muestra su rol como conector entre el mundo terrenal y el espiritual.</p>
          <p>Los patrones en forma de estrella simbolizan su presencia en el cosmos, mientras las líneas geométricas representan los lazos entre la naturaleza, el ser humano y lo divino. 
             Los tonos verdes y azules destacan su relación con la tierra y el agua, elementos esenciales para la vida, mientras que los dorados evocan su grandeza y eternidad.</p>
          <p>La figura sagrada de Ngenechén encarna los valores de respeto, equilibrio y armonía que los mapuches tienen hacia su entorno, recordándonos la importancia de mantener una 
             relación espiritual y responsable con el planeta.</p>
        </div>
        {/* Agrega más estatuas según sea necesario */}
      </div>
    </section>
  );
}

export default Estatuas;


