import orange_cat from "../assets/cats/orange-cat.png"
import black_cat from "../assets/cats/black-cat.png"
import white_cat from "../assets/cats/white-cat.png"
import brown_cat from "../assets/cats/brown-cat.png"
import pink_cat from "../assets/cats/pink-cat.png"
import ghost_cat from "../assets/cats/ghost-cat.png"
import yellow_cat from "../assets/cats/yellow-cat.png"
import red_cat from "../assets/cats/red-cat.png"
import grey_cat from "../assets/cats/grey-cat.png"

type CatType = "orange" | "black" | "white" | "brown" | "pink" | "yellow" | "red" | "grey" | "ghost";


export function Cat({ type }: { type: CatType }) {
  let catImage;
  
  switch (type) {
    case "orange":
      catImage = orange_cat;
      break;
    case "black":
      catImage = black_cat;
      break;
    case "white":
      catImage = white_cat;
      break;
    case "brown":
      catImage = brown_cat;
      break;
    case "pink":
      catImage = pink_cat;
      break;
    case "ghost":
      catImage = ghost_cat;
      break;
    case "yellow":
      catImage = yellow_cat;
      break;
    case "red":
      catImage = red_cat;
      break;
    case "grey":
      catImage = grey_cat;
      break;
    default:
      catImage = orange_cat;
  }

  return (
    <img src={catImage} alt="Cat" className="w-full h-full" />
  );
}
