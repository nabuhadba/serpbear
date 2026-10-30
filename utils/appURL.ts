/**
 * Reads NEXT_PUBLIC_APP_URL at runtime. The variable name is built dynamically so that
 * Next.js does not inline its value at build time (the Docker image is built once and
 * configured when the container starts).
 */
const APP_URL_ENV_KEY = ['NEXT', 'PUBLIC', 'APP', 'URL'].join('_');

const getAppURL = (): string => process.env[APP_URL_ENV_KEY] || '';

export default getAppURL;
