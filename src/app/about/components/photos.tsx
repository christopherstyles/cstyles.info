import beach from "../../../../public/images/bio/beach3.jpg";
import charlieAndTina from "../../../../public/images/bio/charlie-and-tina.jpg";
import ducks from "../../../../public/images/bio/ducks.jpg";
import enchantments from "../../../../public/images/bio/enchantments3.jpg";
import finley from "../../../../public/images/bio/finley4.jpg";
import foxglove from "../../../../public/images/bio/foxglove.jpg";
import gunnar from "../../../../public/images/bio/gunnar4.jpg";
import hoskins from "../../../../public/images/bio/hoskins.jpg";
import lucy from "../../../../public/images/bio/lucy2.jpg";
import trillium from "../../../../public/images/bio/trillium.jpg";
import Photo from "./photo";

export default function Photos() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Photo image={finley} title="Finley" />
      <Photo image={lucy} title="Lucy" />
      <Photo image={gunnar} title="Gunnar" />
      <Photo image={charlieAndTina} title="Charlie and Tina" />
      <Photo image={ducks} title="Duck Fam" />
      <Photo image={trillium} title="Trillium at Beazell Memorial Forest, OR" />
      <Photo image={foxglove} title="Foxglove at Fort Hoskins, OR" />
      <Photo
        className="md:hidden"
        image={enchantments}
        title="PNW Wonderland"
      />
      <Photo image={hoskins} title="Fort Hoskins, OR" />
      <Photo image={beach} title="Beach Combing" />
    </div>
  );
}
