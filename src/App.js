import { useState } from "react";
// React Principle: "REAGIR" a mudanças de estado renderizando a interface de usuário

const messages = [
  "Sekiro: Shadows Die Twice",
  "The Last of Us Part 2",
  "It Takes Two",
  "Elden Ring",
  "Baldur's Gate 3",
];

const developers = [
  "FromSoftware",
  "Naughty Dog",
  "Hazelight Studios",
  "FromSoftware",
  "Larian Studios",
];

export default function App() {
  // definindo função de estado
  const [year, setYear] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // -- as funções de manipuladores de eventos devem ser iumplementadas no início do componente --

  function handlePrevious() {
    // atualizar estado com função de callback garante que estamos o atualizando com base no valor mais recente
    if (year > 1) setYear((y) => y - 1);
  }

  function handleNext() {
    if (year < 5) setYear((y) => y + 1);
  }
  return (
    <div>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "close" : "open"}
      </button>
      {isOpen && (
        <div className="steps">
          <h3 className="message">The Game of the Year Awards</h3>
          <div className="numbers">
            <div className={year == 1 ? "active" : ""}>2019</div>
            <div className={year == 2 ? "active" : ""}>2020</div>
            <div className={year == 3 ? "active" : ""}>2021</div>
            <div className={year == 4 ? "active" : ""}>2022</div>
            <div className={year == 5 ? "active" : ""}>2023</div>
          </div>

          <p className="message">
            Year {2018 + year}:{<br></br>} {messages[year - 1]}
          </p>
          <p className="message">Developer: {developers[year - 1]}</p>
          <img src={`img/${2018 + year}.jpg`} alt="game tag" className="game" />
          <div className="buttons">
            <button
              style={{ backgroundColor: "#383838", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#383838", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
