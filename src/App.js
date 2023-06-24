import "./styles.css";
import TopBar from "./Components/topBar/topBar.component.js";
import TextInfoBlock from "./Components/textInfoBlock/textInfoBlock.component.js";
import {
  CurrentDate,
  CurrentTime
} from "./Components/timeAndDate/timeAndDate.component.js";
import ContactForm from "./Components/contactForm/contactForm.component.js";
import Header from "./Components/header/header.component.js";
import TitleMid from "./Components/titleMid/titleMid.component.js";

import RandNum from "./Components/randomNum/randomNum.component.js";

export default function App() {
  return (
    <div className="App">
      {/* <TopBar />
      <Header />
      <TitleMid />
      <div class="main-block">
        <TextInfoBlock picNum="1" />
        <TextInfoBlock picNum="2" />
        <TextInfoBlock picNum="3" />
        <TextInfoBlock picNum="4" />
      </div>
      <CurrentDate />
      <CurrentTime />
      <ContactForm /> */}
      <RandNum minNum={0} maxNum={10} />
    </div>
  );
}
