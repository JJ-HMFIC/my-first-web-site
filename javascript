<!doctype html>
<html>
<head>
  <title>WEB1 - JavaScript</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <!--<input type="button" value="night" onclick="
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
  ">
  <input type="button" value="day" onclick="
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';"
    >-->
  <!--<input id = "night_day" type="button" value="night" onclick="
    if(document.querySelector('#night_day').value === 'night')
    {
      document.querySelector('body').style.backgroundColor = 'black';
      document.querySelector('body').style.color = 'white';
      document.querySelector('#night_day').value = 'day'
    }
    else
    {
      document.querySelector('body').style.backgroundColor = 'white';
      document.querySelector('body').style.color = 'black';
      document.querySelector('#night_day').value = 'night'
    }
      ">-->
  <input type="button" value="night" onclick="
  var target =  document.querySelector('body');
  if(this.value === 'night')
    {
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      this.value = 'day' ;

      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i<alist.length)
      {
        alist[i].style.color = 'powderblue';
        i = i++;
      }
    }
    else
    {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      this.value = 'night';

      /*var alist = document.querySelectorAll('a');
      var i = 0;
      while(i<alist.length)
      {
        alist[i].style.color = 'blue';
        i = i++;
      }*/
    }
      ">
  <ol>
    <li><a href="1.html">HTML</a></li>
    <li><a href="2.html">CSS</a></li>
    <li><a href="3.html">JavaScript</a></li>
  </ol>
  <h2>JavaScript</h2>
  <p>
    JavaScript (/ˈdʒɑːvəˌskrɪpt/[6]), often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. The majority of websites employ it, and all modern web browsers support it without the need for plug-ins by means of a built-in JavaScript engine. Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.
  </p>
  
</body>
</html>
