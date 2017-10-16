<% if $ListItems %>
  <div class="$WrapperClass" data-masonry-config="$MasonryConfigJSON">
    <div class="masonry-grid-sizer"></div>
    <% loop $ListItems %>
      $renderListItem($First, $Middle, $Last)
    <% end_loop %>
  </div>
  <% if $PaginateItems %>
    <% include Pagination List=$ListItems %>
  <% end_if %>
<% else_if $NoDataMessageShown %>
  <% include Alert Type='warning', Text=$NoDataMessage %>
<% end_if %>
