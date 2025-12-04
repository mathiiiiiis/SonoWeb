/**
 * Media Paths Conf
 */

const getAssetUrl = (path) => {
  if (path.startsWith('@/')) {
    path = path.replace('@/', '../')
  }
  return new URL(path, import.meta.url).href
}

/**
 * Screenshot Images
 */
export const screenshots = {
  nowPlaying: '/assets/images/screenshots/NowPlayingScreen.webp',
  library: '/assets/images/screenshots/LibraryScreen.webp',
  search: '/assets/images/screenshots/SearchScreen.webp',
  home: '/assets/images/screenshots/HomeScreen.webp',
  settings: '/assets/images/screenshots/SettingsScreen.webp',
}

/**
 * Logo Images
 */
export const logos = {
  headerLight: '/favicon-light.svg',
  headerDark: '/favicon-dark.svg',

  sonoIconBlack: '/assets/images/logos/sonoIconB.png',
  sonoIconWhite: '/assets/images/logos/sonoIconW.webp',
  sonoLogo: '/assets/images/logos/sonoLogo.png',
}

/**
 * Favicon paths
 */
export const favicons = {
  default: '/favicon.svg',
  light: '/favicon-light.svg',
  dark: '/favicon-dark.svg',
}

/**
 * Video paths
 */
export const videos = {
  feature_lyrics: '/assets/videos/feature_lyrics.mp4',
  feature_playback: '/assets/videos/feature_playback.mp4',
  feature_lastfm: '/assets/videos/feature_last_fm.mp4',
  feature_playlist: '/assets/videos/feature_playlist.mp4',
}

/**
 * Additional image categories
 */
export const images = {
  tabletView: '/assets/images/screenshots/TabletView.png',
  phoneView: '/assets/images/screenshots/PhoneView.png',
}

export default {
  screenshots,
  logos,
  favicons,
  videos,
  images,
}