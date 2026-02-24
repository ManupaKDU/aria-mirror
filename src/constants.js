module.exports = Object.freeze({
  TOKEN: '8491533185:AAFyzBwNe0CBsrj6SOJiGgJy8A9aH0RO884',
  ARIA_SECRET: 'my_aria2_secret',
  ARIA_DOWNLOAD_LOCATION: '/home/manupa/Openclawprojects/aria-mirror/downloads',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/',
  ARIA_FILTERED_DOMAINS: [],
  ARIA_FILTERED_FILENAMES: [],
  ARIA_PORT: 8210,
  LOCAL_UPLOAD_PATH: '/home/manupa/Openclawprojects/finished_downloads',
  TELEGRAM_API_URL: 'http://localhost:8081',
  TELEGRAM_API_DATA_PATH: '/home/manupa/telegram-bot-api-data',
  SUDO_USERS: [1981444279],
  AUTHORIZED_CHATS: [1981444279],
  STATUS_UPDATE_INTERVAL_MS: 5000,
  DOWNLOAD_NOTIFY_TARGET: {
    enabled: false,
    host: 'localhost',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,
    NAME: "@aria_mirror_bot"
  }
});