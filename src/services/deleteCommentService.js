import http from "./httpService";

export function deleteComment(commentID) {
  return http.delete(`/comments/${commentID}`);
}
