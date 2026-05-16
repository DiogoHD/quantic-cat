import orange_cat from "../assets/cats/orange-cat.png"
import black_cat from "../assets/cats/black-cat.png"
import white_cat from "../assets/cats/white-cat.png"
import brown_cat from "../assets/cats/brown-cat.png"
import pink_cat from "../assets/cats/pink-cat.png"
import yellow_cat from "../assets/cats/yellow-cat.png"
import beige_cat from "../assets/cats/beige-cat.png"
import grey_cat from "../assets/cats/grey-cat.png"

type CatType = 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315;

export function Cat({ phase }: { phase: CatType }) {
  let catImage;
  let phaseValue: CatType = phase % 360 as CatType;
  
  switch (phaseValue) {
    case 0:
      catImage = orange_cat;
      break;
    case 45:
      catImage = beige_cat;
      break;
    case 90:
      catImage = brown_cat;
      break;
    case 135:
      catImage = black_cat;
      break;
    case 180:
      catImage = grey_cat;
      break;
    case 225:
      catImage = white_cat;
      break;
    case 270:
      catImage = pink_cat;
      break;
    case 315:
      catImage = yellow_cat;
      break;
    default:
      catImage = orange_cat;
  }

  return (
    <img src={catImage} alt="Cat" className="w-full h-full" />
  );
}
