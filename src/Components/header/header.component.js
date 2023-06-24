import picLeft from "../../pictures/pic_left.PNG";
import "./header.component.css";

export default function Header() {
  return (
    <div class="header">
      <div class="header-left">
        <div class="title">
          <h5>Out service</h5>
          <h1>We bring you new customer</h1>
          <h5>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </h5>
          <button class="round-btn">Explore Service</button>
        </div>
      </div>
      <div class="header-right">
        <img src={picLeft} alt="pic" />
        <button class="play"></button>
      </div>
    </div>
  );
}
