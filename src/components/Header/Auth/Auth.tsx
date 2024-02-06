import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/Button/Button";

export const Auth = () => {
  const { data, status } = useSession();

  return (
    <Button
      className="sm:block sm:max-w-32 sm:overflow-hidden"
      color="PRIMARY"
      onClick={() => {
        switch (status) {
          case "authenticated":
            signOut();
            break;
          case "unauthenticated":
            signIn("github");
            break;
        }
      }}
      size="RESPONSIVE"
      style={{
        textOverflow: "ellipsis",
        textWrap: "nowrap",
      }}
    >
      {status === "authenticated" &&
        data !== null &&
        data.user !== null &&
        data.user !== undefined && <>{data.user.name || "Logged"}</>}

      {status === "loading" && <>Loading</>}

      {status === "unauthenticated" && <>SignIn</>}
    </Button>
  );
};
