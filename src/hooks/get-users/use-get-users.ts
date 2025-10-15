import { useQuery, type DefaultOptions } from "@tanstack/react-query";
import type { ResponseError } from "../../types/ResponseError";
import { useGetUsersService } from "../../services/get-users/use-get-users.service";
import type { User } from "../../interfaces/User";

export const getUsersKey = ["users"]

export function useGetUsers(queryOptions?: DefaultOptions<User[]>) {
    return useQuery<User[], ResponseError>({
        queryKey: getUsersKey,
        queryFn: useGetUsersService,
        ...queryOptions
    })
}