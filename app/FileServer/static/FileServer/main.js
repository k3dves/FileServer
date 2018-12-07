$(document).ready(function(){

  // function updateTable(data){
  //
  //   //update location bar
  //   var path= data[0].path.slice(1,-1);
  //   for (var key in path){
  //     var a=document.createElement("a")
  //     a.appendChild
  //   }
  //
  //   //update table
  //   var new_tbdy=document.createElement('tbody');
  //   console.log(data);
  //   for(var key in data){
  //
  //
  //     var tr = document.createElement("tr");
  //     var td_name = document.createElement("td");
  //     var td_size = document.createElement("td");
  //     var td_path = document.createElement("td");
  //     var td_modified = document.createElement("td");
  //
  //     var txt_name = document.createTextNode(data[key].name);
  //     var txt_size = document.createTextNode(data[key].size);
  //     var txt_path = document.createTextNode(data[key].path);
  //     var txt_modified = document.createTextNode(data[key].modified);
  //
  //     var link=document.createElement('a');
  //     if (data[key].dir){
  //     link.classList.add("folder");
  //   }
  //   else {
  //     link.classList.add("file");
  //   }
  //     link.appendChild(txt_name);
  //     td_name.appendChild(link);
  //     td_size.appendChild(txt_size);
  //     td_path.appendChild(txt_path);
  //     td_modified.appendChild(txt_modified);
  //
  //     tr.appendChild(td_name);
  //     tr.appendChild(td_size);
  //     tr.appendChild(td_path);
  //     tr.appendChild(td_modified);
  //     new_tbdy.appendChild(tr);
  //     $(".tbdy").replaceWith(new_tbdy);
  //     new_tbdy.classList.add("tbdy");
  //   }
  //
  //
  // };
  //
  // $(document).on('click','.file',function(){
  //
  //   var url = 'api?f='+window.location.search.slice(3,)+this.text+'/';
  //   history.pushState(null,null,url);
  //   console.log(url);
  //
  //   $.get(url,function(data,status){
  //       updateTable(data);
  //   },);
  //
  // });

  // $(document).on('click','.file',function(){
  //   window.open('http://'+window.location.hostname+'/cdn/'+this.href.split('/').slice(5,).join('/'), "", "width=200,height=100");
  //
  //
  // });



});
