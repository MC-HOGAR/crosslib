export interface Esfera {
    img_key: string
    link: string
    title: string
}

export interface EsferaConId extends Esfera {
    id: string
}

export const EsferasFileValidation = Object.freeze({
    MAX_FILE_SIZE: 7 * 1024 * 1024, // 7MB
    MAX_WIDTH: 500,
    MAX_HEIGHT: 500,
    IMG_RESOLUTION: '500x500',
    VALID_IMAGE_TYPES: ['jpg','jpeg', 'png', 'webp', 'avif']
})