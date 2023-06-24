import "./topBar.component.css";

export default function TopBar() {
  return (
    <div class="menu">
      <div>
        <ul>
          <li>
            <b>Calvino</b>
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Case Study</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div class="menu-right">
        <p>Call +000 000 00 00</p>
        <button class="round-btn">Lets talk</button>
      </div>
    </div>
  );
}
