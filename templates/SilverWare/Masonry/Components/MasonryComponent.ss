<% if $ListItems %>
  <div class="$GridClass" data-masonry-config="$MasonryConfigJSON">
    <div class="masonry-grid-sizer"></div>
    <% loop $ListItems %>
      <% include SilverWare\Masonry\Components\MasonryComponent\ListItem %>
    <% end_loop %>
  </div>
<% else %>
  <% include Alert Type='warning', Text=$NoDataMessage %>
<% end_if %>
