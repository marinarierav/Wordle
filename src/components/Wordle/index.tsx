import AppMenu from "../AppMenu";
import AppNav from "../AppNav";
import Game, { MAX_LETTERS } from "../Game";
import { description, question, subtitle, title } from "./data/flavors";

function Wordle({ flavor }: { flavor: string }) {
  return (
    <div>
      <div className="title">
        <ul className="title--container">
          <li className="title--box">
            <AppMenu isModalOpenInitially={false}></AppMenu>
          </li>
          <li>
            <h1 className="heading heading--title">{title[flavor]}</h1>
          </li>
          <li className="heading title--box">
            <p>(English)</p>
          </li>
        </ul>
        <h2 className="heading heading--desc">{subtitle[flavor]}</h2>
      </div>
      <div className="content game--container">
        <p className="game--box">{description[flavor]}</p>
        <p className="game--box description">
          Can you guess {question[flavor]}{" "}
          <span className="description--highlight">
            has {MAX_LETTERS} letters
          </span>
          ?
        </p>
        <Game flavor={flavor}></Game>
      </div>
      <div className="content">
        <a href="https://github.com/marinarierav">
          <button className="btn">Follow me on GitHub</button>
        </a>
      </div>
      <AppNav flavor={flavor} />
    </div>
  );
}

export default Wordle;
