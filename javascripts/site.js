// This is where it all goes :)

platform_data = {
  "Facebook": {"action": "Deactivate at Death" , "account": "Fb.com/MarceCF" ,"send_to":""},
  "Twitter": {"action": "Make Public" , "account": "@marcecf" ,"send_to":""},
  "Pinterest": {"action": "Send account info to" , "account": "marcecf" ,"send_to":"e...o@gmail.com"},
  "LinkedIn": {"action": "Deactivate at Death" , "account": "marcecf" ,"send_to":""},
  "Google": {"action": "Deactivate at Death" , "account": "marce@gmail.com" ,"send_to":""},
  "Nest": {"action": "Send account info" , "confirm": "Confirm purchase for</br>$3 USD", "account": "aeonest@aeonapp.com" ,"send_to":"d....i@yahoo.com"}
}

function changeToAction(platform){
  current_data = platform_data[platform]
  console.log(current_data)
  content = '<div class="content_headerregister"><div class="content_titleregister">'+ platform + '</div><div class="content_titleedit">edit</div></div><div class="content_headersubtitle">'+ current_data["account"] + '</div><div class="content_registeraction"><div class="content_actionname">'+ current_data["action"]+ '</div><div class="content_actionaccount">' + current_data["send_to"] +'</div></div>'
  console.log($($(document.activeElement).parents()[1]).html(content))

  $(function () {
      var options = {
          cellHeight: 80,
          verticalMargin: 10
      };
      $('.grid-stack').gridstack(options);

  });

}

function changeToConfirm(platform){
  current_data = platform_data[platform]
  console.log(current_data)
  content = '<div class="content_headerregister"><div class="content_titleregister">'+ platform +'</div></div><div class="content_headersubtitle">'+ current_data["account"] + '</div><div class="content_registeraction"><div class="content_actionname">'+current_data["confirm"]+'</div></div><div class="submit"><input class="activate" type="submit" value="Activate" onclick="changeToAction(\''+platform+'\')"></div>'
  console.log($($(document.activeElement).parents()[1]).html(content))

  $(function () {
      var options = {
          cellHeight: 80,
          verticalMargin: 10
      };
      $('.grid-stack').gridstack(options);

  });

}

$( document ).ready(function() {
    $(this ).parents()
});

$(function () {
    var options = {
        cellHeight: 80,
        verticalMargin: 10
    };
    $('.grid-stack').gridstack(options);

});
