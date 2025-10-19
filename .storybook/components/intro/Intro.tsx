import ImageKemetDocumentation from '../../images/kemet-documentation.png';
import packageJson from '../../../package.json';
import './Intro.css';

export const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-masthead">
        <img src={ImageKemetDocumentation} alt="Kemet Documentation" />
        <header>
          <h1>Kemet UI</h1>
          <p>Documentation v{packageJson.version}</p>
        </header>
      </div>
      <p>Kemet UI combines a powerful Styles API along with custom elements to allow you to build rich UIs. The custom elements have been organized by categories; Icons, Actions, Form Controls, Interactive, Feedback & Status, Organization, and  Miscellaneous. You'll also find templates that combines the Styles API and custom elements to demonstrate how to build rich experiences for your UI.</p>
    </section>
  );
};
