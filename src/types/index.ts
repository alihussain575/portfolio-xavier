export interface IIntro {
  largeText: object[];
  smallText: object[];
}

export interface IAbout {
  body: object[];
}

export interface IContact extends IAbout {}

export interface ISpareTime {
	_id : string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}

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