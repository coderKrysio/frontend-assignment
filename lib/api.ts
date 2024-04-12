export interface FormData {
    name: string;
    email: string;
    avatar: string;
    job: string;
}

export const API = {
    createUser: async (userData: FormData) => {
        try {
            const response = await fetch(
                "https://6617bbcfed6b8fa434839fcb.mockapi.io/api/v1/users",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: userData.name,
                        email: userData.email,
                        avatar: userData.avatar,
                        job: userData.job,
                    }),
                }
            );
            return response.json();
        } catch (err: any) {
            console.error("Error creating user:", err);
        }
    },
    getUsers: async () => {
        try {
            const response = await fetch(
                "https://6617bbcfed6b8fa434839fcb.mockapi.io/api/v1/users"
            );
            return response.json();
        } catch (err: any) {
            console.error("Error getting users:", err);
        }
    },
};
