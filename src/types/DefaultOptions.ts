import type { UseQueryOptions } from "@tanstack/react-query";
import type { ResponseError } from "./ResponseError";

export type DefaultOptions<T> = Omit<UseQueryOptions<T, ResponseError>, "queryKey">
