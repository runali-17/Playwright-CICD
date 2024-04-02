export default class CircleOfTrust {
    constructor(page){
        this.page = page; 
        this.loadMore = page.locator("//span[normalize-space()='Load more']");
    }
}