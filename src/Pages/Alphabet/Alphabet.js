import React, { useState, useEffect } from "react";

import FlashCard from "../../Components/FlashCard";
import "./Alphabet.css";
import VideoPlayer from "../../Components/VideoPlayer";

const Alphabet = () => {
  const alphabetData = [
    {
      letter: "A",
      words: ["Apple", "Ant", "Airplane"],
      images: ["/images/apple.jpg", "/images/ant.jpg", "/images/plane.jpg"],
    },
    {
      letter: "B",
      words: ["Ball", "Banana", "Bear"],
      images: ["/images/ball.jpg", "/images/banana.jpg", "/images/bear.jpg"],
    },
    {
      letter: "C",
      words: ["Cat", "Car", "Cake"],
      images: ["/images/cat.jpg", "/images/car.jpg", "/images/cake.jpg"],
    },
    {
      letter: "D",
      words: ["Dog", "Duck", "Dolphin"],
      images: ["/images/dog.jpg", "/images/duck.jpg", "/images/dolphin.jpg"],
    },
    {
      letter: "E",
      words: ["Elephant", "Egg", "Eagle"],
      images: ["/images/elephant.jpg", "/images/egg.jpg", "/images/eagle.jpeg"],
    },
    {
      letter: "F",
      words: ["Fish", "Fox", "Flower"],
      images: ["/images/fish.jpeg", "/images/fox.jpg", "/images/flower.jpeg"],
    },
    {
      letter: "G",
      words: ["Giraffe", "Grapes", "Guitar"],
      images: [
        "/images/giraffe.jpeg",
        "/images/grapes.jpg",
        "/images/guitar.jpg",
      ],
    },
    {
      letter: "H",
      words: ["House", "Heart", "Horse"],
      images: [
        "/images/house.jpeg",
        "/images/heart.jpeg",
        "/images/horse.jpeg",
      ],
    },
    {
      letter: "I",
      words: ["Insect", "Iron", "Island"],
      images: [
        "/images/insect.jpg",
        "/images/iron.jpeg",
        "/images/island.jpeg",
      ],
    },
    {
      letter: "J",
      words: ["Jacket", "Jam", "Jellyfish"],
      images: ["/images/jacket.jpeg", "/images/jet.jpeg", "/images/jug.jpg"],
    },
    {
      letter: "K",
      words: ["Kite", "Kangaroo", "Key"],
      images: ["/images/kite.jpeg", "/images/knife.jpeg", "/images/key.jpeg"],
    },
    {
      letter: "L",
      words: ["Lion", "Lemon", "Laptop"],
      images: [
        "/images/lion.jpeg",
        "/images/lemon.jpeg",
        "/images/laptop.jpeg",
      ],
    },
    {
      letter: "M",
      words: ["Monkey", "Moon", "Milk"],
      images: ["/images/monkey.jpeg", "/images/moon.jpeg", "/images/milk.jpeg"],
    },
    {
      letter: "N",
      words: ["Nest", "Nose", "Net"],
      images: ["/images/nest.jpeg", "/images/nose.jpeg", "/images/net.jpeg"],
    },
    {
      letter: "O",
      words: ["Orange", "Owl", "Ostrich"],
      images: [
        "/images/orange.jpeg",
        "/images/owl.jpeg",
        "/images/ostrich.jpeg",
      ],
    },
    {
      letter: "P",
      words: ["Panda", "Parrot", "Pig"],
      images: ["/images/panda.jpeg", "/images/parrot.jpeg", "/images/pig.jpeg"],
    },
    {
      letter: "Q",
      words: ["Queen", "Quail", "Question Mark"],
      images: [
        "/images/queen.jpeg",
        "/images/quail.jpeg",
        "/images/question.jpeg",
      ],
    },
    {
      letter: "R",
      words: ["Rainbow", "Robot", "Rose"],
      images: [
        "/images/rainbow.jpeg",
        "/images/robot.jpeg",
        "/images/rose.jpeg",
      ],
    },
    {
      letter: "S",
      words: ["Sun", "Star", "Ship"],
      images: ["/images/sun.jpeg", "/images/star.jpeg", "/images/ship.jpeg"],
    },
    {
      letter: "T",
      words: ["Tree", "Tiger", "Train"],
      images: ["/images/tree.jpeg", "/images/tiger.jpeg", "/images/train.jpeg"],
    },
    {
      letter: "U",
      words: ["Umbrella", "Unicorn", "Uniform"],
      images: [
        "/images/umbrella.jpeg",
        "/images/unicorn.jpeg",
        "/images/uniform.jpeg",
      ],
    },
    {
      letter: "V",
      words: ["Van", "Violin", "Vulture"],
      images: [
        "/images/van.jpeg",
        "/images/violin.jpeg",
        "/images/vulture.jpg",
      ],
    },
    {
      letter: "W",
      words: ["Watermelon", "Whale", "Watch"],
      images: [
        "/images/watermelon.jpeg",
        "/images/whale.jpeg",
        "/images/watch.jpeg",
      ],
    },
    {
      letter: "X",
      words: ["Xylophone", "X-ray"],
      images: ["/images/xylophone.jpeg", "/images/x-ray.jpeg"],
    },
    {
      letter: "Y",
      words: ["Yacht", "Yam"],
      images: ["/images/yacht.jpeg", "/images/yam.jpeg"],
    },
    {
      letter: "Z",
      words: ["Zebra"],
      images: ["/images/zebra.jpeg"],
    },
  ];
  const [selectedImage, setSelectedImage] = useState(null);
  const [options, setOptions] = useState([]);
  const [tries, setTries] = useState(10);
  const [gameOver, setGameOver] = useState(false);
  const [correctMatches, setCorrectMatches] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  useEffect(() => {
    const randomLetters = [];
    while (randomLetters.length < 4) {
      const randomIndex = Math.floor(Math.random() * alphabetData.length);
      const letter = alphabetData[randomIndex];
      if (!randomLetters.includes(letter)) {
        randomLetters.push(letter);
      }
    }

    const optionsData = randomLetters.map((letter) => {
      const randomIndex = Math.floor(Math.random() * letter.words.length);
      const word = letter.words[randomIndex];
      const image = letter.images[randomIndex];
      return { word, image, matched: false };
    });

    const shuffledOptions = shuffleArray(optionsData);

    setOptions(shuffledOptions);
  }, []);

  const handleMatch = (index) => {
    if (!selectedImage || tries === 0 || gameOver) return;

    const selectedOption = options[index];
    if (selectedOption.word === selectedImage.word) {
      const newOptions = options.map((option, idx) =>
        idx === index ? { ...option, matched: true } : option
      );
      setOptions(newOptions);
      setCorrectMatches((prev) => prev + 1);
      setSelectedImage(null);
    } else {
      setTries((prev) => prev - 1);
    }

    if (correctMatches === 3) {
      setShowModal(true);
    }
  };

  const handleRestart = () => {
    setShowModal(false);
    window.location.reload();
  };
  const videoId = "om_1599v70c";

  return (
    <div>
      <div className="container">
        <div className="alphabet py-3">
          <div className="y-cont mb-5">
            <VideoPlayer videoId={videoId} />
          </div>
          <div className="game-container">
            <h2>Alphabet Matching Game</h2>
            <div className="options-container">
              <div className="images-container">
                {options.map((option, index) => (
                  <div key={index} className="image-wrapper">
                    <img
                      src={option.image}
                      alt={option.word}
                      className={`game-image ${
                        option.matched ? "matched" : ""
                      } ${selectedImage === option ? "selected" : ""}`}
                      onClick={() => setSelectedImage(option)}
                    />
                    {option.matched && <div className="overlay">Correct</div>}
                  </div>
                ))}
              </div>
              <div className="words-container">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleMatch(index)}
                    disabled={option.matched || gameOver}
                  >
                    {option.word}
                  </button>
                ))}
              </div>
            </div>
            {showModal && (
              <div className="modall p-5">
                <div className="modall-content">
                  <p>Congratulations! You matched all images correctly!</p>
                  <button onClick={handleRestart}>Play Again</button>
                </div>
              </div>
            )}
            <div className="tries-container">
              <p>Tries Left: {tries}</p>
            </div>
          </div>

          <div className="row mt-5">
            {alphabetData.map(({ letter, words, images }) => (
              <FlashCard
                key={letter}
                letter={letter}
                words={words}
                images={images}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;
