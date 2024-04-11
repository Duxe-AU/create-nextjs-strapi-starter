export function concatURL(baseURL: string, ...subpaths: string[]) {
  let url = new URL(baseURL);
  const basePath = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
  const sanitizedSubpath = subpaths.map(subpath => subpath.replace(/^\/+/, ''));
  const newPath = `${basePath}/${sanitizedSubpath.join("/")}`;

  url.pathname = newPath;

  return url.toString();
}