import "./Header.css";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function Header() {
  auth.useDeviceLanguage();
  const provider = new GoogleAuthProvider();

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <div className="header">
        <div className="Logo">
          <img src="/src/assets/Logo.svg" />
        </div>

        <Popover>
          <PopoverTrigger>
            <div className="SignInButton">
              <Button variant="outline"> Sign In</Button>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className="mr-11 flex flex-col items-flex-start justify-flex-start p-6 margin-4"
            style={{ width: "425px", height: "188px" }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="signInTitle">Sign In</h3>
              <div className="dialog">
                <p>
                  Sign in to your account here to save your watch list or create
                  a new account.
                </p>
              </div>
            </div>

            <Button
              className="flex content-flex-start mt-6"
              onClick={() => signInWithGoogle()}
            >
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
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
