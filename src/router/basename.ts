export const PRODUCTION_BASE = '/portfolio/'
export const DEVELOPMENT_BASE = '/'

export const basename =
  import.meta.env.MODE === 'production' ? PRODUCTION_BASE : DEVELOPMENT_BASE
