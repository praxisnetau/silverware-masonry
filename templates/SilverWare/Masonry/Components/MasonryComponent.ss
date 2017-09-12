<% if $ListItems %>
  <div class="$WrapperClass" data-masonry-config="$MasonryConfigJSON">
    <div class="masonry-grid-sizer"></div>
    <% loop $ListItems %>
      $renderListItem($First, $Middle, $Last)
    <% end_loop %>
  </div>
<% else %>
  <% include Alert Type='warning', Text=$NoDataMessage %>
<% end_if %>
