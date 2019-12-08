import React from 'react'

const ProjectDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aperiam vel atque, nam itaque laudantium nobis dolorem, tenetur placeat sequi, reiciendis in distinctio modi. Tempora, repellendus. Earum nam molestiae error!</p>
				</div>
				<div className="card-action lighten-4 grey grey-text">
					<div>Posted by Jack Owen</div>
					<div>2nd September, 2am</div>
				</div>
			</div>
		</div>
	)
}

export default ProjectDetails
