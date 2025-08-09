const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MetroNest. All rights reserved.</p>
      <nav className="flex items-center gap-4 text-sm">
        <a href="#how-it-works" className="hover:text-foreground">How it works</a>
        <a href="#tech" className="hover:text-foreground">Technology</a>
        <a href="#faq" className="hover:text-foreground">FAQ</a>
      </nav>
    </div>
  </footer>
);

export default Footer;
