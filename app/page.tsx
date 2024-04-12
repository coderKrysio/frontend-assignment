import { Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="w-screen min-h-screen text-center flex flex-col items-center justify-center gap-5 p-24">
            Videodubber: Frontend Assignment
            <Link href={"/users"}>
                <Button>View Users</Button>
            </Link>
        </main>
    );
}
