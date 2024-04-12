"use client";
import { CreateUserForm } from "@/components/create-user-form";
import { UsersTable } from "@/components/users-table";
import { Button, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function UsersPage() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <main className="w-full min-h-screen flex flex-col gap-5 p-4 bg-white">
            <div className="fixed top-0 left-0 bg-white w-full h-[60px] z-10 p-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Users</h1>
                <Button color="green" onClick={open}>
                    Add new user
                </Button>
            </div>
            <UsersTable />
            <Modal
                opened={opened}
                onClose={close}
                title="Create New User"
                centered
            >
                <CreateUserForm close={close} />
            </Modal>
        </main>
    );
}
