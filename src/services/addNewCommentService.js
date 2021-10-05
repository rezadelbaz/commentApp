import http from "./httpService";

export function addNewComment(data) {
  const token = "SECURE READY";
  const header = {
    headers: {
      Authorization: `Bia ${token}`,
    },
  };
  return http.post("/comments", data, header);
}
