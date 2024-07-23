# Personal Portfolio 🚀

## Project Description 📝
- The desire to showcase my skills and experiences led me to create this personal portfolio project.
- This project aims to provide a comprehensive and visually appealing platform to highlight my expertise, accomplishments, and aspirations.
- Through the development of this project, I have gained valuable insights into responsive design, effective content curation, and the importance of personal branding.
-  The unique combination of my diverse background, creative approach, and commitment to continuous improvement sets this project apart.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css" />
</head>
```

```css
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #0C3C50;
  color: white;
}
```

```javascript
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}

document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('.menu').classList.remove('active');
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
```

## Demo 📸
![Demo]![image](<Screenshot 2024-07-23 222842-1.png>)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript


## Usage 🎯
To use this website, you only should have a browser.

## Features ⭐

- Home page
- About me page
- My work page
- Contact me page

## Author 👩‍💻
- LinkedIn: https://www.linkedin.com/in/sumita-balouch-959197309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
- Email: sumitabalouch@gmail.com

## Contributing 🤝
Thanks to my web designer colleagues (Hadia Rauf, Fatana Yaqubi, Froozan Azimi and M arzia Arman), who designed this special Portfolio page for me.

## License 📜
MIT license.

