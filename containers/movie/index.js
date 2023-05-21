import React from 'react';
import FeatureMovie from '@/components/featured-movie';

function MovieContainer({movie}) {
    return (
        <FeatureMovie movie={movie} isCompact={false} />
    )
}

export default MovieContainer;