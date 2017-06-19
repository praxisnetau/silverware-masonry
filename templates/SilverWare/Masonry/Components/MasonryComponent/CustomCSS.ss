<% if $Gutter %>
  
  {$CSSID} .masonry-grid-item {
    margin-bottom: {$Gutter}px;
  }
  
<% end_if %>

<% loop $ColumnWidths %>
  
  <% if $Breakpoint %>@media (min-width: {$Breakpoint}) {<% end_if %>
    
    {$Up.CSSID} .masonry-grid-sizer,
    {$Up.CSSID} .masonry-grid-item {
      <% if $Unit == '%' %>
        width: calc({$Width} - {$Gutter}px);
      <% else %>
        width: {$Width};
      <% end_if %>
    }
    
  <% if $Breakpoint %>}<% end_if %>
  
<% end_loop %>
