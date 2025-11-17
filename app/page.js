import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1>Ai Video Generator App</h1>
      <Button>Click Me!</Button>
      <UserButton />
    </>
  );
}
