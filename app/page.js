import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function Home() {
  return <main className="flex justify-center min-h-screen p-24 bg-neutral-800">
    <LoginForm>
    </LoginForm>
  </main>;
}
