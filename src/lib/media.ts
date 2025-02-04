const DEFAULT_IMAGE = "/placeholder-image.jpg"
const DEFAULT_VIDEO_THUMBNAIL = "/video-placeholder.jpg"

export function getMediaPath(
  path?: string,
  type: "image" | "video" = "image"
): string {
  if (!path) {
    return type === "image" ? DEFAULT_IMAGE : DEFAULT_VIDEO_THUMBNAIL
  }
  return `/${path.replace(/^\//, "")}`
}

export function isVideoFile(path: string): boolean {
  const videoExtensions = [".mp4", ".webm", ".ogg"]
  return videoExtensions.some((ext) => path.toLowerCase().endsWith(ext))
}
