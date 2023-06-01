import { Card } from "./components/CardComponent";
import { NavBar } from "./components/NavBar";


export const App = () => {
  return (

    <div>
      
      <NavBar/>

      <Card
        image={"https://www.hospitalveterinariglories.com/wp-content/uploads/2020/12/16-12-20-Pug-o-carlino-un-gran-perro-en-un-cuerpo-pequen%CC%83o.jpg"}
        title={"Razas de perro"}
        subtitle={"Pug"}
        body={"El Pug​ es una raza de perro con origen histórico en China, pero con el patrocinio del Reino Unido. Se trata de un perro pequeño de tipo molosoide."}
        link={"https://www.youtube.com/watch?v=_SyEAgPnvjk"}
        titleLink={"Cuidados para un pug"}
      />

    </div>
  )
}

export default App;