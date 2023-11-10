function Listponeys () {

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
          isMagic: false,
        },
      ];

    //   Je veux récupérer les 5 derniers "poneys" du tableau qui sont isMagic true
    // D'abord je récupére tous les poneys isMagic
      const poneysIsMagic = poneys.filter((things) => {
        return (
            things.isMagic===true
        )
      });
    // Ensuite je récupère uniquement les 5 derniers
      const the5PoneysIsMagic = poneysIsMagic.slice(-5);
      
    return (
       <section class="poneys5">
            {the5PoneysIsMagic.map((poney) => {
                return (
                    <article class="poneysstyle">
                        <h2>{poney.name}</h2>
                        <img class="poneystyle" alt="mes poneys" src={poney.img} />
                        <p>agé de {poney.age} ans et de couleur {poney.color}</p>
                    </article>
                )
            })}
       </section>
    )
}
export default Listponeys;