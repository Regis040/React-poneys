import Header from "../components/Header";
import Footer from "../components/Footer";

function Listtouslesponeys () {

    const poneys = [
        {
          id: 1,
          name: "Poney 1",
          color: "red",
          age: 2,
          img:"https://www.anigaido.com/media/zoo_animaux/401-500/470/poney-copy-julien-pierre-xl.jpg",
          isMagic: true,
        },
        {
          id: 2,
          name: "Poney 2",
          color: "blue",
          age: 3,
          img:"https://www.anigaido.com/media/zoo_animaux/201-300/226/poney-1-jms85-pixabay-cc0-xl.jpg",
          isMagic: false,
        }, 
        {
          id: 3,
          name: "Poney 3",
          color: "green",
          age: 4,
          img:"https://www.classequine.com/wp-content/uploads/2021/03/poney-Shetland.jpg",
          isMagic: true,
        },
        {
          id: 4,
          name: "Poney 4",
          color: "yellow",
          age: 5,
          img:"https://www.classequine.com/wp-content/uploads/2021/03/poney-Shetland.jpg",
          isMagic: false,
        },
        {
          id: 5,
          name: "Poney 5",
          color: "purple",
          age: 6,
          img:"https://www.classequine.com/wp-content/uploads/2021/03/poney-Shetland.jpg",
          isMagic: true,
        },
        {
          id: 6,
          name: "Poney 6",
          color: "pink",
          age: 7,
          img:"https://upload.wikimedia.org/wikipedia/commons/a/a4/Shetland_pony_-_Postbridge.jpg",
          isMagic: false,
        },
        {
          id: 7,
          name: "Poney 7",
          color: "black",
          age: 8,
          img:"https://www.la-spa.fr/app/assets-spa/uploads/2021/10/poney-deskop-2.jpg",
          isMagic: true,
        },
        {
          id: 8,
          name: "Poney 8",
          color: "white",
          age: 9,
          img:"https://cdn.ehorses.media/image/blur/eyecatcher/poneys-shetland-etalon-poulains-75-cm-alezan-dun-chevaux-de-loisir-chevaux-elevage-tourgeville_66846ab2-9292-4743-bd3d-a7102d0fe081.jpg",
          isMagic: false,
        },
        {
          id: 9,
          name: "Poney 9",
          color: "brown",
          age: 10,
          img:"https://www.chevalmag.com/wp-content/uploads/2022/01/horse-g2269a36c7_1920.jpg",
          isMagic: true,
        },
        {
          id: 10,
          name: "Poney 10",
          color: "grey",
          age: 11,
          img:"https://www.causeur.fr/wp-content/uploads/2023/08/poneys-parcs-paris-768x466.jpg",
          isMagic: false,
        },
      ];
      
    return (
        <>
         <Header />
         <section class="section2">
            {poneys.map((poney) => {
                return (
                    <article class="pageponeys">
                        <h2>{poney.name}</h2>
                        <img class="poneystyle" alt="mes poneys" src={poney.img} />
                        <p>agé de {poney.age} ans et de couleur {poney.color}</p>
                    </article>
                )
            })}
         </section>
         <Footer />
       </>
    );
}
export default Listtouslesponeys;