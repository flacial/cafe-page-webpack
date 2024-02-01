# cafe-page-webpack
## This is a cafe page centered around Ghibli Studio food. 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#motivation">Motivation</a></li>
        <li><a href="#reflection">Reflection</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

### Description
I'm a huge fan of Ghibli Studio and if you haven't gathered from my blog-page project, food! This website is for a cafe that serves the food featured in Ghibli Studio movies. It's also responsive, so feel free to resize the screen if you'd like :)

[See live website hosted on Github Pages](https://yh63935.github.io/cafe-page-webpack/) 

### Motivation
I wanted to learn how to use Webpack and get experience in using it. This website uses Webpack to bundle its files and renders each page separately with its elements when the appropriate option in the nav bar is pressed. I wanted to focus on modularity and writing organized code for practice. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Reflection
The most difficult part of using Webpack with this project was configuring it to be used and deployed from GithubPages. Because I am more familiar with using SASS (and I find it more convenient than CSS), I added SASS loaders to compile my SASS to CSS. However, since my gh-pages branch in the remote repository was based off of the dist/ folder of the code, I also had to extract the CSS file from the bundle in order to link it to the HTML. I could have added a CSS file directly to the dist/ folder, but because it is a compiled file from SASS, I wanted to leave those in their respective src/ and dist/ folders. Additionally, I had to link the background image url in the SCSS file for my website to the resulting output image file in dist/ which also took me a while to figure out. Throughout the entire process, I became a lot more comfortable using Webpack and am proud that I was able to resolve the problems that I ran into regarding it. 

Another thing I thought about was how to organize the code. I focused on creating modules with related code and functionality and even struggled with naming the files appropriately because I wanted the program structure to be readable. I ended up making modules for each page, along with a components and utilities module for functions that would be reused across pages. 

### Built With

* HTML
* SCSS
* Javascript
* Webpack
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Quick start:

1. Clone this github repository on your local machine with HTTPS:// or SSH (SSH is provided below, use HTTPS if preferred)

   ```$ git clone git@github.com:yh63935/cafe-page-webpack.git```

2. Install all necessary dependencies

   ```$ npm install```

3. Build dist/ files on your local machine

   ```$ npm start```

4. Open up index.html on your local to view your own copy

5. Alternatively go to [https://yh63935.github.io/cafe-page-webpack/](https://yh63935.github.io/cafe-page-webpack/) to see a live demo hosted on Github Pages.

<!-- CONTACT -->
## Contact

Amelia Ho - [Amelia Ho Linkedin](https://www.linkedin.com/in/ameliahoyp/))

Project Link: [https://github.com/yh63935/cafe-page-webpack](https://github.com/yh63935/cafe-page-webpack))

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
Image credits: 

* [https://fantasyfeasts.tumblr.com/post/161136080775/kikis-pancakes-from-kikis-delivery-service-by](https://fantasyfeasts.tumblr.com/post/161136080775/kikis-pancakes-from-kikis-delivery-service-by)
* [https://uk.style.yahoo.com/style/15-best-food-scenes-film-071128200.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANpalyeE_Q9VSpFXp6wXT93C2MjEyorzO0sY1n3W0TbP7anHOYiBsBkhJufMGyQvI6lJfCbF2qikbghGENu04AovG6vM2CZ-QjXzbpoBZoIq6b_nHY5Jr7CwTcJ1Deyo_V6XhYtbQm8EDmJH5OARriDcHlIm5tjYrhDor9SdpgWR](https://uk.style.yahoo.com/style/15-best-food-scenes-film-071128200.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANpalyeE_Q9VSpFXp6wXT93C2MjEyorzO0sY1n3W0TbP7anHOYiBsBkhJufMGyQvI6lJfCbF2qikbghGENu04AovG6vM2CZ-QjXzbpoBZoIq6b_nHY5Jr7CwTcJ1Deyo_V6XhYtbQm8EDmJH5OARriDcHlIm5tjYrhDor9SdpgWR)
* [https://aminoapps.com/c/studio-ghibli/page/blog/yum-yum-onigiri/Bxmm_aKiwudPgnGq3LxPVL1JNbXbWoJKpk
](https://aminoapps.com/c/studio-ghibli/page/blog/yum-yum-onigiri/Bxmm_aKiwudPgnGq3LxPVL1JNbXbWoJKpk
)
* [https://terribletriocreations.tumblr.com/post/107707695889/satsukis-bento-box-i-want-to-tell-you-about](https://terribletriocreations.tumblr.com/post/107707695889/satsukis-bento-box-i-want-to-tell-you-about)
* [https://www.seriouseats.com/studio-ghibli-anime-best-food-scenes
](https://www.seriouseats.com/studio-ghibli-anime-best-food-scenes
)
* [https://wallpapers.com/wallpapers/studio-ghibli-howl-s-moving-castle-j40hqc63s09xvdtw.html
](https://wallpapers.com/wallpapers/studio-ghibli-howl-s-moving-castle-j40hqc63s09xvdtw.html
)


Other acknowledgements:
* [https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3](https://meakaakka.medium.com/a-beginners-guide-to-writing-a-kickass-readme-7ac01da88ab3)
* [https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page)








