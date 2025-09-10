export interface GlobalConfig {
    logos: Logos
}

interface Logos {
    brandHeaderKey: string
    brandFooterKey: string
    footerBannerEnviosKey: string
}

export interface GlobalConfigSocialNetwork {
    logo: string
    name: string
    position: number
    url: string
}