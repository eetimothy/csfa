import { Dexie } from 'dexie';
import { Injectable } from '@angular/core'
import { NewsArticles, ApiKey, CountryList } from './models'

@Injectable()
export class NewsDatabase extends Dexie {
    apiKey: any;
    newArtices: any;
    countryList: any;
    saveApiKey(opt: ApiKey) {
      throw new Error("Method not implemented.");
    }
    private news: Dexie.Table<NewsArticles, string>
    

    constructor() {
        super('newsDB')

        this.version(1).stores({
            apiKey: "key"
        })
        this.apiKey = this.table('apiKey')
        this.newArtices = this.table('newsArticles')
        this.countryList = this.table('countryList')
    }

    
}
