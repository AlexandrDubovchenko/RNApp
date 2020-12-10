export const fetchImage = async (): Promise<string> => {
  const response = await fetch('https://source.unsplash.com/random')
  return response.url
}
