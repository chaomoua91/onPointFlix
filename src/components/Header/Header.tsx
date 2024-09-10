import "./Header.css";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

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
