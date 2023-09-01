import { useEffect, useState } from "react";
import image1 from "../images/image1.webp"
import image2 from "../images/image2.webp"
import image3 from "../images/image3.webp"
import image4 from "../images/image4.webp"
import image5 from "../images/image5.webp"

function HeroSlider() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4,image5])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])

  return (
    <div >
      <img width={1440} height={298} src={allImages[selectedImage]} /> <br />
      
    </div>
  );
}

export default HeroSlider;
