import { createClient, type ContentfulClientApi } from "contentful"

let _client: ContentfulClientApi<undefined> | null = null
let _previewClient: ContentfulClientApi<undefined> | null = null

export const getClient = (preview = false): ContentfulClientApi<undefined> => {
  if (preview) {
    const spaceId = process.env.CONTENTFUL_SPACE_ID
    const token = process.env.CONTENTFUL_PREVIEW_TOKEN
    if (!spaceId || !token) {
      throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_PREVIEW_TOKEN env vars")
    }
    if (!_previewClient) {
      _previewClient = createClient({
        space: spaceId,
        accessToken: token,
        host: "preview.contentful.com",
      })
    }
    return _previewClient
  }

  const spaceId = process.env.CONTENTFUL_SPACE_ID
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
  if (!spaceId || !accessToken) {
    throw new Error("Missing CONTENTFUL_SPACE_ID or CONTENTFUL_ACCESS_TOKEN env vars")
  }
  if (!_client) {
    _client = createClient({ space: spaceId, accessToken })
  }
  return _client
}
