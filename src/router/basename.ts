export const developmentBase = '/'
export const productionBase = '/portfolio'

export const basename =
  import.meta.env.MODE === 'production' ? productionBase : developmentBase
