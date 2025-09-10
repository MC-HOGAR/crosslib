export interface GlobalConfig {
    logos: Logos
    bannerFooter: BannerFooter
}

interface Logos {
    brandHeaderKey: string
    brandFooterKey: string
}

interface BannerFooter {
    imageLink: string
    linkTo?: string
}

export interface GlobalConfigSocialNetwork {
    logo: string
    name: string
    position: number
    url: string
}