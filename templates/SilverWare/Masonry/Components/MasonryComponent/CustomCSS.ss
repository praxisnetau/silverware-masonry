<% if $Gutter %>
  
  {$CSSID} .masonry-grid-item {
    margin-bottom: {$Gutter}px;
  }
  
<% end_if %>

<% loop $ColumnWidths %>
  
  <% if $Breakpoint %>@media (min-width: {$Breakpoint}) {<% end_if %>
    
    {$Up.CSSID} .masonry-grid-sizer,
    {$Up.CSSID} .masonry-grid-item {
      width: {$Width};
    }
    
  <% if $Breakpoint %>}<% end_if %>
  
<% end_loop %>
