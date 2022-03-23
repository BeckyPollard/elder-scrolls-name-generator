# The Elder Scrolls Character Name Generator [![Netlify Status](https://api.netlify.com/api/v1/badges/1679775e-f0ec-4cef-9612-0bd7edbc735f/deploy-status)](https://app.netlify.com/sites/dunmer-name-generator/deploys)

<img src="https://user-images.githubusercontent.com/52248161/156279222-e08f6cf5-86cd-4901-bf78-7241d06434fd.png" width="400">

Names scraped from [The Unofficial Elder Scrolls Pages](https://en.uesp.net/wiki/Lore:Names) wiki.

Deployed live on Netlify: [tes-name-generator.netlify.app](https://tes-name-generator.netlify.app/).

### Why

Because I keep making new characters and I want a quick lore-friendly name, or because sometimes when I see unnamed NPCs I just want to give them a name but don't want to look too hard for one. I am a lazy, so I spent a lot of time making this.

### Scraping

The file [scrape.js](./src/scripts/names/scrape.js) is to be run with node in your terminal, with `node scrape.js`.
This file connests to the UESP page [Names Pages](https://en.uesp.net/wiki/Lore:Names) for each playable race with Axios, and uses Cheerio to parse the result. To keep things simple the file looks for instances of names within anchor tags and pushes them to an array. There's sooo many names surely we won't miss a few, eh? Using Node's File System API those arrays are output to a file [names.js](./src/scripts/names/names.js) for use in the generator (big file!).

### Future Features
- Add some lore context for the names below the options, like info on Orcish prefixes and Redguard titles.

<br>

<img src="./src/assets/images/dagger.gif"><img src="./src/assets/images/dagger.gif"><img src="./src/assets/images/dagger.gif"><img src="./src/assets/images/dagger.gif">
