import { Dexie } from 'dexie';
import { Injectable } from '@angular/core'
import { NewsArticles, ApiKey, CountryList } from './models'

@Injectable()
export class NewsDatabase extends Dexie {
    
    private countryList: Dexie.Table<NewsArticles, string>
    newsArticles: any;
   

    constructor() {
        super('news')
        //create shema
        this.version(1).stores({
            // index q
            newsArticles: "source, author, title, description, url"
        })
        this.newsArticles = this.table('newsArticles')
    }

    
}
