function dtime_me(d, like_eu) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1); // Add the specified number of days
  
    var dayNum = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate(); // Add leading zero if needed
    var monthNum = (now.getMonth() + 1 < 10) ? '0' + (now.getMonth() + 1) : (now.getMonth() + 1); // Add leading zero if needed
  
    var formattedDate;
    if (like_eu === true) {
      formattedDate = dayNum + "/" + monthNum + "/" + now.getFullYear();
    } else {
      formattedDate = monthNum + "/" + dayNum + "/" + now.getFullYear();
    }
  
    // Return the formatted date instead of using document.write
    return formattedDate;
  }
  
  function dtime_mt(d) {
    var now = new Date();
    now.setDate(now.getDate() + d + 1); // Add the specified number of days
  
    var dayNum = (now.getDate() < 10) ? '0' + now.getDate() : now.getDate(); // Add leading zero if needed
    var monthName = months_localized['en'][now.getMonth()]; // Use month name from localization
  
    var formattedDate = dayNum + ", " + monthName + " " + now.getFullYear();
  
    // Return the formatted date instead of using document.write
    return formattedDate;
  }
  