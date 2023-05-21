import React from 'react';
import { notFound } from "next/navigation";

import MovieContainer from '@/containers/movie';
import Movies from '@/mocks/movies.json'

function MoviePage({ params, searchParams }) {
    //url alanında girilen params.id ile eşleşen movie.id'lerini verir
    const movieDetail = Movies.results.find(movie => movie.id.toString() === params.id);

    //kullanıcı url'e eliyle random karakter girişi yaparsa bulunamadı sayfasına yönlendir.
    if (!movieDetail) {
        notFound()
    }

    if (searchParams.error === "true") {
        throw new Error("Error happened")
    }
    return (
        <MovieContainer movie={movieDetail} />
    )
}

export default MoviePage