import sendRequest from "../utils/request";

export function getAllTriggers(data) {
  return sendRequest({
    url: "/getTriggers",
    method: "post",
    data: data,
  });
}
