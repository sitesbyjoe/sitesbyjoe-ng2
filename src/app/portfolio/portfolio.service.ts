import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Portfolio } from './portfolio';

/*export class Portfolio {
  id: number;
  name: string;
  url: string;
  description: string;
  goals: string;
  solution: string;
  technologies: string;
  comment: string;
  launchDate: string;
  rank: number;
  image: string;
  tmb: string;
  slug: string;
  tags: string;
  category: string;
  views: number;
  published: number;
}*/

@Injectable()
export class PortfolioService {

  loading: boolean;
  data: Object;

  constructor(public http: Http, portfolio: Portfolio) {
    console.log('constructing portfolio.service');
  }

  /*
  getPortfolio(id) {
    let portfolio = [];
    let portfolioItems = [
      {"id":"80","name":"College Connection","url":"http:\/\/www.collegescholarships.com","description":"A new website for a college scholarship search service.","goals":"The original collegescholarships.com was created in 1995 and needed to be rebuilt into a web application that allowed for storing and search college scholarships.","solution":"The project was built in 2 phases. The first phase was taking the cumbersome static file system and turning it into a dynamic online system.\n\nThe 2nd Phase involved building a public interface that allowed students to create profiles on the site that would automatically display matching scholarships based on their interests and needs.\n\nIn the first 48 hours the site had dramatically increased it's traffic and had picked up hundreds of new profiles without any marketing whatsoever.","technologies":"PHP, MySQL, Codeigniter, Javascript, HTML, CSS, jQuery","comment":"","launch_date":"2011-08-01","rank":"1","image":null,"tmb":null,"slug":"college-connection","tags":"blue, college scholarships, college connection, codeigniter","category":null,"views":"0","published":"0","image_path":"uploads\/portfolio\/80-college-scholarships-tmb.jpg"},
      {"id":"79","name":"C-Cups Cupcakes","url":"http:\/\/ccupscupcakes.com","description":"New website for a Raynham, MA Mobile Bakery","goals":"","solution":"","technologies":"HTML5\/CSS3, jQuery, PHP\/MySQL, Codeigniter","comment":"After having a horrible experience with a past website designer coming to Sites by Joe was like a dream come true. The finished website is one of the most professional, smooth running websites I have ever come across. I am so thankful and proud that Joe was able to capture everything I asked for in my site. It is impeccably designed, crisp, clean and as professional as it comes not to mention it was built in such a timely manner! I could not have asked for a better website designer and would truly recommend him to anyone. It is not often that someone can fully trust another with such an important part of their business and be so satisfied with the final product! Thank you so much for all your hard work and getting my website completed so quickly!","launch_date":"2011-05-01","rank":"2","image":null,"tmb":null,"slug":"ccups-cupcakes","tags":"","category":null,"views":"0","published":"0","image_path":"uploads\/portfolio\/79-c-cups-tmb.jpg"},
      {"id":"39","name":"Goldcoast Realty","url":"http:\/\/www.goldcoastsir.com","description":"Sotheby's International Realty, Inc. office in Ocean City, New Jersey.","goals":"","solution":"","technologies":"","comment":"","launch_date":"2011-06-28","rank":"3","image":null,"tmb":null,"slug":"goldcoast-realty-ocean-city","tags":"","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/39-goldcoast-tmb.jpg"},
      {"id":"78","name":"Island Ice Cream","url":"http:\/\/islandicecream.net","description":"New website for a Wildwood, NJ Ice Cream Distributor","goals":"Island Ice Cream wanted to create a way for their customer base to always have access to up to date products and also the flavors offered.","solution":"We worked closely with their staff to first come up with a clean and simple design that matched the branding of their most recognizable asset - their delivery trucks. \n\nWe then dug in to create a total custom product and flavor module for the CMS powering the website. Now they can easily update all the inventory on their site as well as their other pages etc with no maintenance costs whatsoever.","technologies":"HTML5\/CSS3, jQuery, PHP\/MySQL, Codeigniter","comment":"The web site turned out to be a great tool for us to get our info out to new accounts as well as existing accounts. Thanks again for the great job.","launch_date":"2011-04-15","rank":"4","image":null,"tmb":null,"slug":"island-ice-cream","tags":"ice cream, white, green, pink, codeigniter, cms, products","category":null,"views":"0","published":"0","image_path":"uploads\/portfolio\/78-island-ice-cream-tmb.jpg"},
      {"id":"76","name":"Freehold Raceway","url":"http:\/\/freeholdraceway.com","description":"Website re-design for a Harness Racing Track","goals":"","solution":"","technologies":"HTML, CSS, Javascript, jQuery, PHP, MySQL, Codeigniter","comment":"","launch_date":"2010-03-31","rank":"5","image":null,"tmb":null,"slug":"freehold-raceway","tags":"","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/76-freehold-tmb.jpg"},
      {"id":"77","name":"Haunted Inc.","url":"http:\/\/hauntedincmovie.com","description":"New website for the feature film, Haunted, Inc.","goals":"","solution":"","technologies":"HTML, CSS, Javascript, jQuery, RSS, PHP, Picasa, Blogger, Vimeo","comment":"This website looks so f**king great. I was just checking it out online and everything just looks so professional and slick and has all come together. You have a knack for thinking what designs and choices best fit what the viewer wants and a your anticipation of these needs make going onto the site a much more pleasant experience.\n\nI know this sounds like a lot of hot air. But, just know that you have mad skills. We have gotten a plethora (Three Amigos word, there) of people complimenting the website and the whole web experience. I also appreciate how you knew we wanted as much control as possible of the site and built around existing sites (blogspot, vimeo, picasa) to make that happen","launch_date":"2010-10-01","rank":"6","image":null,"tmb":null,"slug":"haunted-inc-movie","tags":"","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/77-haunted-tmb.jpg"},
      {"id":"74","name":"The Design Collaborative","url":"http:\/\/tdcarchitect.com","description":"Website re-design for a Cape May County Architecture Firm","goals":"The design collaborative has their original site created in 2005. Some of the techniques used on the website needs to be upgraded as they were inaccessible to many devices. They also wished that the interface be cleaned up and simplified. The original site had a custom backend (written by us) which need to be upgraded to give them more control than previously possible.","solution":"We rewrote the whole database and backend to now run on PHP\/MySQL. CodeIgniter was used to organize the site's code and functionality. With new tools at their disposal they're able to control every page on the website including the data in the project gallery, the biddable projects area and even the solar energy savings data for the different school districts on the site.","technologies":"HTML, CSS, Javascript, jQuery, PHP, MySQL, CodeIgniter","comment":"","launch_date":"2010-02-08","rank":"7","image":null,"tmb":null,"slug":"design-collaborative","tags":"tan, green, white","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/74-design-collaborative-tmb.jpg"},
      {"id":"75","name":"Billy Benches","url":"http:\/\/billybenches.com","description":"A mini-website for a bench producer in Cape May County, NJ","goals":"","solution":"","technologies":"HTML 4.01 Strict, CSS, Javascript, jQuery, PHP","comment":"","launch_date":"2010-03-01","rank":"8","image":null,"tmb":null,"slug":"billy-benches","tags":"","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/75-billy-benches-tmb.jpg"},
      {"id":"33","name":"Dino's Seaville Diner","url":"http:\/\/www.dinosdiner.com","description":"A new custom website for a popular Cape May County Diner.","goals":"Dino's Seaville Diner made the decision to work on their online presence. They wanted a custom designed website that they could control the content of easily. They wanted to be able to update their menu and specials and had plans to begin selling products as time.","solution":"A fun new design was created to house the site's information that is powered by a custom built content management system that's designed to perfectly suit the site's needs. The diner's owner can easily manage the site's menu and specials, plus the site's photo galleries and much more.","technologies":"Photoshop, HTML 4 Strict, CSS, jQuery, PHP, MySQL, CodeIgniter Framework","comment":"\"I could not be happier with our site and the work done by Joe. Joe really took the time to listen and understand our goals and aspirations for the web site. The site is totally original and is customized to my particular needs and desires.\"\n\n\"Not only is the site pleasing to the eye, it is very functional and easy to navigate. Being able to control the content and update the site myself is also a huge plus.\"\n\nNicolas Karayiannis\nProprietor\nDino's Seaville Diner","launch_date":"2009-07-01","rank":"9","image":null,"tmb":null,"slug":"dinos-seaville-diner","tags":"restaurant, web design, illustration, custom cms development, green, tan, menu","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/33-dinos-diner-tmb.jpg"},
      {"id":"42","name":"Tim Kerr's Powerplay Realty","url":"http:\/\/www.powerplayrealty.com\/","description":"Website re-design for an Avalon Real Estate Agency.","goals":"","solution":"","technologies":"","comment":"","launch_date":"2008-08-01","rank":"10","image":null,"tmb":null,"slug":"powerplay-realty","tags":"","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/42-powerplay-realty-tmb.jpg"},
      {"id":"34","name":"Tommy Naples Music","url":"http:\/\/tommynaplesmusic.com","description":"A new custom web design for a new record label in New Jersey.","goals":"Tommy Naples Music wanted a custom website that would let visitors upload their own songs for review by the label to possibly allow them to get career assistance based on the quality of the submitted track. They also wanted a way to track the incoming songs using the site plus manage the online tracks of their already signed artists.","solution":"A new visual design was created for the label including a new logo, powered by a custom built content management system allowed for artist and music management and custom flash music player was set up.","technologies":"HTML 4 Strict, CSS, Javascript, jQuery, Adobde Flash, XML, PHP, MySQL and the CodeIgniter Framework.","comment":"","launch_date":"2009-02-01","rank":"11","image":null,"tmb":null,"slug":"tommy-naples-music","tags":"music website, independent record label, custom web design, purple, green, white","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/34-tommy-naples-tmb.jpg"},
      {"id":"35","name":"Northstar Traffic Service, Inc.","url":"http:\/\/www.northstartraffic.com","description":"Visual Redesign for an existing client's site.","goals":"Northstar Traffic wanted to \"spruce up\" the visual design of their website which had been created by us back in 2005. They also wanted to give the custom input forms some minor updates and change some things around in general throughout the site.","solution":"We made a complete visual overhaul of the site to be more industry-centered, increased text sizes, redid forms to be more accessible, added jQuery to the interface and voila! New design.","technologies":"HTML 4 Strict, CSS, Javascript, jQuery, Classic ASP","comment":"Joe couldn't have done a better job of completely exceeding my expectations with the re-design.","launch_date":"2009-04-01","rank":"12","image":null,"tmb":null,"slug":"northstar-traffic-service","tags":"redesign, custom web design, web development, shipping, freight","category":null,"views":"0","published":"1","image_path":"uploads\/portfolio\/35-northstar-traffic-tmb.jpg"}
    ];

    if (id > 0) {
      for (var i in portfolioItems) {
        if (id == portfolioItems[i].id) {
          portfolio.push(portfolioItems[i]);
        }
      }
    } else {
      portfolio = portfolioItems;
    }

    return portfolio;
  }
  */

  getPortfolioList() {
    return this.http.get('http://sitesbyjoe.com/api/portfolio_list')
      .map(this.extractData);
  }

  getPortfolioDetail(id) {
    return this.http.get('http://sitesbyjoe.com/api/portfolio_detail/' + id)
      .map(this.extractData);
  }

  extractData(res) {
    console.log(res);
    let body = res.json();
    return body || {};
  }

  handleError(error) {
    console.log(error);
    /*let errMsg = (error.message) ? error.message : error
      error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    return Observable.throw(errMsg);*/
  }

}
