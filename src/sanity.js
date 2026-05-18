import { createClient } from "@sanity/client"

export default createClient({
  projectId: "bylyk4yv",
  dataset: "production",
  apiVersion: "2026-01-01",
  useCdn: true,
})