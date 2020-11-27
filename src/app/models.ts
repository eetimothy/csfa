export interface ApiKey {
    apis: string;
}

export interface CountryList {

}

export interface NewsArticles {
    source: {id, name};
    author: string;
    title: string;
    description: string;
    url: string;
}