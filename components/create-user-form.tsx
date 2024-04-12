"use client";
import { useState } from "react";
import { TextInput, Button } from "@mantine/core";
import { API } from "@/lib/api";

export const CreateUserForm = ({ close }: { close: () => void }) => {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [avatar, setAvatar] = useState("");
    const [job, setJob] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        API.createUser({ name, email, avatar, job }).then((res) =>
            console.log(res)
        );
        setName("");
        setEmail("");
        setAvatar("");
        setTimeout(() => setSuccess(true), 10);
        setTimeout(() => {
            setSuccess(false);
            close();
        }, 3000);
        setTimeout(() => window.location.reload(), 4000);
    };

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="w-full flex flex-col gap-5"
        >
            <TextInput
                label="Name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <TextInput
                label="Email"
                placeholder="yourname@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextInput
                label="Avatar URL"
                placeholder="https://..."
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                required
            />
            <TextInput
                label="Job"
                placeholder="Designer"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
            />
            {!success ? (
                <Button type="submit" color="green">
                    Create User
                </Button>
            ) : (
                <p className="text-xl text-center text-[#40c057] font-semibold">
                    New User Added Successfully !
                </p>
            )}
        </form>
    );
};
