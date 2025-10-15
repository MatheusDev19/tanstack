export async function useGetUsersService() {
    const url = "http://localhost:3000/users";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();

    } catch (error) {
        console.error(error)
    }
}