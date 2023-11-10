import Header from "../components/Header";
import Footer from "../components/Footer";

function Aboutme () {

    const infos = {
        author: "Poney Man",
        published: "01/01/2021",
        address: "12 rue du canasson, cheval-sur-mer",
      };

    return (
        <>
            <Header />
                    <div class="infos">
                        <h3>{infos.author}</h3>
                        <p>{infos.published}</p>
                        <p>{infos.address}</p>
                    </div> 
            <Footer />
        </>
    );
}
export default Aboutme;