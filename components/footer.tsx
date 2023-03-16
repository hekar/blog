import Container from "./container";
import ThemeSwitch from "./theme-switch";

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 py-32">
      <Container>
        <div className="grid grid-cols-1 gap-4">
          <div className="justify-self-end">
            <ThemeSwitch />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
