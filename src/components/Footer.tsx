const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="flex justify-center py-6 px-6">
        <p className="text-xs sm:text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mustafa Lanewala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;