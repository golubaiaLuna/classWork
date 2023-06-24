import "./textInfoBlock.component.css";
import pic1 from "../../pictures/pic1.PNG";
import pic2 from "../../pictures/pic2.PNG";
import pic3 from "../../pictures/pic3.PNG";
import pic4 from "../../pictures/pic4.PNG";

function getPic(picNum) {
  switch (picNum.picNum) {
    case "1":
      //console.log("OK");
      return pic1;
    case "2":
      //console.log("OK");
      return pic2;
    case "3":
      //console.log("OK");
      return pic3;
    case "4":
      //console.log("OK");
      return pic4;
    default:
      //console.log("ERROR");
      return undefined;
  }
}

export default function TextInfoBlock(picNum) {
  var currentPic = getPic(picNum);

  //console.log(currentPic);

  return (
    <div class="block">
      <p>Discover, Explore the Product</p>
      <img id="pic" src={currentPic} alt="da" />
      <p>Effective straler to help you reack customer</p>
    </div>
  );
}
