import './Contact.scss'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';

function Contact () {
    return (
        <>
            <Header />
            <form class="form">
                <label for="name">Nom :</label>
                <input type="text" id="name" name="name" required></input>

                <label for="email">Email :</label>
                <input type="email" id="email" name="email" required></input>

                <label for="message">Message :</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Envoyer</button>
            </form>
            <Footer />
        </>
    );
}
export default Contact;