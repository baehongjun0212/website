import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Hong Jun Bae',
	title: 'Hello! I\'m Hong Jun',
	subTitle: emoji("성실과 열정으로 내일의 가능성을 여는 개발자, 배홍준입니다."),
	role: "I'm noob student developer.",
	resumeLink: "Your resume link... google drive or something else",
	// IMPORTANT
	// If you don't want to show this, change view to false. DO NOT DELETE!
	view: true
};

export const socialMediaLinks = {
	// IMPORTANT
	// if you don't have, change value to blank or false!! DO NOT DELETE!
	github: 'https://github.com/baehongjun0212',
	linkedin: 'Your linkedin link',
	email: '<A href="mailto:sembuat12@gmail.com">메일전송</a>',
	facebook: 'https://www.facebook.com/baehongjun0212',
	twitter: "Your twitter link",
	instagram: "https://www.instagram.com/b.hhong/",
	medium: 'Your medium link',
	stackoverflow: 'Your stackoverflow link'
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "　",
	describeSkills: [
		emoji("✔  Java 8을 사용한 공지사항 푸시 알림 프로젝트 진행"),
		emoji("✔  Python 3을 사용한 학생 정보 GUI 프로젝트 진행"),
		emoji("✔  C & C++을 사용한 얼굴 감지 마스킹 프로젝트 진행"),
		emoji("✔  R과 Google Maps를 사용한 코로나 확진자 위치 시각화 진행"),
		emoji("✔  Flutter을 사용한 공지사항 푸시 알림 하이브리드 앱 개발"),
	],
	// IMPORTANT
	// You need to find className for font-awesome icon
	// Go to https://fontawesome.com/ and search icon
	lists: [
		{fontAwesome: "fab fa-java", text: "Java 8", proficiency: 60}, 
		{fontAwesome: "fab fa-python", text: "Python 3", proficiency: 60},
		{fontAwesome: "fas fa-copyright", text: "C, C++", proficiency: 50},
		{fontAwesome: "fab fa-android", text: "Android", proficiency: 40},
		{fontAwesome: "fab fa-react", text: "React", proficiency: 40},
		{fontAwesome: "fab fa-r-project", text: "R", proficiency: 60},
	],
	view: true
};

export const experience = {
	title: "Work Experience",
	lists: [
		{
			date: "2018.03~",
			company: "Google",
			role: "Front-End Developer",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		},
		{
			date: "test",
			company: "test",
			role: "test",
		}
	],
	view: false
}

export const openSourceProjects = {
	title: emoji("Open Source Projects 💻"),
	view: true
}

export const projects = {
	title: emoji("Projects 💻"),
	subTitle: "subtitle for projects",
	lists: [
		{
			title: "Project1",
			desc: "very very very very very very very very very very very very very very long very long description for clamp testing",
			url: "#"
		},
		{
			title: "Project2",
			desc: "description",
			url: "#"
		}
	],
	view: false
}

export const achievements = {
	title: emoji("Achievements And Certifications 🏆"),
	subTitle: "subtitle for achievement",
	lists: [
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Achievement...😥",
			desc: "I'll try harder!"
		},
		{
			img: require("./assets/sad-icon.png"),
			alt: "I'm sad..",
			title: "There is no Certification...😥",
			desc: "I'll try harder!"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Your Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "Your post2",
			desc: "Description",
			url: "#"
		},
	],
	view: true
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "성실과 열정으로 내일의 가능성을 여는 개발자, 배홍준입니다.",
	introduce: emoji(""),
	view: true
}