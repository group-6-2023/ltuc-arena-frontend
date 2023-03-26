import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { user } = useAuth0();
  console.log(user);
  return <div>Home</div>;
}
