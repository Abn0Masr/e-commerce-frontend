"use server";

import { cookies } from "next/headers";

export async function getCookie<T>(name: string, initialState: T): Promise<T> {
  const store = cookies();
  const cookie = store.get(name);
  return (cookie?.value as T) || initialState;
}
