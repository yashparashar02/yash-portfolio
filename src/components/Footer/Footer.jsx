import Container from "../Container/Container";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <Container>
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © {currentYear} Yash Parashar
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;