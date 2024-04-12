"use client";
import { getUsers } from "@/lib/hooks";
import {
    Table,
    Checkbox,
    ScrollArea,
    Group,
    Avatar,
    Text,
    rem,
} from "@mantine/core";
import { useState } from "react";
import classes from "./usertable.module.css";
import cx from "clsx";

export const UsersTable = () => {
    const { users } = getUsers();
    const [selection, setSelection] = useState(["1"]);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) =>
            current.length === users.length
                ? []
                : users.map((user: any) => user.id)
        );

    const rows = users.map((user: any) => {
        const selected = selection.includes(user.id);

        return (
            <Table.Tr
                key={user.id}
                className={cx({ [classes.rowSelected]: selected })}
            >
                <Table.Td>
                    <Checkbox
                        checked={selection.includes(user.id)}
                        onChange={() => toggleRow(user.id)}
                    />
                </Table.Td>
                <Table.Td>
                    <Group gap="sm">
                        <Avatar size={26} src={user.avatar} radius={26} />
                        <Text size="sm" fw={500}>
                            {user.name}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{user.email.toLowerCase()}</Table.Td>
                <Table.Td>{user.job}</Table.Td>
            </Table.Tr>
        );
    });
    return (
        <div className="p-10 pt-0 mt-[65px]">
            <ScrollArea>
                <Table miw={800} verticalSpacing="sm">
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th style={{ width: rem(40) }}>
                                <Checkbox
                                    onChange={toggleAll}
                                    checked={selection.length === users.length}
                                    indeterminate={
                                        selection.length > 0 &&
                                        selection.length !== users.length
                                    }
                                />
                            </Table.Th>
                            <Table.Th>User</Table.Th>
                            <Table.Th>Email</Table.Th>
                            <Table.Th>Job</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>{rows}</Table.Tbody>
                </Table>
            </ScrollArea>
        </div>
    );
};
