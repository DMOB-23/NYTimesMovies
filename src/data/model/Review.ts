export interface ReviewResult {
    results: Review[]
}

export interface Review {
    display_title: string,
    byline: string,
    headline: string,
    summary_short: string,
    publication_date: Date,
    link: Link,
    multimedia: Multimedia,
}

export interface Link {
    type: string,
    url: string,
}

export interface Multimedia {
    src: string,
}
