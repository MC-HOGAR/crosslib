export interface BannerEstaticoDocData {
    createdAt: string
    img_key_escritorio: string
    img_key_mobile: string
    link: string
    titulo: string
}

export interface BannerEstatico extends BannerEstaticoDocData {
    id: string
}

export const BannerEstaticoFileValidations = Object.freeze({
    MAX_FILE_SIZE: 7 * 1024 * 1024, // 7MB
    IMG_MOBILE_WIDTH: 800,
    IMG_MOBILE_HEIGHT: 150,
    IMG_MOBILE_RESOLUTION: '800x150px',
    IMG_DESKTOP_WIDTH: 1920,
    IMG_DESKTOP_HEIGHT: 80,
    IMG_DESKTOP_RESOLUTION: '1920px80px',
})