import React from 'react'
import Movie from './Movie'
import Container from '@mui/material/Container';

export default function Movies(props) {
    const { movies } = props
    return (
        <Container fixed>
            <div className='card__main'>
                {movies.map(mov => (
                    <Movie key={mov.imdbID} {...mov} />
                ))}
            </div>
        </Container>
    )
}
