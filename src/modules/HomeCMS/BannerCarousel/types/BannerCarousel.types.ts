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