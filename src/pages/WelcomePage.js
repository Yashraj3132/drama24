import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import back2 from "../image/background.avif";
import img1 from "../image/image1.png";
import img2 from "../image/image2.png";
import "./welcome.css";
import "./../index.css";

// Function for image component
function Img({ src, alt }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)"); // For small screens
    setIsSmallScreen(mediaQuery.matches);

    const handleResize = (e) => setIsSmallScreen(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const styles = {
    width: isSmallScreen ? "150px" : "250px", // Smaller width for small screens
    height: isSmallScreen ? "auto" : "300px", // Auto height for mobile
    position: "relative", // Important to allow positioning of the button
  };

  return <img src={src} alt={alt} style={styles} />;
}

function WelcomePage() {
  const { name } = useParams();
  const [currentImage, setCurrentImage] = useState(img2);

  const handleImageSwitch = () => {
    setCurrentImage(currentImage === img2 ? img1 : img2);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${back2})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white flex flex-col items-center justify-center text-center">
        {/* Title Section */}
        <div className="font-bold text-5xl h-20 p-5 text-center max-sm:text-3xl"></div>

        {/* Welcome Message */}
        <div className="text-5xl h-36 flex items-center justify-center text-red-500 font-bold max-sm:text-4xl max-sm:h-30">
          <h1 className="text-background font-extrabold fredoka-x">
            Hello {name} !!!
          </h1>
        </div>

        {/* Additional Messages */}
        <div
          className="h-70 grid grid-cols-1 gap-1 text-center max-sm:px-4"
          style={{ zIndex: 1 }}>
          <div className="text-xl pl-3 max-sm:text-lg">
            <h1 className="roboto-slab-x"> KLS GIT's</h1>
          </div>
          <div className="font-bold text-4xl h-20 p-5 max-sm:text-2xl ">
            <h1>Team DRAMATICS Welcomes You!!!</h1>
          </div>
          <div>
            <h2 className="text-lg max-sm:text-base max-sm:pt-5">
              We turn every ordinary into extraordinary
            </h2>
          </div>
          <div className="bebas-neue-regular text-lg max-sm:text-base">
            <h2>Here is your chance to join the team.</h2>
          </div>

          {/* Image with Register Button Overlay */}
          <div className="relative flex justify-center items-center max-sm:flex-col">
            {/* Image Section */}
            <Img src={currentImage} alt="Dynamic Image" />

            {/* Button Overlay on Image */}
            <div className="absolute flex justify-center items-center inset-0 pt-16 mt-4 max-sm:pt-5 max-sm:h-40 max-sm:pr-3">
              <Link
                onClick={handleImageSwitch}
                className="bg-transparent hover:bg-blue-500 font-semibold text-white-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-4 max-sm:py-1 max-sm:px-2 max-sm:text-sm">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
