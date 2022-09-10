export interface ISkill {
	title: string;
	image: {
		asset: {
			url: string;
		};
	};
}

export interface IProject {
	title: string;
	description: string;
	slug: {
		current: string;
	};
	coverImage: {
		asset: {
			url: string;
		};
	};
	githubUrl: string;
	demoUrl: string;
	publishedAt: string;
	body: object[];
}
