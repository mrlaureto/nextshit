export interface PostPeek {
    title: string,
    smallDescription: string,
    currentSlug: string,
    titleImage: any,
    categories: Category[]
}

export interface Post {
    currentSlug: string,
    title: string,
    content: any,
    titleImage: any,
    categories: Category[]
}

export interface Category {
    title: string,
}