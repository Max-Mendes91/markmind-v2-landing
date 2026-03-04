import { createClient, type ContentfulClientApi } from "contentful"

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN

export const contentfulClient: ContentfulClientApi<undefined> = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
})

export const previewClient: ContentfulClientApi<undefined> | null = PREVIEW_TOKEN
  ? createClient({
      space: SPACE_ID,
      accessToken: PREVIEW_TOKEN,
      host: "preview.contentful.com",
    })
  : null

export const getClient = (preview = false): ContentfulClientApi<undefined> =>
  preview && previewClient ? previewClient : contentfulClient
