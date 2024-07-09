export interface Products extends Like {
  cheapest: string,
  external: string,
  gameID: string,
  thumb: string
}
export interface Like {
  isLiked: boolean
}