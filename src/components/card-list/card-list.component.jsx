import "./card-list.styles.css";
import Card from "../card-container/card-container.component";

const CardList = ({ monsters, inputVal }) => {
  return (
    <div className="card-list">
      {monsters
        .filter((monster) => {
          return monster.name.toLowerCase().includes(inputVal.toLowerCase());
        })
        .map((monster) => {
          return <Card monster={monster} key={monster.id}/>;
        })}
    </div>
  );
};

export default CardList;
