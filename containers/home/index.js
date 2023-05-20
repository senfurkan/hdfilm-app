import React from 'react'

import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"

import FeatureMovie from '@/components/featured-movie'
import Categories from '@/components/categories'
import MoviesSection from '@/components/movie-section'


function Home() {
  return (
    <div>
        <FeatureMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0,5)}/>
        <MoviesSection title="Popular Films" movies={Movies.results.slice(1,7)}/>
        <MoviesSection title="Your Favorities" movies={Movies.results.slice(7,13)}/>
    </div>
  )
}

export default Home