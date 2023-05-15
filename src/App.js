import "./App.css";
import iconCalculator from "./images/icon-calculator.svg";
import iconKarma from "./images/icon-karma.svg";
import iconSupervisor from "./images/icon-supervisor.svg";
import iconTeamBuilder from "./images/icon-team-builder.svg";

export default function App() {
  const card = (title, descriptionField, icon, borderColorTop) => {
    return (
      <div
        className="card-main"
        style={{
          borderColor: borderColorTop
        }}
      >
        <h3>{title}</h3>
        <p>{descriptionField}</p>
        <picture>
          <img src={icon} alt="icon" />
        </picture>
      </div>
    );
  };

  const descriptionText = [
    "Monitors activity to identify project roadblocks",
    "Scans our talent naetwork to create the optimal team for your project",
    "Regularly evaluates our talent to ensure quality",
    "Uses data from past projects to provide better delivery estimates"
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>
          Reliable, efficient delivery
          <span>Powered by Technology</span>
        </h1>
        <p>
          Our Artificial inteligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="card-section">
        <div className="section">
          {card(
            "Supervisor",
            descriptionText[0],
            iconSupervisor,
            "hsl(180, 62%, 55%)"
          )}
        </div>
        <div className="section">
          {card(
            "Team Builder",
            descriptionText[1],
            iconTeamBuilder,
            "hsl(0, 78%, 62%)"
          )}
          {card("Karma", descriptionText[2], iconKarma, "hsl(34, 97%, 64%)")}
        </div>
        <div className="section">
          {card(
            "Calculator",
            descriptionText[3],
            iconCalculator,
            "hsl(212, 86%, 64%)"
          )}
        </div>
      </div>
    </div>
  );
}
