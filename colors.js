var Links = {
    setColor : function(color)
    {
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while(i<alist.length)
    //   {
    //     alist[i].style.color = color;
    //     i++;
    //   }
        $('a').css('color', color); // 웹페이지의 모든 a태그를 jquery로 제어
    }
  }
  var Body = {  // 객체
    setColor : function (color)
    {
      //document.querySelector('body').style.color = color;
      $('body').css('color', color);
    },
    setBackgroundColor : function(color)
    {
      //document.querySelector('body').style.backgroundColor =  color;
      $('body').css('backgroundColor', color);
    }
  }
  function nightDayHandler(self)
  {
    // 함수 내에서 this = 전역 객체 , 따라서 self 사용 
    var target =  document.querySelector('body');
    if(self.value === 'night')
    {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value = 'day' ;
      Links.setColor('powderblue');
    }
    else
    {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night' ;
      Links.setColor('blue');
    }
    
  }
