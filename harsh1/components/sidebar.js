function sidebar() {
return `<div id="home"><a href="/harsh1/index.html" id="home1">Home</a></div>
<div id="search-box">
<input type="text" id="searchbar" placeholder="Search">
</div>

<style>
  #sidebar{
    display: flex; border: 1px solid grey;
    height:40px;
  }
  #home{
    flex: 1;border: 1px solid grey; height:40px;
    text-align: center;
  }
  #home1:visited{
      color:black; text-decoration:none !important;
  } 
  #home1:link{
    color:black; text-decoration:none !important;
}
#home1:active{
    color:black; text-decoration:none !important;
}
  #search-box{
    flex: 4;width: 300px;
    border: 1px solid grey; height:40px;
  }
  </style>
 
});
`
}
export default sidebar;