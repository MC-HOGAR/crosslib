export interface BannerCarouselDocData {
    createdAt: string
    esExterno: boolean
    img_key_escritorio: string
    img_key_mobile: string
    link: string
    title: string
}

export interface BannerCarousel extends BannerCarouselDocData {
    id: string
}

export const BannerCarouselFileValidations = Object.freeze({
    MAX_FILE_SIZE: 7 * 1024 * 1024, // 7MB
    IMG_MOBILE_WIDTH: 500,
    IMG_MOBILE_HEIGHT: 340,
    IMG_MOBILE_RESOLUTION: '500x340',
    IMG_DESKTOP_WIDTH: 1920,
    IMG_DESKTOP_HEIGHT: 436,
    IMG_DESKTOP_RESOLUTION: '1920x436',
    VALID_IMAGE_TYPES: ['jpg','jpeg', 'png', 'webp', 'avif']
})