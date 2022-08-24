import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.css']
})
export class WebDevComponent implements OnInit {
  skillset = [
    {
      name: 'Javascript',
      experience: '4 Years',
      icon: '../../../assets/logos/JS_logo.png',
      barPercent: 77
    }, {
      name: 'HTML & CSS',
      experience: '4 Years',
      icon: 'https://i.pinimg.com/originals/52/2e/6b/522e6bc1a11d1726a35f81cbd979395f.jpg',
      barPercent: 73
    }, {
      name: 'Angular',
      experience: '3 Years',
      icon: 'https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png',
      barPercent: 75
    }, {
      name: 'Cloudflare',
      experience: '5 Months',
      icon: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG16gpXzS14DQ/company-logo_200_200/0/1625230996048?e=2147483647&v=beta&t=yQDvfwmDl_tA9eGLJVTmT66rfnyWAitifuj5CBFtcKo',
      barPercent: 30
    }, {
      name: 'PHP',
      experience: '6 Months',
      icon: 'https://ik.imagekit.io/aoi3fgebjgr/wp-content/uploads/2003/01/phplogo.jpg',
      barPercent: 40
    }, {
      name: 'Firebase',
      experience: '2 Months',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpLzZTnWS6Hj8tLPJzlZTE2t0MVtZJgg1hdq88RcPI-ZHDL6RDzxfNs9BRSTU9ODM3qM&usqp=CAU',
      barPercent: 42
    }, {
      name: 'MySQL',
      experience: '3 Years',
      icon: 'https://pngimg.com/uploads/mysql/mysql_PNG23.png',
      barPercent: 70
    }, {
      name: 'NGINX',
      experience: '2.5 years',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIh3tHh6CZGZ4EGIq6HfJrSHa94msypOzf64dHq_4&s',
      barPercent: 50
    }, {
      name: 'Node.js',
      experience: '4 Years',
      icon: 'https://www.logolynx.com/images/logolynx/ec/ec9224e14b7476e155b363056123d564.jpeg',
      barPercent: 80
    }, {
      name: 'MongoDB',
      experience: '3 Months',
      icon: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png',
      barPercent: 20
    }, {
      name: 'OpenGL',
      experience: '4 Months',
      icon: 'https://www.opengl.org/img/opengl_logo.png',
      barPercent: 43
    }, {
      name: 'Git',
      experience: '2 Years',
      icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      barPercent: 69
    },
  ].sort((a, b) => b.barPercent - a.barPercent)

  constructor() { }

  ngOnInit(): void {
  }

}
