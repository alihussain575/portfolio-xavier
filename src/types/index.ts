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
	tags: ITag[];
	githubUrl: string;
	demoUrl: string;
}

export interface ITag {
	title: string;
	image: {
		asset: {
			url: string;
		};
	};
}
