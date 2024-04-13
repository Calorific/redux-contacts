import { ContactDto } from 'src/types/dto/ContactDto'

const baseUrl = 'https://fs.gcfiles.net/fileservice/file/download/a/177331/sc/'
const request = (url: string, config?: RequestInit) => fetch(baseUrl + url, config).then(r => r.json())

export const getContacts = async (): Promise<ContactDto[] | string> => {
  try {
    return await request('190/h/560e0501fa0e19aed9ef169df6095f00.json')
  } catch (e) {
    return (e as Error).message
  }
}

export const getGroups = async (): Promise<ContactDto[] | string> => {
  try {
    return await request('503/h/03b7cef5194e433422491a8f22413a18.json')
  } catch (e) {
    return (e as Error).message
  }
}