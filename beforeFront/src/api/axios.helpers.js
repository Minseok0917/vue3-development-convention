import axios from "axios";

export function create(config) {
  return axios.create(config);
}

/* export function createInstance(baseURL, configs) {
  const JSON = create({
    baseURL,
    headers: { ...config?.headers, "Content-type": "application/json" },
    ...configs,
  });
  const FORM = create({
    baseURL,
    headers: { ...config?.headers, "Content-type": "multipart/form-data" },
    ...configs,
  });
}

export function createJSON(baseURL, ...configs) {
  return create({
    baseURL,
    headers: { "Content-type": "application/json" },
    ...configs,
  });
}

export function createForm(baseURL, ...configs) {
  return create({
    baseURL,
    headers: { "Content-type": "multipart/form-data" },
    ...configs,
  });
}
 */
