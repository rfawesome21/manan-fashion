import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: '3t016sc9',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-25',
})

export const urlFor = (source) => createImageUrlBuilder(client).image(source)