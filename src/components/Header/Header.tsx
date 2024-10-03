import "./Header.css";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="Logo">
          <img src="/src/assets/Logo.svg" />
        </div>
        <div className="SignInButton">
          <Button variant="outline">Sign In</Button>
        </div>
      </div>
    </>
  );
}
