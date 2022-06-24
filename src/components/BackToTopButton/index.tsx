import { useState } from "react";
import { BackToTopContainer, Button } from "./styles";

export default function BackToTopButton() {
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    const screenScrolled = document.documentElement.scrollTop;
    setButtonVisible(screenScrolled > 300);
  });

  return (
    <BackToTopContainer>
      <Button
        onClick={handleScrollToTop}
        type="button"
        isVisible={buttonVisible}
      >
        Voltar ao topo
      </Button>
    </BackToTopContainer>
  );
}
