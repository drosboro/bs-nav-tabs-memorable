// bs-nav-tabs-memorable (v0.1.0)
// Copyright 2017 Gecko Digital.  All rights reserved.

// Usage
// Simply add the class ".nav-tabs-memorable" to any bootstrap nav-tabs.  Make sure the nav-tab has an id.
// When you reload a page containing a nav-tab, it will remember the last tab the user was on, and show it on document.ready().
//
// Dependencies:
//   bootstrap v4.0.0-alpha6
//   js.cookie (provided by js_cookie_rails, ~> 2.1)

var bs_nav_tabs_memorable, remember_last_tab;

remember_last_tab = function(nav_id) {
  var last_tab;
  $('#' + nav_id + ' a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    return Cookies.set(nav_id + "-last-tab", $(e.target).attr("href"));
  });
  last_tab = Cookies.get(nav_id + "-last-tab");
  if (last_tab) {
    return $('#' + nav_id + ' a[href="' + last_tab + '"]').tab("show");
  }
};

bs_nav_tabs_memorable = function(css_class) {
  if (css_class == null) {
    css_class = "nav-tabs-memorable";
  }
  return $("." + css_class).each(function() {
    if ($(this).attr('id') !== void 0) {
      return remember_last_tab($(this).attr('id'));
    } else {
      return console.log("Can't add nav-tabs-memorable behaviors to navs that don't have an ID.");
    }
  });
};

$(function() {
  return bs_nav_tabs_memorable("nav-tabs-memorable");
});

