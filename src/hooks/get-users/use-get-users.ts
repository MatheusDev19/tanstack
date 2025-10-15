import { useQuery, type DefaultOptions } from "@tanstack/react-query";
import { useGetUsersService } from "./use-get-users.service";
import type { IUser } from "./use-get-users.type";
import type { ResponseError } from "../../types/ResponseError";

export const getUsersKey = ["users"]

export function useGetUsers(queryOptions?: DefaultOptions<IUser[]>) {
    return useQuery<IUser[], ResponseError>({
        queryKey: getUsersKey,
        queryFn: useGetUsersService,
        ...queryOptions
    })
}