export interface ISkill {
	_id: string;
	title: string;
	image: {
		asset: {
			url: string;
		};
	};
}

export interface IProject {
	_id: string;
	title: string;
	description: string;
	coverImage: {
		asset: {
			url: string;
		};
	};
	githubUrl: string;
	demoUrl: string;
}
