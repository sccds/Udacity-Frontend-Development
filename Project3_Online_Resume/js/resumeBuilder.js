
function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}

$('#main').prepend(internationalizeButton);




var bio = {
	"name" : "Fred Liu",
	"role" : "QA Engineer",
	"contacts" : {
		"mobile" : "201-744-3562",
		"email" : "skywalkerxliu@aliyun.com",
		"github" : "sccds",
		"twitter" : "@skywalkerxliu",
		"location" : "Raleigh, NC"
	},
	"welcomeMessage" : "Welcome to my resume webpage!",
	"skills" : ["Software Testing", "  Embedded Systems", "  IP Stream", "  Networks", " Python Programming", " Piano Performance"],
	"bioPic" : "images/fredliu.jpg"
};

bio.display = function(){
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);


	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);
	var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);

	$("#header").append(HTMLskillsStart);

	var formattedSkills = "";
	for(i in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
	$("ul#skills.flex-box").css("display", "block");
}
bio.display();


var work = {
	"jobs" : [
		{
     	"employer" : "TVU Networks", 
     	"title" : "QA Engineer",
     	"location" : "Raleigh, NC",
     	"dates" : "10-20-2012 ~ Present",
     	"description" : "Test all devices and services."
		},
		{
     	"employer" : "Sony, China Prfessional Solutions Group", 
     	"title" : "Broadcast Systems Engineer Intern",
     	"location" : "Beijing, China",
     	"dates" : "05-01-2011 ~ 07-31-2011",
     	"description" : "Participated high definition outside broadcasting vehicle projects."		
		}
	]
};

work.display = function(){
	for (i in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();

var projects = {
	"projects" : [
		{
	    "title" : "Binomial Tree Option Pricing Model in GPU Implementation", 
      	"dates" : "Mar - May 2012",
      	"description" : "Programmed a binomial tree option pricing model by using GPU hardware and CUDA language, which can greatly reduces the computation time. Through some default value settings, the switching and combination of the European and American model, Call and Put model can be achieved.",
      	"images" : []
		},
		{
		"title" : "Moving Object Tracking Video Monitoring System Based on Beagleboard", 
      	"dates" : "Mar - May 2011",
      	"description" : "Designed and programmed embedded video monitoring system that can detect and track a single moving object based on C(Software) and Beagleboard (Hardware)",
		"images" : []
		},
		{
		"title" : "Simulation of Photovoltaic Power Generation Devices", 
      	"dates" : "Sept, 2009",
      	"description" : "Designed the system structure and the circuit for “Inverter” section and “Regulator and Over-current Protection Control” section using analog and digital circuit",
		"images" : ["images/projectpic1.jpeg", "images/projectpic2.png"]
		},
	]

};

projects.display = function(){
	for (i in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[i].images.length > 0){
			for (img in projects.projects[i].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

var education = {
	"schools":[
		{
			"name" : "Steven Institute of Technology",
			"location" : "Hoboken, NJ",
			"degree" : "Master's",
			"majors" : "Electrical Engineering",
			"dates" : 2012,
			"url" : "https://www.stevens.edu/sit/"
		},
		{
			"name" : "North China University of Technology",
			"location" : "Beijing, China",
			"degree" : "BS",
			"majors" : "Electronics and Information Engineering",
			"dates" : 2010,
			"url" : "http://www.ncut.edu.cn/waiban/waiban-English/index.html"		
		}
	],
	"onlineCourses": [
		{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"dates" : 2015,
			"url" : "https://www.udacity.com/course/nd001"
		},
		{
			"title" : "An Introduction to Interactive Programming in Python",
			"school" : "Coursera",
			"dates" : 2014,
			"url" : "https://www.coursera.org/account/accomplishments/certificate/4FKY2ETM45"			
		}
	]
};


education.display = function(){
	for (i in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedschoolName = formattedschoolName.replace("#", education.schools[i].url);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedschoolTitleDegree = formattedschoolName + formattedschoolDegree;
  		$(".education-entry:last").append(formattedschoolTitleDegree);

		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		$(".education-entry:last").append(formattedschoolDates);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		$(".education-entry:last").append(formattedschoolLocation);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		$(".education-entry:last").append(formattedschoolMajor);
	}


	$('#education').append(HTMLonlineClasses);
	for (i in education.onlineCourses){
		$('#education').append(HTMLschoolStart);
		var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
		var formattedonlineTitle = formattedonlineTitle.replace("#", education.onlineCourses[i].url);
		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedonlineTitleSchool =  formattedonlineTitle + formattedonlineSchool;
  		$(".education-entry:last").append(formattedonlineTitleSchool);
		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		$(".education-entry:last").append(formattedonlineDates);		
		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
		var formattedonlineURL = formattedonlineURL.replace("#", education.onlineCourses[i].url);
		$(".education-entry:last").append(formattedonlineURL);
	}
}
education.display();

$("#mapDiv").append(googleMap);







