import React from 'react';
import { connect } from 'react-redux';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {
	return (
		<div className="project-list section">
			{ projects && projects.map(project => (
				<ProjectSummary project={project} key={project.id} />
			))}
		</div>
	)
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(ProjectList);