"use client";

import { useEffect, useState } from "react";
import { API } from "./api";
import { useDisclosure } from "@mantine/hooks";

export const getUsers = () => {
    const [users, setUsers] = useState<any>([]);

    useEffect(() => {
        API.getUsers().then((res) => setUsers(res));
    }, []);

    return { users };
};

export const useModel = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return { opened, open, close };
};
