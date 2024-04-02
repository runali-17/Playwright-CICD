export default class BlogPage {
    constructor(page){
        this.page = page; 
        this.all = page.locator("//li[@class='all_posts blog_category category_item active']");
        this.first = page.locator("//li[@class='blog_category category_item'][1]");
        this.second = page.locator("//li[@class='blog_category category_item'][2]");
        this.third = page.locator("//li[@class='blog_category category_item'][3]");
        this.fourth = page.locator("//li[@class='blog_category category_item'][4]");
        this.fifth = page.locator("//li[@class='blog_category category_item'][5]");
        this.sixth = page.locator("//li[@class='blog_category category_item'][6]");
        this.seventh = page.locator("//li[@class='blog_category category_item'][7]");
        this.eighth = page.locator("//li[@class='blog_category category_item'][8]");
        this.ninth = page.locator("//li[@class='blog_category category_item'][9]");
        this.tenth = page.locator("//li[@class='blog_category category_item'][10]");
        this.eleventh = page.locator("//li[@class='blog_category category_item'][11]");
        this.twelveth = page.locator("//li[@class='blog_category category_item'][12]");
        this.thirteenth = page.locator("//li[@class='blog_category category_item'][13]");
        this.secondPage = page.locator("//a[normalize-space()='2']");
        this.downloadTheApp = page.locator("//button[@class='downloadbtn mobile-invisible']");
        this.downloadTheApp2 = page.locator("(//button[@class='downloadbtn mobile-invisible'])[2]");
        this.closeButton = page.locator("//button[@id='close']");
        this.blog = page.locator("//div[@id='blog_card_id_3222']//a[@class='blog-thumbnail']");
        this.whatsapp = page.locator("//a[@title='WhatsApp']");
        this.twitter = page.locator("//a[@title='X']");
        this.linkedIn = page.locator("//a[@title='LinkedIn']");
        this.copy = page.locator("(//a[@title='Copy Link'])[1]");
    }
}