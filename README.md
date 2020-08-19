# Dunmer Character Name Generator [WIP]

Names scraped from [The Unofficial Elder Scrolls Pages](https://en.uesp.net/wiki/Main_Page) wiki.

### Scraping

The file [scrape.js](./scrape.js) is to be run with node in your terminal, with `node scrape.js`.
This file connests to the UESP page [Lore:Dunmer Names](https://en.uesp.net/wiki/Lore:Dunmer_Names) with Axios, and uses Cheerio to parse the result. To keep things simple the file looks for instances of names within anchor tags and pushes them to an array. Using Node's File System API those arrays are output to a file [names.js](./src/names.js) for use in the generator.

### Project Todo
- [x] Scrape names from UESP, save to a JavaScript array (names.js).
- [x] On request (button), generate a first and last name.
- [ ] Add option to specify character gender.
- [ ] Accessibility audit.
- [ ] Style app. **(MVP)**
- [ ] Options for multiple names output quantities.
- [ ] MAYBE add more races.
