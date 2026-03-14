import { createClient, type ContentfulClientApi } from "contentful"

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN
const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN

let _client: ContentfulClientApi<undefined> | null = null
let _previewClient: ContentfulClientApi<undefined> | null = null

const getDeliveryClient = (): ContentfulClientApi<undefined> => {
  if (!SPACE_ID || !ACCESS_TOKEN) {
    throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN env vars")
  }
  if (!_client) {
    _client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })
  }
  return _client
}

const getPreviewClient = (): ContentfulClientApi<undefined> | null => {
  if (!SPACE_ID || !PREVIEW_TOKEN) return null
  if (!_previewClient) {
    _previewClient = createClient({
      space: SPACE_ID,
      accessToken: PREVIEW_TOKEN,
      host: "preview.contentful.com",
    })
  }
  return _previewClient
}

export const getClient = (preview = false): ContentfulClientApi<undefined> => {
  const pc = preview ? getPreviewClient() : null
  return pc ?? getDeliveryClient()
}

/** Check if Contentful credentials are configured */
export const isContentfulConfigured = (): boolean =>
  Boolean(SPACE_ID && ACCESS_TOKEN)
