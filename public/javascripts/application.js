$(document).ready(function() {
  $('#global_search input').autocomplete({
    source : '/people',
    appendTo : ''
    });

  $('#global_search input').blur(function(evt){
      $(this).close
    });

  $('#main_stream').infinitescroll({
    navSelector  : "div.pagination",
                   // selector for the paged navigation (it will be hidden)
    nextSelector : ".pagination a.next_page",
                   // selector for the NEXT link (to page 2)
    itemSelector : "#main_stream .stream_element",
                   // selector for all items you'll retrieve
    bufferPx: 300,
    donetext: "no more.",
    loadingText: "",
    loadingImg: '/images/ajax-loader.gif'
  });
});

