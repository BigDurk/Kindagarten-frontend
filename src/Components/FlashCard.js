import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const Flashcard = ({ letter, words, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  const speakWord = (word) => {
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
    speakWord(words[currentIndex]); // Speak the word when the modal is shown
  };

  useEffect(() => {
    if (showModal) {
      speakWord(words[currentIndex]); // Speak the word when currentIndex changes
    }
  }, [currentIndex, showModal]);
    
    
    
    

  return (
    <div className="col-3 mb-4">
      <h3
        style={{
          fontSize: "3rem",
          color: "var(--color-primary)",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
          textDecoration: "underline",
        }}
      >
        {letter}
      </h3>

      <div className="flashcard" onClick={handleShowModal}>
        <h4>{words[currentIndex]}</h4>
        {images && images[currentIndex] && (
          <img
            src={images[currentIndex]}
            alt={`Image for ${words[currentIndex]}`}
            style={{ width: "100%", height: "200px" }} // Adjust height and width as needed
          />
        )}

        <span
          class="material-symbols-outlined flashcard-button"
          onClick={() => speakWord(words[currentIndex])}
        >
          volume_up
        </span>
      </div>
      <div className="flashcard-buttons">
        <span
          class="material-symbols-outlined flashcard-nav-button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          arrow_back
        </span>

        {/* <button
          onClick={handleNext}
          className="flashcard-nav-button"
          disabled={currentIndex === words.length - 1}
        >
          Next
        </button> */}
        <span
          class="material-symbols-outlined flashcard-nav-button "
          onClick={handleNext}
          disabled={currentIndex === words.length - 1}
        >
          arrow_forward
        </span>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        className="flashcard-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>{words[currentIndex]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={images[currentIndex]}
            alt={`Image for ${words[currentIndex]}`}
            style={{ width: "100%", height: "400px" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handlePrev}
            className="modal-nav-button"
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="modal-nav-button"
            disabled={currentIndex === words.length - 1}
          >
            Next
          </button>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            className="modal-close-button"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Flashcard;
