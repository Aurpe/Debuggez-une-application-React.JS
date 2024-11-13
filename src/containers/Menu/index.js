/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import "./style.scss";

const Menu = () => {
  const scrollToSection = (id) => {
    // Change le hash
    window.document.location.hash = id;
    
    // Attend que le hash soit changé puis fait défiler
    setTimeout(() => {
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a 
            href="#Nos-services"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#Nos-services');
            }}
          >
            Nos services
          </a>
        </li>
        <li>
          <a 
            href="#Nos-realisations"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#Nos-realisations');
            }}
          >
            Nos réalisations
          </a>
        </li>
        <li>
          <a 
            href="#Notre-equipe"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#Notre-equipe');
            }}
          >
            Notre équipe
          </a>
        </li>
      </ul>
      <Button 
        title="contact" 
        onClick={() => scrollToSection('#contact')}
      >
        Contact
      </Button>
    </nav>
  );
};

export default Menu;
