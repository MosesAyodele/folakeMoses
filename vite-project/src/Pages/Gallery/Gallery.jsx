import "./Gallery.css"
import React, { useEffect, useState } from 'react'


const Gallery = () => {

      const images = [
        'https://i2-prod.birminghammail.co.uk/incoming/article18512897.ece/ALTERNATES/s1200/0_etihad-gv.jpg',
        'https://images.wsj.net/im-797367/?width=1278&size=1',
        'https://w0.peakpx.com/wallpaper/560/77/HD-wallpaper-manchester-city-fc-club-emblem-football-logo-man-city-manchester-city-thumbnail.jpg',
        'https://w0.peakpx.com/wallpaper/410/847/HD-wallpaper-manchester-city-city-inglaterra-premier-league.jpg',
        'https://cdn.wallart.com/img/psk/EgWS4KzTJhBnXQ/wallpaper-for-walls-etihad-stadium-manchester-city-103-w1000.jpg',
        'https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/M3377P5VEAEV7VWHCPI4DWY2PA.jpg',
        'https://icdn.esteemedkompany.com/wp-content/uploads/2024/02/manchester-city-v-sheffield-united-premier-league-1.jpg',
        'https://wahyuinqatar.wordpress.com/wp-content/uploads/2012/10/manchesterunitedstadium023.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/99245b94580461.5e826cf079da0.jpg',
        'https://live.staticflickr.com/3375/3485296852_c77338a82d_c.jpg',
        'https://www.mancity.com/meta/media/qf1l3iwq/manchester-city-1904-fa-cup-pic.jpg?width=1620',
        'https://i.guim.co.uk/img/media/5be3bb1c09d8165136e8d56c457bb0cca7eb030c/0_276_5568_3341/master/5568.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=5227d4d1c698f94459c6aa7a79d4add9',
        'https://i2-prod.manchestereveningnews.co.uk/sport/football/football-news/article27275495.ece/ALTERNATES/s1200b/0_ManCityTrophyVisit-Jim-Dolan2.jpg',
        'https://www.hospitalitycentre.co.uk/wp-content/uploads/2022/07/Etihad-Stadium-hospitality-packages-8-1.jpg',
        'https://c8.alamy.com/comp/G56XG0/seats-inside-etihad-stadium-manchester-city-football-club-uk-G56XG0.jpg',
        'https://www.telegraph.co.uk/content/dam/football/2023/05/18/TELEMMGLPICT000335973414_trans_NvBQzQNjv4BqoQs0bxrJ0VMctHYmJMv0P3cBYTXaUwLzp8zBYphQWkg.jpeg?impolicy=logo-overlay'

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
  
    return () => clearInterval(intervalId); 
}, [images.length]);

  return (
    <div className='Gallery-container'
    style={{
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      height: '80vh',
      width: '80%',
    }}>
      
    </div>
  )
}

export default Gallery
