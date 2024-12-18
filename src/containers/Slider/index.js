import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  const nextCard = () => {
    setIndex((prevIndex) => (prevIndex + 1) % byDateDesc.length);
  };

  useEffect(() => {
    const timeout = setTimeout(nextCard, 5000);

    return () => clearTimeout(timeout);
  }, [index, byDateDesc]); // Dépendances

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div key={event.id || idx}> {/* Utilisation de event.id comme clé */}
          <div
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>

          {index === idx && (
            <div className="SlideCard__paginationContainer">
              <div className="SlideCard__pagination">
                {byDateDesc.map((paginationEvent, radioIdx) => (
                  <input
                    key={paginationEvent.id || radioIdx} // Utilisation de paginationEvent.id pour la clé
                    type="radio"
                    name="radio-button"
                    checked={index === radioIdx}
                    readOnly
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;


