/**
 *
 * @param {String} path
 * @param {String} method
 * @param {JSON} body
 * @returns HTTP Response
 */
export default async function send(path, method, body) {
  const options =
    body !== undefined
      ? {
          method: method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      : {
          method: method,
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        };
  const response = await fetch(`http://localhost:7777${path}`, options);
  if (response.error !== undefined) {
    throw new Error(response.error);
  } else {
    return response;
  }
}
