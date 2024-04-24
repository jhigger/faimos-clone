import { LogIn } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <nav className="container flex w-full items-center justify-between gap-12 py-4">
        <img src="https://placehold.co/200x50?text=Logo" alt="logo" />
        <div className="hidden gap-8 lg:flex">
          {["Link1", "Link2", "Link3", "Link4", "Link5", "Link6"].map(
            (link) => (
              <span key={link}>{link}</span>
            ),
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon">
            <LogIn size={18} />
          </Button>
          <Button size="lg">Join as Creator</Button>
          <Button variant="secondary" size="lg">
            Join as Brand
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
