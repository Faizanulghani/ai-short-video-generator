"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { createUserIfNotExist } from "./actions/createUser";

const Provider = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      createUserIfNotExist({
        name: user.fullName,
        email: user.primaryEmailAddress.emailAddress,
        imageUrl: user.imageUrl,
      });
    }
  }, [user]);

  return <div>{children}</div>;
};

export default Provider;
