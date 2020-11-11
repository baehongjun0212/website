import emoji from 'react-easy-emoji';

export const greeting = {
	username: 'Hong Jun Bae',
	title: 'Hello! I\'m Hong Jun',
	subTitle: emoji("성실과 열정으로 내일의 가능성을 여는 개발자, 배홍준입니다."),
	role: "I'm an endless developer.",
	resumeLink: "https://baehongjun0212.github.io/website",
	view: true
};

export const socialMediaLinks = {
	github: 'https://github.com/baehongjun0212',
	linkedin: 'false',
	email: '<A href="mailto:sembuat12@gmail.com">메일전송</a>',
	facebook: 'https://www.facebook.com/baehongjun0212',
	twitter: 'false',
	instagram: "https://www.instagram.com/b.hhong/",
	medium: 'false',
	stackoverflow: 'false',
};

export const skills = {
	title: emoji("I Can Do ⚡"),
	subTitle: "I'm an endless developer.",
	describeSkills: [
		emoji("✔  Java 8을 사용한 공지사항 푸시 알림 프로젝트 진행"),
		emoji("✔  Python 3을 사용한 학생 정보 GUI 프로젝트 진행"),
		emoji("✔  C & C++을 사용한 얼굴 감지 마스킹 프로젝트 진행"),
		emoji("✔  R과 Google Maps를 사용한 코로나 확진자 위치 시각화 진행"),
		emoji("✔  Flutter을 사용한 공지사항 푸시 알림 하이브리드 앱 개발"),
	],
	// https://fontawesome.com/ icon
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
			date: "test",
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
			desc: "description",
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
	subTitle: "",
	lists: [
		{
			img: require("./assets/sw-movie.jpg"),
			alt: ":)",
			title: "2019.12 SW 교육 동영상 공모전 은상",
			desc: "강원정보문화진흥원 주최"
		},
		{
			img: require("./assets/sw-contest.jpg"),
			alt: ":)",
			title: "2020.11 SW 콘테스트 개발 부문 동상",
			desc: "한림대학교 SW중심대학사업단 주최"
		},
	],
	view: true
};

export const blogs = {
	title: emoji("My Posts 📰"),
	subTitle: "subtitle for posts",
	lists: [
		{
			title: "Post1",
			desc: "Description",
			url: "#"
		},
		{
			title: "post2",
			desc: "Description",
			url: "#"
		},
	],
	view: false
}

export const contactInfo = {
	title: "Contact To Me! 📞",
	subTitle: "성실과 열정으로 내일의 가능성을 여는 개발자, 배홍준입니다.",
	introduce: emoji(""),
	view: true
}