const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = 3000;

// Set up Handlebars view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// Serve static files (e.g., CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    images: [
      '/images/car1.jpg',
      '/images/car2.jpg',
      '/images/images.jpg'
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
