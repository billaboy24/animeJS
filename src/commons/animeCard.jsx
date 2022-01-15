/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import {Link}from 'react-router-dom'


function AnimeCard({anime}) {
	
  

	return (
		<article className="anime-card">
			<Link
				
					to= "/details"
					state={anime}
				  
				
				>
					
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Picture" />
				</figure>
				<h3>{ anime.title }</h3>
			</Link>
		</article>
	)
}

export default AnimeCard