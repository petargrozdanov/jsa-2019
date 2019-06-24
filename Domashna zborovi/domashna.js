function broenizborovi() {
    var str ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut velit iaculis velit congue vulputate. Mauris et purus volutpat tellus porttitor dignissim. Donec eleifend molestie nisl. Proin laoreet metus sed metus fringilla sodales. Suspendisse ac nunc fringilla, pellentesque dui eu, scelerisque lorem. Phasellus commodo nisl dui, eu lobortis nibh aliquam dignissim. Sed vehicula, risus vel fringilla vestibulum, arcu leo sodales dui, sed eleifend massa sem vitae orci. Etiam auctor nisl ante, eu aliquam neque euismod nec. Cras rhoncus ut lacus vitae finibus."
    var zbor = 0;
  
    for (var i = 0; i < str.length; i++)
      if (str[i] == " ") { 
       zbor = zbor+1;
    }
 
    return zbor;
  }
  
  console.log(broenizborovi());