import "./Header.css";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function Header() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <div className="header">
        <div className="Logo">
          <img src="/src/assets/Logo.svg" />
        </div>
        <div className="SignInButton">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
              >
                Sign In
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="mr-11 flex flex-col items-flex-start justify-flex-start p-6 margin-4"
              style={{ width: "425px", height: "188px" }}
            >
              <div className="flex flex-col gap-3">
                <h3 className="signInTitle">Sign In</h3>
                <form>
                  <div className="dialog">
                    <p>
                      Sign in to your account here to save your watch list or
                      create a new account.
                    </p>
                  </div>
                  <Button className="flex content-flex-start mt-6">
                    <img
                      src="/src/assets/logo_google_g_icon.png"
                      alt="Google Icon"
                      style={{
                        marginRight: "8px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                    Sign In With Google
                  </Button>
                </form>
              </div>
            </PopoverContent>
            ;
          </Popover>
        </div>
      </div>
    </>
  );
}
