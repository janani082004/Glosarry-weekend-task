import { Container } from "react-bootstrap";
import glossarydetails from './GlossaryDetails';
import './Glossary.css';
export default function Glossary() {
  return (
    <section className="glossary-overview">
      <Container>
        <h1 className="gloss">Glossary</h1>
        <div className="grid">
          {glossarydetails.map((glossary, index) => (
            <div className="box" key={index}>
              <img src={glossary.image} alt="glossary-image" className="glossaryImage" />
              <h2 className="glossqn">{glossary.qn}</h2>
              <p className="excerpt">{glossary.ans}</p>
              <div className="author">
                <img src={glossary.teamLogo} alt="team-logo" className="teamLogo" />
                <span className="glossTeam">{glossary.team}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}