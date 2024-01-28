/** @format */

const moviesList = [
  {
    Title: "Arrow",
    genre: "Action",
    available: true,
    rating: 7,
  },

  {
    Title: "Strenger Things",
    genre: "Horror",
    available: false,
    rating: 10,
  },

  {
    Title: "sex education",
    genre: "Drama",
    available: true,
    rating: 6,
  },

  {
    Title: "interstaller",
    genre: "Science fiction",
    available: false,
    rating: 8,
  },

  {
    Title: "jumanji",
    genre: "Adventure",
    available: true,
    rating: 5,
  },

  {
    Title: "Mr Bones",
    genre: "Comedy",
    available: true,
    rating: 7,
  },

  {
    Title: "Lion King",
    genre: "Animation",
    available: true,
    rating: 7,
  },

  {
    Title: "High school musical",
    genre: "musical",
    available: true,
    rating: 10,
  },
];

class MovieRental {
  movies = [...moviesList];

  rentMovie(movieName) {
    const title = this.movies.find((mov) => mov.Title === movieName);

    // if (!title) {
    //   console.log("Movie out of stock");
    //   return;
    // }

    if (title && !title.available) {
      console.log("Movie is not available at the moment");
    }
    if (title && title.available) {
      console.log(`${title?.Title} has ben rented by you`);
    } else {
      console.log("Movie out of stock");
    }
  }
}

const me = new MovieRental();

me.rentMovie("High school musial");