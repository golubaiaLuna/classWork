import "./contactForm.component.css";

export default function ContactForm() {
  const handlerClick = null;
  return (
    <form>
      <h1>Связаться!</h1>
      <input id="name" type="text" placeholder="Enter your name" />
      <input id="message" type="text" placeholder="Enter your message" />
      <input type="submit" onClick={handlerClick} />
    </form>
  );
}
