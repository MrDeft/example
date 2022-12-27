import React from 'react'

export default function Movie(props) {
    const { Title, Poster, Type, Year } = props
    return (
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-image">
                        <img src={Poster} alt='' />
                    </div>
                    <span class="card-title">{Title.length < 17 ? Title : Title.slice(0, 22)+'...'}</span>
                    <div class="card-content">
                        <span>{Type}</span>
                        <span className='right'>{Year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


