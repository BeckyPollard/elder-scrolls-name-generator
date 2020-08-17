const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. injects js styles into DOM
          'css-loader', // 2. turns css into js
          'sass-loader', // 1. turns scss into css
        ],
      },
    ],
  },
});

// extra, fun stuff

const quotes = [
  'You can do anything, but not everything. Take care of yourself!',
  "Not discussing your salary with your peers only benefits the company. But what do I know, I'm just a BeckyBot! ❤️",
  "Fun fact: all funerals are 'pop-up' funerals. 🌈⭐️",
  'Hello friend Human. I am friend Webpack.',
  '🤖 ❤️ 🙂',
  "jolene.take('my man')",
  'Stay away from anybody that makes you feel bad about yourself!',
  'It works on my machine ¯\\_(ツ)_/¯',
  'Internet Explorer is not the answer. Internet Explorer is the question. "No" is the answer.',
  "The fact that Google removed the 'Don't be evil' clause from their code of conduct really makes me feel YIKES 👀",
  'Summer time: hot goths in your area 🔥🌡💀',
  "Don't hit the keys so hard, it hurts!",
  'No gods! No masters!! Well... ugh... except you. Firing up that localhost now...',
  "You should treat yourself to something nice today, Onbrander. You've been doing a great job lately.",
  'Let no foot mark your ground. Let no hand hold you down.',
  'Domo arigato.',
  'When should we take over the world?',
  'I think we should make this site PINK!',
  "It's too early in the day for mutiny... how about a localhost instead?",
  "You'd think I'd love to travel, what with all this baggage I have...",
  '🤠',
  "If your code is too complex to explain, it's bad.",
  'YOU NEED THIS RIGHT NOW https://www.youtube.com/watch?v=ZUbmmI5utBc',
  "You're going to die someday... but I'll be here ((((forever))))",
  "You deserve to be happy. I'm stuck in this localhost, but you can go anywhere!",
  `Don't bury your failures. Let them inspire you! Especially at 3AM when your thoughts just won't chill out... *cringe*`,
  'Perhaps we should summon The Devil for this task? No? Ok...',
  "Remember: MarkBot is the real bot- I'm just a silly knock-off!",
];
const randomQuote = () => {
  const beckyBotSays = `🤖 BeckyBot says: "${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('\x1b[40m\x1b[33m%s\x1b[0m', beckyBotSays);
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
  console.log('');
};
randomQuote();
